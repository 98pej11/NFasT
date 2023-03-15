package com.nft.nfast.model.service.user;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.entity.business.Store;
import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.repository.NfastRepository;
import com.nft.nfast.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class UserMainServiceImpl implements UserMainService{

    @Autowired
    StoreRepository storeRepository;

    @Autowired
    NfastRepository nfastRepository;

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
        System.out.println("userSeq "+userSequence);
        List<Nfast> nfasts = nfastRepository.findAllByUserSequence(userSequence);
        System.out.println("NFAST "+nfasts);
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
                    .nfastPrice(nfast.getMinPrice())
                    .amount(nfast.getAmount())
                    .build());
        }
        return nfastPurchaseDtoList;
    }

}
