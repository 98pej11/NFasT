package com.nft.nfast.model.service.store;

import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.repository.NfastRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class StoreMainServiceImpl implements StoreMainService {
    @Autowired
    NfastRepository nfastRepository;
    // 발행한
    // nfast 저장 -> 이름 save로
    @Override
    public void saveNfast(NfastMintDto mintDto) {
        int nFastSupply=mintDto.getNfastSupply();
        System.out.println("나다"+mintDto.getNfastDate());

        // QR 만들어야되면 여기서 추가해야됨....
        String temp="qrqrqrqr";
        mintDto.setNfastQr(temp);

        // DB에 저장
        for (int i=0; i<nFastSupply;i++){
            nfastRepository.save(mintDto.toEntity());
        }

    }
}
