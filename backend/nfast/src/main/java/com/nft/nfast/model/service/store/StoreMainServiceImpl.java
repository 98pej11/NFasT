package com.nft.nfast.model.service.store;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.nft.nfast.controller.JWTUtil;
import com.nft.nfast.entity.business.IncomeList;
import com.nft.nfast.entity.business.Store;
import com.nft.nfast.entity.user.Token;
import com.nft.nfast.entity.user.User;
import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.model.dto.user.TokenDto;
import com.nft.nfast.model.dto.user.UserDto;
import com.nft.nfast.repository.IncomeListRepository;
import com.nft.nfast.repository.NfastRepository;
import com.nft.nfast.repository.StoreRepository;
import com.nft.nfast.repository.TokenRepository;
import lombok.extern.slf4j.Slf4j;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.math.BigDecimal;
import java.net.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@Slf4j
@Service
public class StoreMainServiceImpl implements StoreMainService {
    @Autowired
    NfastRepository nfastRepository;
    @Autowired
    StoreRepository storeRepository;

    @Autowired
    IncomeListRepository incomeListRepository;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    JWTUtil jwtUtil;

    // 발행한 nft 저장
    @Override
    public void saveNfast(NfastMintDto mintDto) {
        // 발행 개수, Store객체, 고유값 리스트 불러오기
        int nFastSupply = mintDto.getNfastSupply();
        System.out.println("check " + mintDto);
        Store store = storeRepository.findByStoreSequence(mintDto.getStoreSequence());
        List<String> hashList = mintDto.getNfastHash();
        List<String> nfastQrList = mintDto.getNfastQr();
        List<String> nfastRefundQrList = mintDto.getNfastRefundQr();
        mintDto.setNfastUseState((byte) 0);
        mintDto.setNfastSaleState((byte) 0);
        // DB에 저장
        for (int i = 0; i < nFastSupply; i++) {
            // 고유값 리스트 -> for문 밖으로 빼야됨 (한 생성에 한 개 생김)
            String hash = hashList.get(i);

            // QR 리스트
            String nfastQr = nfastQrList.get(i);

            // 환불 QR 리스트
            String nfastRefundQr = nfastRefundQrList.get(i);

            nfastRepository.save(mintDto.toMintEntity(store, hash, nfastQr, nfastRefundQr));
        }
    }

    // 전체 수입 출력
    @Override
    public List<IncomeFindDto> findAllIncomes(Long storeSequence) {
        // 해당 가게의 수입 내역 저장
        List<IncomeList> incomes = incomeListRepository.findAllByStoreSequence(storeSequence);
        List<IncomeFindDto> incomeListGetDto = new ArrayList<>();
        for (IncomeList income : incomes) {
            incomeListGetDto.add(IncomeFindDto.builder()
                    .incomeListTransaction(income.getIncomeListTransaction())
                    .incomeListPrice(income.getIncomeListPrice())
                    .incomeListDate(income.getIncomeListDate())
                    .incomeListType(income.getIncomeListType())
                    .build());
        }
        return incomeListGetDto;
    }

    // 월 발행 수입 조회
    @Override
    public BigDecimal findMintIncome(Long storeSequence) {
        List<IncomeList> mintIncomeList = incomeListRepository.findMintIncome(storeSequence);
        BigDecimal mintIncome = new BigDecimal("0");
        for (int i = 0; i < mintIncomeList.size(); i++) {
            mintIncome = mintIncome.add(mintIncomeList.get(i).getIncomeListPrice());
        }
        return mintIncome;
    }

    // 월 리셀 수입 조회
    @Override
    public BigDecimal findResellIncome(Long storeSequence) {
        List<IncomeList> resellIncomeList = incomeListRepository.findResellIncome(storeSequence);
        BigDecimal resellIncome = new BigDecimal("0");
        for (int i = 0; i < resellIncomeList.size(); i++) {
            resellIncome = resellIncome.add(resellIncomeList.get(i).getIncomeListPrice());
        }
        return resellIncome;
    }

    // 발행한 NFT 보기 (날짜별 가격, 판매 현황)
    @Override
    public List<NfastMintedDto> findMintedNfast(Long storeSequence) {
        List<NfastMinted> mintedNfast = nfastRepository.findUsedByNfastDate(storeSequence);
        List<NfastMintedDto> mintedNfastList = new ArrayList<>();
        for (NfastMinted m : mintedNfast) {
            Date mintedDate = m.getNfastDate();
            BigDecimal defaultPrice = nfastRepository.findDefaultPriceByNfastDate(mintedDate);
            mintedNfastList.add(NfastMintedDto.builder()
                    .nfastDate(m.getNfastDate())
                    .nfastDefaultPrice(defaultPrice)
                    .nfastSaleCount(m.getNfastSaleCount())
                    .nfastTotalCount(m.getNfastTotalCount())
                    .build());
            System.out.println(m);
        }
        return mintedNfastList;
    }

