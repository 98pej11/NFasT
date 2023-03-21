package com.nft.nfast.model.service.user;

import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.model.dto.user.TradeFindDto;
import com.nft.nfast.model.dto.user.TradeListDto;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface UserMainService {
    List<StoreFindDto> findAllStore(String storeName);
    List<NfastGetDto> findAvailableNfast(long userSequence);
    List<NfastPurchaseDto> findPurchaseNfast(long storeSequence);
    List<NfastPurchaseDto> findAllByNfastDate(String nfastDate);
    void savePurchaseNfast(long storeSequence, long userSequence, NfastPurchaseDto nfast);
    List<TradeFindDto> findAllTrade(long userSequence) throws ParseException;
    void saveTradeNfast(NfastTradeDoneDto nfastTradeDoneDto);
    void saveBookmark(long storeSeqeuence, long useSequence);
    void deleteBookmark(long storeSeqeuence, long useSequence);
    StoreDetailDto findStoreDetail(long storeSequence);
}
