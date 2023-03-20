package com.nft.nfast.model.service.store;

import com.nft.nfast.entity.business.IncomeList;
import com.nft.nfast.entity.business.Store;
import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.IncomeFindDto;
import com.nft.nfast.repository.IncomeListRepository;
import com.nft.nfast.repository.NfastRepository;
import com.nft.nfast.repository.StoreRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class StoreMainServiceImpl implements StoreMainService {
    @Autowired
    NfastRepository nfastRepository;
    @Autowired
    StoreRepository storeRepository;

    @Autowired
    IncomeListRepository incomelistRepository;

    // 발행한 nft 저장
    @Override
    public void saveNfast(NfastMintDto mintDto) {
        // 발행 개수, Store객체, 고유값 리스트 불러오기
        int nFastSupply=mintDto.getNfastSupply();
        Store store=storeRepository.findByStoreSequence(mintDto.getStoreSequence());
        List<String> eigenvalueList=mintDto.getNfastEigenvalue();

        // DB에 저장
        for (int i=0; i<nFastSupply;i++){
            // 고유값 리스트
            String eigenvalue=eigenvalueList.get(i);
            System.out.println("고유값!!!!!!!!!!!"+eigenvalue);

            // QR 만들어야되면 여기서 추가해야됨....
            String temp="qrqrqrqr";
            mintDto.setNfastQr(temp);
            nfastRepository.save(mintDto.toEntity(store, eigenvalue));
        }
    }

    @Override
    public List<IncomeFindDto> findAllIncomes(Long storeSequence) {
        // 해당 가게의 수입 내역 저장
        List<IncomeList> incomes = incomelistRepository.findAllByStoreSequence(storeSequence);
        List<IncomeFindDto> incomeListGetDto = new ArrayList<>();
        for (IncomeList income : incomes) {
            incomeListGetDto.add(IncomeFindDto.builder()
                    .incomeListPrice(income.getIncomeListPrice())
                    .incomeListDate(income.getIncomeListDate())
                    .incomeListType(income.getIncomeListType())
                    .incomeListTransaction(income.getIncomeListTransaction())
                    .build());
        }
        return incomeListGetDto;
    }
}
