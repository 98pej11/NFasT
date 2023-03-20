package com.nft.nfast.model.service.store;

import com.nft.nfast.entity.business.IncomeList;
import com.nft.nfast.entity.business.Store;
import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.IncomeFindDto;
import com.nft.nfast.model.dto.business.NfastMinted;
import com.nft.nfast.model.dto.business.NfastMintedDto;
import com.nft.nfast.repository.IncomeListRepository;
import com.nft.nfast.repository.NfastRepository;
import com.nft.nfast.repository.StoreRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class StoreMainServiceImpl implements StoreMainService {
    @Autowired
    NfastRepository nfastRepository;
    @Autowired
    StoreRepository storeRepository;

    @Autowired
    IncomeListRepository incomeListRepository;

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

    // 전체 수입 출력
    @Override
    public List<IncomeFindDto> findAllIncomes(Long storeSequence) {
        // 해당 가게의 수입 내역 저장
        List<IncomeList> incomes = incomeListRepository.findAllByStoreSequence(storeSequence);
        List<IncomeFindDto> incomeListGetDto = new ArrayList<>();
        for (IncomeList income : incomes) {
            incomeListGetDto.add(IncomeFindDto.builder()
                    .incomeListTransaction(income.getIncomeListTransaction())
                    .incomeListPrice(income.getIncomeListPrice())
                    .incomeListDate(income.getIncomeListDate())
                    .incomeListType(income.getIncomeListType())
                    .build());
        }
        return incomeListGetDto;
    }

    @Override
    public BigDecimal findMintIncome(Long storeSequence) {
        List<IncomeList> mintIncomeList=incomeListRepository.findMintIncome(storeSequence);
        BigDecimal mintIncome= new BigDecimal("0");
        for (int i=0; i<mintIncomeList.size();i++){
            mintIncome=mintIncome.add(mintIncomeList.get(i).getIncomeListPrice());
        }
        return mintIncome;
    }

    @Override
    public BigDecimal findResellIncome(Long storeSequence) {
        List<IncomeList> resellIncomeList=incomeListRepository.findResellIncome(storeSequence);
        BigDecimal resellIncome= new BigDecimal("0");
        for (int i=0; i<resellIncomeList.size();i++){
            resellIncome=resellIncome.add(resellIncomeList.get(i).getIncomeListPrice());
        }
        return resellIncome;
    }

    // 발행한 NFT 보기 (날짜별 가격, 판매 현황)
    @Override
    public List<NfastMintedDto> findMintedNfast(Long storeSequence) {
        List<NfastMinted> mintedNfast=nfastRepository.findUsedByNfastDate(storeSequence);
        List<NfastMintedDto> mintedNfastList=new ArrayList<>();
        for (NfastMinted m:mintedNfast){
            Date mintedDate = m.getNfastDate();
            BigDecimal defaultPrice = nfastRepository.findDefaultPriceByNfastDate(mintedDate);
            mintedNfastList.add(NfastMintedDto.builder()
                    .nfastDate(m.getNfastDate())
                    .nfastDefaultPrice(defaultPrice)
                    .nfastSaleCount(m.getNfastSaleCount())
                    .nfastTotalCount(m.getNfastTotalCount())
                    .build());
            System.out.println(m);
        }
        return mintedNfastList;
    }


}
