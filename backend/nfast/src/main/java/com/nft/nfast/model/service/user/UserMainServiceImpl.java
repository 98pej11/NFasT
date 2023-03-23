package com.nft.nfast.model.service.user;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.entity.business.Review;
import com.nft.nfast.entity.business.Store;
import com.nft.nfast.entity.user.Bookmark;
import com.nft.nfast.entity.user.TradeList;
import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.model.dto.user.BookmarkDto;
import com.nft.nfast.model.dto.user.TradeFindDto;
import com.nft.nfast.model.dto.user.TradeListDto;
import com.nft.nfast.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class UserMainServiceImpl implements UserMainService {

    @Autowired
    StoreRepository storeRepository;

    @Autowired
    NfastRepository nfastRepository;

    @Autowired
    IncomeListRepository incomeListRepository;

    @Autowired
    TradeListRepository tradeListRepository;

    @Autowired
    BookmarkRepository bookmarkRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public List<StoreFindDto> findAllStore(String storeName) {
        List<Store> stores = storeRepository.findAllByStoreNameContaining(storeName);
        List<StoreFindDto> storeDtoList = new ArrayList<>();

        for (Store store : stores) {
            StoreFindDto dto = store.toFindDto();
            storeDtoList.add(dto);
        }
        return storeDtoList;
    }

    @Override
    public List<NfastGetDto> findAvailableNfast(long userSequence) {
        List<Nfast> nfasts = nfastRepository.findAllByUserSequence(userSequence);
        List<NfastGetDto> nfastGetDtoList = new ArrayList<>();

        for (Nfast nfast : nfasts) {
            NfastGetDto dto = nfast.toGetDto();
            nfastGetDtoList.add(dto);
        }
        return nfastGetDtoList;
    }

    //구매 가능한 NFast 리스트 출력
    @Override
    public List<NfastPurchaseDto> findPurchaseNfast(long storeSequence) {
        List<NfastPurchase> nfasts = nfastRepository.findAllByStoreSequenceOrderByNfastDateDesc(storeSequence);
        List<NfastPurchaseDto> nfastPurchaseDtoList = new ArrayList<>();

        for (NfastPurchase nfast : nfasts) {
            nfastPurchaseDtoList.add(NfastPurchaseDto.builder()
                    .nfastDate(nfast.getNfastDate().toString())
                    .nfastPrice(nfast.getPrice())
                    .amount(nfast.getAmount())
                    .build());
        }
        return nfastPurchaseDtoList;
    }

    @Override
    public List<NfastPurchaseDto> findAllByNfastDate(String nfastDate) {
        List<NfastPurchase> nfasts = nfastRepository.findAllByNfastDate(nfastDate);
        List<NfastPurchaseDto> nfastPurchaseDtoList = new ArrayList<>();
        for (NfastPurchase nfast : nfasts) {
            nfastPurchaseDtoList.add(NfastPurchaseDto.builder()
                    .nfastDate(nfast.getNfastDate().toString())
                    .nfastPrice(nfast.getPrice())
                    .amount(nfast.getAmount())
                    .build());
        }
        return nfastPurchaseDtoList;
    }

    //구매할 금액 nft 개수 입력 후 구매 확정
    @Override
    public void savePurchaseNfast(long storeSequence, long userSequence, NfastPurchaseDto nfastPurchaseDto) {
        String nfastDate = nfastPurchaseDto.getNfastDate().toString();
        BigDecimal nfastPrice = nfastPurchaseDto.getNfastPrice();
        int amount = nfastPurchaseDto.getAmount();
        List<Nfast> nfasts = nfastRepository.findTopAmountNfastByParam(storeSequence, nfastDate, nfastPrice, amount);
        //1. 사장님이 판매하고 있는 nft 판단(nfast_price와 nfast_default_price 비교)

        for (Nfast nfast : nfasts) {
            if (nfast.getNfastSaleState() == 0) {
                //2-1. 사장님 -> income_list에 추가
                incomeListRepository.save(
                        IncomeListDto.builder()
                                .incomeListPrice(nfastPrice)
                                .incomeListDate(new Date())
                                .incomeListType((byte) 0)   //직접 구매
                                .storeSequence(storeSequence)
                                .incomeListTransaction("TRANSACTION")
                                .build()
                                .toEntity()
                );
                //3. price 만큼 지갑에서 차감(metamask)

            } else if (nfast.getNfastSaleState() == 1) {
                //2-2. 사용자 -> trade_list에 추가
                tradeListRepository.save(
                        TradeListDto.builder()
                                .tradeListPrice(nfastPrice)
                                .tradeListDate(new Date())
                                .tradeListType((byte) 0)    //구매
                                .userSequence(userSequence)
                                .tradeListTransaction("TRANSACTION")
                                .build()
                                .toEntity()
                );
                //3. price 만큼 지갑에서 차감(metamask)

            }
            //4. nfast의 nfast_sale_state 2로 변경, 거래횟수 +1, 판매희망가->금액
            nfast.setNfastSaleState((byte) 1);
            nfast.setNfastTransactionCount(nfast.getNfastTransactionCount() + 1);
            nfast.setNfastPrice(nfast.getNfastHopePrice());
            System.out.println("checkccccccccccc");
            nfastRepository.save(nfast);
        }
    }

    //거래 내역 리스트
    @Override
    public List<TradeFindDto> findAllTrade(long userSequence) throws ParseException {
        SimpleDateFormat tranSimpleFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
        List<TradeList> tradeLists = tradeListRepository.findAllByUserSequence(userSequence);
        List<TradeFindDto> tradeDtoList = new ArrayList<>();

        for (TradeList tradeList : tradeLists) {
            TradeFindDto dto = tradeList.toFindDto();
            tradeDtoList.add(dto);
        }
        return tradeDtoList;
    }

    //판매 등록
    @Override
    @Transactional
    public void saveTradeNfast(NfastTradeDoneDto nfastTradeDoneDto) {
        long nfastSequence = nfastTradeDoneDto.getNfastSequence();
        BigDecimal nfastHopePrice = nfastTradeDoneDto.getNfastHopePrice();
        Optional<Nfast> nfastWrapper = nfastRepository.findById(nfastSequence);

        if (nfastWrapper.isPresent()) {
            Nfast nfast = nfastWrapper.get();
            NfastDto dto = nfast.toDto();
            dto.setNfastHopePrice(nfastHopePrice);
            dto.setNfastSaleState((byte) 2);
            nfastRepository.save(dto.toEntity());

        }
    }

    //북마크 등록
    @Override
    public void saveBookmark(long storeSeqeuence, long userSequence) {
        Optional<Bookmark> bookmarkWrapper = bookmarkRepository.findByStoreSequenceAndUserSequence(storeSeqeuence, userSequence);

        if (!bookmarkWrapper.isPresent()) {
            BookmarkDto dto = BookmarkDto.builder().storeSequence(storeSeqeuence).userSequence(userSequence).build();
            bookmarkRepository.save(dto.toEntity());
        }
    }

    //북마크 해제
    @Override
    public void deleteBookmark(long storeSeqeuence, long userSequence) {
        Optional<Bookmark> bookmarkWrapper = bookmarkRepository.findByStoreSequenceAndUserSequence(storeSeqeuence, userSequence);

        if (bookmarkWrapper.isPresent()) {
            Bookmark bookmark = bookmarkWrapper.get();
            BookmarkDto dto = bookmark.toDto();
            bookmarkRepository.deleteById(dto.getBookmarkSequence());
        }
    }

    //가게명 검색(상세 정보 출력)
    @Override
    public StoreDetailDto findStoreDetail(long storeSequence) {
        String[][] contents = {{"바로 들어갔어요", "10분 이내로 들어갔어요", "20분 이내로 들어갔어요"}, {"주차하기 편해요", "좌석이 편안해요", "교통이 편리해요"}, {"친절해요", "응대가 빨라요", "매장이 청결해요"}, {"뷰가 좋아요", "인테리어가 잘 나와요", "사진이 잘 나와요"}};
        Optional<Store> storeWrapper = storeRepository.findById(storeSequence);
        List<ReviewFind> reviewList = reviewRepository.findByStoreSequence(storeSequence);
        ReviewFindDto reviewFindDto = new ReviewFindDto();

        List<Object> nfastMaxList = nfastRepository.findMaxNfastPriceGroupByNfastDate();
        List<Object> nfastMinList = nfastRepository.findMinNfastPriceGroupByNfastDate();

        StoreDetailDto storeDetailDto = new StoreDetailDto();
        if (storeWrapper.isPresent()) {
            Store store = storeWrapper.get();
            for (ReviewFind review : reviewList) {
                String[] str = new String[2];
                str[0] = contents[review.getReviewTopic()][review.getReviewSubTopic()];
                str[1] = review.getCnt().toString();
                if (review.getReviewTopic() == 0) {
                    reviewFindDto.setReviewTime(str);
                }
                if (review.getReviewTopic() == 1) {
                    reviewFindDto.setReviewConvenience(str);
                }
                if (review.getReviewTopic() == 2) {
                    reviewFindDto.setReviewService(str);
                }
                if (review.getReviewTopic() == 3) {
                    reviewFindDto.setReviewMood(str);
                }
            }
            storeDetailDto = StoreDetailDto.builder().store(store.toDto()).review(reviewFindDto).storeNfastPriceMax(nfastMaxList).storeNfastPriceMin(nfastMinList).build();
        }
        return storeDetailDto;
    }

    //판매 차익 계산
    @Override
    public BigDecimal findNfastPrice(long nfastSequence) {
        Optional<Nfast> nfastWrapper = nfastRepository.findById(nfastSequence);
        BigDecimal nfastPrice = null;
        if (nfastWrapper.isPresent()) {
            Nfast nfast = nfastWrapper.get();
            nfastPrice = nfast.getNfastPrice();
        }
        return nfastPrice;
    }

    //리뷰 작성
    @Override
    public void saveReview(ReviewGetDto reviewGetDto) {
        ReviewFindDto reviewFindDto = reviewGetDto.getReviews();
        reviewRepository.save(ReviewDto.builder()
                .reviewTopic(0)
                .reviewSubTopic(Integer.parseInt(reviewFindDto.getReviewTime()[0]))
                .storeSequence(reviewGetDto.getStoreSequence())
                .userSequence(reviewGetDto.getUserSequence())
                .build()
                .toEntity()
        );
        reviewRepository.save(ReviewDto.builder()
                .reviewTopic(1)
                .reviewSubTopic(Integer.parseInt(reviewFindDto.getReviewConvenience()[0]))
                .storeSequence(reviewGetDto.getStoreSequence())
                .userSequence(reviewGetDto.getUserSequence())
                .build()
                .toEntity()
        );
        reviewRepository.save(ReviewDto.builder()
                .reviewTopic(2)
                .reviewSubTopic(Integer.parseInt(reviewFindDto.getReviewService()[0]))
                .storeSequence(reviewGetDto.getStoreSequence())
                .userSequence(reviewGetDto.getUserSequence())
                .build()
                .toEntity()
        );
        reviewRepository.save(ReviewDto.builder()
                .reviewTopic(3)
                .reviewSubTopic(Integer.parseInt(reviewFindDto.getReviewMood()[0]))
                .storeSequence(reviewGetDto.getStoreSequence())
                .userSequence(reviewGetDto.getUserSequence())
                .build()
                .toEntity()
        );
    }

    //NFT 사용 완료 확인
    @Override
    public Byte findNfastUseState(long userSequence, long nfastSequence) {
        Optional<Nfast> nfastWrapper = nfastRepository.findByUserSequenceAndNfastSequence(userSequence,nfastSequence);
        Byte nfastUseState = null;
        if(nfastWrapper.isPresent()){
            Nfast nfast = nfastWrapper.get();
            nfastUseState=nfast.getNfastUseState();
        }
        return nfastUseState;
    }

    //북마크 리스트
    @Override
    public List<StoreDto> findAllBookmarkStore(long userSequence) {
        List<Bookmark> bookmarkList = bookmarkRepository.findAllByUserSequence(userSequence);
        List<Store> storeList = new ArrayList<>();
        for(Bookmark bookmark:bookmarkList){
            Optional<Store> storeWrapper = storeRepository.findById(bookmark.getStoreSequence());
            if(storeWrapper.isPresent()){
                storeList.add(storeWrapper.get());
            }
        }
        List<StoreDto> storeDtoList = new ArrayList<>();
        for(Store store:storeList){
            StoreDto storeDto = store.toDto();
            storeDtoList.add(storeDto);
        }
        return storeDtoList;
    }

    //사용한 NFasT 리스트
    @Override
    public List<NfastUsedDto> findUnAvailableNfast(long userSequence) {
        String[][] contents = {{"바로 들어갔어요", "10분 이내로 들어갔어요", "20분 이내로 들어갔어요"}, {"주차하기 편해요", "좌석이 편안해요", "교통이 편리해요"}, {"친절해요", "응대가 빨라요", "매장이 청결해요"}, {"뷰가 좋아요", "인테리어가 잘 나와요", "사진이 잘 나와요"}};
        List<NfastUsedDto> nfastUsedDtoList = new ArrayList<>();
        List<Review> reviewList = new ArrayList<>();
        List<Nfast> nfastList = nfastRepository.findAllNfastByUserSequenceAndNfastUseState(userSequence);
        NfastUsedDto nfastUsedDto = new NfastUsedDto();

        for(Nfast nfast: nfastList){
            NfastGetDto nfastGetDto = new NfastGetDto();
            ReviewFindDto reviewFindDto = new ReviewFindDto();

            long storeSequence=nfast.getStoreSequence().getStoreSequence();
            nfastGetDto = NfastGetDto.builder()
                    .nfastPrice(nfast.getNfastPrice())
                    .nfastEigenvalue(nfast.getNfastEigenvalue())
                    .nfastDate(nfast.getNfastDate())
                    .nfastQr(nfast.getNfastQr())
                    .storeName(nfast.getStoreSequence().getStoreName())
                    .build();

            reviewList = reviewRepository.findAllByUserSequenceAndStoreSequence(userSequence, storeSequence);
            for (Review review : reviewList) {
                String[] str = new String[1];
                str[0] = contents[review.getReviewTopic()][review.getReviewSubTopic()];
                if (review.getReviewTopic() == 0) {
                    reviewFindDto.setReviewTime(str);
                }
                if (review.getReviewTopic() == 1) {
                    reviewFindDto.setReviewConvenience(str);
                }
                if (review.getReviewTopic() == 2) {
                    reviewFindDto.setReviewService(str);
                }
                if (review.getReviewTopic() == 3) {
                    reviewFindDto.setReviewMood(str);
                }
            }
            nfastUsedDto = NfastUsedDto.builder().nfast(nfastGetDto).review(reviewFindDto).build();
            nfastUsedDtoList.add(nfastUsedDto);
        }
        return nfastUsedDtoList;
    }

    //거래순 추천 리스트

}
