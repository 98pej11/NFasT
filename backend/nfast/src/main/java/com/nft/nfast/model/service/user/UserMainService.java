package com.nft.nfast.model.service.user;

import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.model.dto.user.TokenDto;
import com.nft.nfast.model.dto.user.TradeFindDto;
import com.nft.nfast.model.dto.user.TradeListDto;
import com.nft.nfast.model.dto.user.UserDto;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface UserMainService {
    List<StoreFindDto> findAllStore();
    List<NfastGetDto> findAvailableNfast(long userSequence);
    List<NfastPurchaseDto> findPurchaseNfast(long storeSequence);
    List<NfastPurchaseDto> findAllByNfastDate(long storeSequence, NfastDetailDto nfastDto);
    void savePurchaseNfast(long storeSequence, long userSequence, NfastPurchaseDto nfast);
    List<TradeFindDto> findAllTrade(long userSequence) throws ParseException;
    void saveTradeNfast(NfastTradeDoneDto nfastTradeDoneDto);
    void saveBookmark(long storeSeqeuence, long useSequence);
    void deleteBookmark(long storeSeqeuence, long useSequence);
    StoreDetailDto findStoreDetail(long storeSequence);
    BigDecimal findNfastPrice(long nfastSequence);
    void saveReview(ReviewGetDto reviewGetDto);
    Byte findNfastUseState(long userSequence, long nfastSequence);
    List<StoreDto> findAllBookmarkStore(long userSequence);
    List<NfastUsedDto> findUnAvailableNfast(long userSequence);
    List<StoreDto> findAllTransactionRecommendation();
    List<StoreDto> findAllDistanceRecommendation(String lat, String lng);
    TokenDto userLogin(String wallet);
    void logout(String wallet);

    NfastGetDto findNowAvailableNfast(long userSequence);

    UserDto userDetail(long userSequence);
    void userModify(UserDto user);

}
