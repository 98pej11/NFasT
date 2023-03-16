package com.nft.nfast.model.service.store;

import com.nft.nfast.entity.business.Store;
import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.StoreIncomeDto;

import java.util.List;

public interface StoreMainService {

    void saveNfast(NfastMintDto mintDto);
    List<StoreIncomeDto> findAllIncomes(Long storeSequence);
}
