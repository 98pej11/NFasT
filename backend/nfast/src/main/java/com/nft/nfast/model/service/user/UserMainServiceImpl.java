package com.nft.nfast.model.service.user;

import com.nft.nfast.entity.business.Nfast;
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

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class UserMainServiceImpl implements UserMainService{

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

    @Override
    public List<StoreFindDto> findAllStore(String storeName) {
        List<Store> stores = storeRepository.findAllByStoreNameContaining(storeName);
        List<StoreFindDto> storeDtoList = new ArrayList<>();

        for(Store store: stores){
            StoreFindDto dto = store.toFindDto();
            storeDtoList.add(dto);
        }
        return storeDtoList;
    }

    @Override
    public List<NfastGetDto> findAvailableNfast(long userSequence) {
        List<Nfast> nfasts = nfastRepository.findAllByUserSequence(userSequence);
        List<NfastGetDto> nfastGetDtoList = new ArrayList<>();

        for(Nfast nfast: nfasts){
            NfastGetDto dto = nfast.toGetDto();
            nfastGetDtoList.add(dto);
        }
        return nfastGetDtoList;
    }

    @Override
    public List<NfastPurchaseDto> findPurchaseNfast(long storeSequence) {
        List<NfastPurchase> nfasts = nfastRepository.findAllByStoreSequence(storeSequence);
        List<NfastPurchaseDto> nfastPurchaseDtoList = new ArrayList<>();

        for(NfastPurchase nfast: nfasts){
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
        for(NfastPurchase nfast: nfasts){
            nfastPurchaseDtoList.add(NfastPurchaseDto.builder()
                    .nfastDate(nfast.getNfastDate().toString())
                    .nfastPrice(nfast.getPrice())
                    .amount(nfast.getAmount())
                    .build());
        }
        return nfastPurchaseDtoList;
    }

    @Override
    public void savePurchaseNfast(long storeSequence, long userSequence, NfastPurchaseDto nfastPurchaseDto) {
        String nfastDate=nfastPurchaseDto.getNfastDate().toString();
        BigDecimal nfastPrice=nfastPurchaseDto.getNfastPrice();
        int amount=nfastPurchaseDto.getAmount();
        List<Nfast> nfasts = nfastRepository.findTopAmountNfastByParam(storeSequence,nfastDate,nfastPrice,amount);
        //1. 사장님이 판매하고 있는 nft 판단(nfast_price와 nfast_default_price 비교)

        for(Nfast nfast: nfasts){
            if(nfast.getNfastSaleState()==0){
                //2-1. 사장님 -> income_list에 추가
                incomeListRepository.save(
                        IncomeListDto.builder()
                                .incomeListPrice(nfastPrice)
                                .incomeListDate(new Date())
                                .incomeListType((byte) 0)
                                .storeSequence(storeSequence)
                                .incomeListTransaction("TRANSACTION")
                                .build()
                                .toEntity()
                );
                //3. price 만큼 지갑에서 차감(metamask)

            }
            else if(nfast.getNfastSaleState()==1){
                //2-2. 사용자 -> trade_list에 추가
                tradeListRepository.save(
                        TradeListDto.builder()
                                .tradeListPrice(nfastPrice)
                                .tradeListDate(new Date())
                                .tradeListType((byte) 0)
                                .userSequence(userSequence)
                                .tradeListTransaction("TRANSACTION")
                                .build()
                                .toEntity()
                );
                //3. price 만큼 지갑에서 차감(metamask)

            }
            //4. nfast의 nfast_sale_state 2로 변경, 거래횟수 +1
            nfast.setNfastSaleState((byte) 2);
            nfast.setNfastTransactionCount(nfast.getNfastTransactionCount()+1);
            nfastRepository.save(nfast);
        }
    }

    @Override
    public List<TradeFindDto> findAllTrade(long userSequence) throws ParseException {
        SimpleDateFormat tranSimpleFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
        List<TradeList> tradeLists = tradeListRepository.findAllByUserSequence(userSequence);
        List<TradeFindDto> tradeDtoList = new ArrayList<>();

        for(TradeList tradeList: tradeLists){
            TradeFindDto dto = tradeList.toFindDto();
            tradeDtoList.add(dto);
        }
        return tradeDtoList;
    }

    @Override
    public void saveTradeNfast(NfastTradeDoneDto nfastTradeDoneDto) {
        long nfastSequence = nfastTradeDoneDto.getNfastSequence();
        BigDecimal nfastHopePrice = nfastTradeDoneDto.getNfastHopePrice();
        Optional<Nfast> nfastWrapper = nfastRepository.findById(nfastSequence);

        if(nfastWrapper.isPresent()){
            Nfast nfast = nfastWrapper.get();
            NfastDto dto = nfast.toDto();
            dto.setNfastHopePrice(nfastHopePrice);
            nfastRepository.save(dto.toEntity());
        }
    }

    @Override
    public void findBookmark(long storeSeqeuence, long userSequence) {
        Optional<Bookmark> bookmarkWrapper = bookmarkRepository.findByUserSequenceAndStoreSequence(storeSeqeuence,userSequence);

        if(bookmarkWrapper.isPresent()){
            Bookmark bookmark = bookmarkWrapper.get();
            BookmarkDto dto = bookmark.toDto();
        }
    }


}
