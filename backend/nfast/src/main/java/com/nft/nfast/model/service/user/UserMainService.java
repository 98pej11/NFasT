package com.nft.nfast.model.service.user;

import com.nft.nfast.model.dto.business.StoreDto;
import com.nft.nfast.model.dto.business.StoreFindDto;

import java.util.List;

public interface UserMainService {
    List<StoreFindDto> findAllStore(String storeName);
    StoreDto findStore(String storeName);
}
