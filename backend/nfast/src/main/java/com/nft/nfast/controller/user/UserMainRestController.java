package com.nft.nfast.controller.user;

import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.model.dto.user.TradeFindDto;
import com.nft.nfast.model.dto.user.UserDto;
import com.nft.nfast.model.service.user.UserMainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserMainRestController {
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    UserMainService userMainService;

    //검색 시 가게 리스트 출력
    @GetMapping("/main/search-list/{store_name}")
    public ResponseEntity<Map<String, Object>> storeList(@PathVariable String store_name){
        List<StoreFindDto> storeDtoList = userMainService.findAllStore(store_name);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("stores",storeDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //가게명 검색
    @GetMapping("/main/search-list/store/{storeSequence}")
    public ResponseEntity<Map<String, Object>> storeSearch(@PathVariable("storeSequence") long storeSequence){
        StoreDetailDto storeDetailDto = userMainService.findStoreDetail(storeSequence);
        System.out.println("StoreDetail "+storeDetailDto);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("detail",storeDetailDto);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //사용 가능 NFasT 리스트
    @GetMapping("/available-NFasT/{user_sequence}")
    public ResponseEntity<Map<String, Object>> nftList(@PathVariable long user_sequence){
        List<NfastGetDto> nfastGetDtoList = userMainService.findAvailableNfast(user_sequence);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",nfastGetDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //구매 가능한 NFast 리스트 출력
    @GetMapping("/store/{store_sequence}/purchase")
    public ResponseEntity<Map<String,Object>> availableNftList(@PathVariable long store_sequence){
        List<NfastPurchaseDto> nfastPurchaseDtoList = userMainService.findPurchaseNfast(store_sequence);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",nfastPurchaseDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //구매할 날짜 nft 상세 정보 출력
    @GetMapping("/store/{store_sequence}/purchase/detail")
    public ResponseEntity<Map<String,Object>> availableNftDateList(@PathVariable long store_sequence, @RequestBody NfastDto nfast){
        SimpleDateFormat tranSimpleFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
        List<NfastPurchaseDto> nfastPurchaseDtoList = userMainService.findAllByNfastDate(tranSimpleFormat.format(nfast.getNfastDate()));
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",nfastPurchaseDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //구매할 금액 nft 개수 입력 후 구매 확정
    @PostMapping("/store/{storeSequence}/{userSequence}/purchase/detail/confirm")
    public ResponseEntity<Map<String,Object>> confirmPurchaseNft(@PathVariable("storeSequence") long storeSequence,@PathVariable("userSequence") long userSequence, @RequestBody NfastPurchaseDto nfast){
        userMainService.savePurchaseNfast(storeSequence,userSequence,nfast);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //거래 내역 리스트
    @GetMapping("/transaction-list/{userSequence}")
    public ResponseEntity<Map<String,Object>> tradeList(@PathVariable("userSequence") long userSequence) throws ParseException {
        List<TradeFindDto> tradeFindDtoList = userMainService.findAllTrade(userSequence);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",tradeFindDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //판매 등록
    @PostMapping("/store/{storeSequence}/sale")
    public ResponseEntity<Map<String,Object>> tradeDone(@PathVariable("storeSequence") long storeSequence, @RequestBody NfastTradeDoneDto nfastTradeDoneDto){
        userMainService.saveTradeNfast(nfastTradeDoneDto);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //북마크 등록
    @PostMapping("/store/{storeSequence}/bookmark/{userSequence}")
    public ResponseEntity<Map<String,Object>> bookmarkCheck(@PathVariable("storeSequence") long storeSequence, @PathVariable("userSequence") long userSequence){
        userMainService.saveBookmark(storeSequence,userSequence);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //북마크 해제
    @DeleteMapping("/store/{storeSequence}/bookmark/{userSequence}")
    public ResponseEntity<Map<String,Object>> bookmarkUnCheck(@PathVariable("storeSequence") long storeSequence, @PathVariable("userSequence") long userSequence){
        userMainService.deleteBookmark(storeSequence,userSequence);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //판매 차익 계산
    @GetMapping("/store/{nfastSequence}/sale")
    public ResponseEntity<Map<String,Object>> tradeBenefit(@PathVariable("nfastSequence") long nfastSequence){
        BigDecimal nfastPrice = userMainService.findNfastPrice(nfastSequence);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("nfastPrice",nfastPrice);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //리뷰 작성
    @PostMapping("/review-count/{storeSequence}")
    public ResponseEntity<Map<String,Object>> reviewList(@PathVariable("storeSequence") long storeSequence, @RequestBody ReviewGetDto reviewGetDto){
        userMainService.saveReview(reviewGetDto);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    //NFT 사용 완료 확인
    @GetMapping("/floating-button/confirmation/{userSequence}/{nfastSequence}")
    public ResponseEntity<Map<String,Object>> nftState(@PathVariable("userSequence") long userSequence, @PathVariable("nfastSequence") long nfastSequence){
        Byte nfastUseState = userMainService.findNfastUseState(userSequence,nfastSequence);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("nfastUseState",nfastUseState);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
}
