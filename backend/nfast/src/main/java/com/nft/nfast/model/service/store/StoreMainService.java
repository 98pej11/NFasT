package com.nft.nfast.model.service.store;

import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.IncomeFindDto;

import java.util.List;

public interface StoreMainService {

    void saveNfast(NfastMintDto mintDto);
    List<IncomeFindDto> findAllIncomes(Long storeSequence);
}
