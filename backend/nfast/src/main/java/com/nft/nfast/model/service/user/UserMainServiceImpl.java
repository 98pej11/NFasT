package com.nft.nfast.model.service.user;

import com.nft.nfast.entity.business.Store;
import com.nft.nfast.model.dto.business.StoreDto;
import com.nft.nfast.model.dto.business.StoreFindDto;
import com.nft.nfast.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserMainServiceImpl implements UserMainService{

    @Autowired
    StoreRepository storeRepository;

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
    public StoreDto findStore(String storeName) {
        System.out.println(storeName);
        Optional<Store> storeWrapper = storeRepository.findByStoreName(storeName);
        if(storeWrapper.isPresent()){
            Store store = storeWrapper.get();
            StoreDto dto = store.toDto();
            return dto;
        }
        return null;
    }
}