    // 가게 등록
    @Override
    public void saveStore(StoreRegistDto storeInfo) throws URISyntaxException, ParseException {
        String storeInfoNumber = storeInfo.getStoreInfoNumber();
        String storeName;
        String storeAddress = storeInfo.getStoreAddress();

        // 사업자 등록번호로 사업장명 조회하기
        storeName = getStoreName(storeInfoNumber);
        System.out.println(storeName);
        // 주소로 위도, 경도 가져오기
        Map<String, String> address = getLatandLng(storeAddress);
        String lat = address.get("lat");
        String lng = address.get("lng");
        // 이름, 위도, 경도로 가게 정보 불러오기
        StoreDto store = getStoreInfo(storeName, lat, lng);
        store.setStoreWallet(storeInfo.getStoreWallet());
        storeRepository.save(store.toEntity());

    }

    // 가게 등록 - 사업자 등록번호로 사업장명 조회
    public String getStoreName(String storeInfoNumber) {
        String tempUrl = "https://bizno.net/api/fapi?key=YWNkMTAyNkBuYXZlci5jb20g&gb=1&q=" + storeInfoNumber + "&type=json";
        String storeName = null;
        try {
            URL url = new URL(tempUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-Type", "application/text; utf-8");
            conn.setDoOutput(true);

            // 서버로부터 데이터 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = br.readLine();
            // 문자열로 읽어온 정보 저장할 객체
            JSONObject jsonObject = null;
            // json형태로 파싱할 객체
            JSONParser parser = new JSONParser();

            // 문자열로 읽어온 정보를 obj->json으로 저장
            Object obj = parser.parse(line);
            jsonObject = (JSONObject) obj;

            // items 값만 가져옴
            Object items = jsonObject.get("items");
            JSONArray jsonArray = (JSONArray) items;
            JSONObject temp = (JSONObject) jsonArray.get(0);

            // items 중 회사명만 가져옴
            storeName = (String) temp.get("company");
            System.out.println("store name is " + storeName);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return storeName;
    }

    // 가게 등록 - 가게 주소로 위도 경도 조회
    private Map<String, String> getLatandLng(String storeAddress) {
        Map<String, String> ret = new HashMap<>();
        System.out.println("가게 주소 " + storeAddress);
        String lat;
        String lng;
        try {
            String API_KEY = "AIzaSyDrodeeDHWhz0rvY5Rm5qjuQCjRv2ernYM";
            String surl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + URLEncoder.encode(storeAddress, "UTF-8") + "&key=" + API_KEY;
            URL url = new URL(surl);

            InputStream is = url.openConnection().getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));

            StringBuilder responseStrBuilder = new StringBuilder();
            String inputStr;
            System.out.println(">>>>>>>>>> >>>>>>>>>> InputStream Start <<<<<<<<<< <<<<<<<<<<");
            while ((inputStr = br.readLine()) != null) {
//                System.out.println(">>>>>>>>>>     " + inputStr);
                responseStrBuilder.append(inputStr);
            }
            System.out.println(">>>>>>>>>> >>>>>>>>>> InputStream End <<<<<<<<<< <<<<<<<<<<");

            // 문자열로 읽어온 정보 저장할 객체
            JSONObject jsonObject = null;
            // json형태로 파싱할 객체
            JSONParser parser = new JSONParser();

            // 문자열로 읽어온 정보를 obj->json으로 저장
            Object obj = parser.parse(responseStrBuilder.toString());
            jsonObject = (JSONObject) obj;

            // results 값만 가져옴
            Object results = jsonObject.get("results");
            JSONArray jsonArray = (JSONArray) results;


            if (((JSONArray) results).size() != 0) {
                JSONObject temp;
                JSONObject jo = (JSONObject) jsonArray.get(0);
                Object obj2 = parser.parse(jo.get("geometry").toString());
                temp = (JSONObject) obj2;

                JSONObject jo2 = (JSONObject) temp.get("location");
                Object obj3 = parser.parse(jo2.toString());

                JSONObject temp2;
                temp2 = (JSONObject) obj3;

                lng = String.valueOf(temp2.get("lng"));
                lat = String.valueOf(temp2.get("lat"));

                ret.put("lat", lat);
                ret.put("lng", lng);

            }
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return ret;
    }


    // 가게 등록 - 가게 이름과 위도, 경도로 가게 정보 조회
    public StoreDto getStoreInfo(String storeName, String lat, String lng) throws URISyntaxException, ParseException {
        // 위도 lat,y, 경도 lng,x
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        StoreDto store = new StoreDto();
        // API 키 설정
        String appKey = "KakaoAK b7e0a5dabf645d026a3345e4f484c4a0";
        headers.set("Authorization", appKey);


        String encode = URLEncoder.encode(storeName);
        String tempUri = "?query=" + encode + "&x=" + lng + "&y=" + lat + "&radius=" + 100;
        String rawURI = "https://dapi.kakao.com/v2/local/search/keyword.json" + tempUri;
        System.out.println(rawURI);
        URI uri = new URI(rawURI);

        RequestEntity<String> rq = new RequestEntity<>(headers, HttpMethod.GET, uri);
        ResponseEntity<String> re = rest.exchange(rq, String.class);

        JSONParser jsonParser = new JSONParser();
        JSONObject body = (JSONObject) jsonParser.parse(re.getBody().toString());
        JSONArray docu = (JSONArray) body.get("documents");
        System.out.println("크기!!!!!!!!!!!" + body.size());
        System.out.println("바디 " + body);
        Date date = new Date();

        if (docu.size() != 0) {
            JSONObject addr = (JSONObject) docu.get(0);
            System.out.println(addr);
            String placeName = (String) addr.get("place_name");
            String storeAddress = (String) addr.get("road_address_name");
            String storeCategory = (String) addr.get("category_name");
            String storePhone = (String) addr.get("phone");
            String storeLng = (String) addr.get("x");
            String storeLat = (String) addr.get("y");

            store.setStoreName(placeName);
            store.setStoreAddress(storeAddress);
            store.setStoreCategory(storeCategory);
            store.setStorePhone(storePhone);
            store.setStoreLng(storeLng);
            store.setStoreLat(storeLat);
            store.setStoreDate(date);
        }
        return store;
    }

    //가게 로그인
    @Override
    public TokenDto storeLogin(String wallet) {
        Optional<Store> storeWrapper = storeRepository.findByStoreWallet(wallet);
        TokenDto tokenDto = null;

        if (storeWrapper.isPresent()) {
            Store store = storeWrapper.get();
            String authToken = jwtUtil.createAuthToken(store.getStoreSequence());
            String refreshToken = jwtUtil.createRefreshToken();
            tokenDto = TokenDto.builder()
                    .tokenAccess(authToken)
                    .tokenRefresh(refreshToken)
                    .tokenUserSequence(store.getStoreSequence())
                    .tokenType((byte) 1)
                    .tokenWallet(wallet)
                    .build();
            tokenRepository.save(tokenDto.toEntity());
        }
        return tokenDto;
    }

    @Override
    public Store getStore(long storeSequence) {
        Store store = storeRepository.findByStoreSequence(storeSequence);
        return store;
    }

    // 가게 정보 출력
    @Override
    public StoreRegistDto getStoreInfo(long storeSequence) {
//        Optional<Store> storeWrapper = storeRepository.findById(storeSequence);
//        Store store = null;
//        if(storeWrapper.isPresent()){
//            store=storeWrapper.get();
////            store = s.toDto();
//        }
//        return store;
        Store store = storeRepository.findByStoreSequence(storeSequence);
        StoreRegistDto storeRegistDto = StoreRegistDto.builder()
                .storeName(store.getStoreName())
                .storeInformation(store.getStoreInformation())
                .storeWallet(store.getStoreWallet())
                .storeAddress(store.getStoreAddress())
                .storePhone(store.getStorePhone())
                .storeImage(store.getStoreImage())
                .storeLunchStart(store.getStoreLunchStart())
                .storeLunchEnd(store.getStoreLunchEnd())
                .storeDinnerStart(store.getStoreDinnerStart())
                .storeDinnerEnd(store.getStoreDinnerEnd())
                .build();
        return storeRegistDto;
    }

    // 가게 정보 수정
    @Override
    public void userModify(long storeSequence, StoreDto storeDto) {
        Store store = storeRepository.findByStoreSequence(storeSequence);
        storeDto.setStoreSequence(storeSequence);

        // 근데너는패치잔아.....................
        storeDto.setStoreAddress(store.getStoreAddress());
        storeDto.setStoreCategory(store.getStoreCategory());
        storeDto.setStoreName(store.getStoreName());
        storeDto.setStoreCount(store.getStoreCount());
        storeDto.setStoreDate(store.getStoreDate());
        storeDto.setStoreLng(store.getStoreLng());
        storeDto.setStoreLat(store.getStoreLat());
//        storeDto.set

        storeRepository.save(storeDto.toEntity());
    }

    // nft 발행 페이지

}