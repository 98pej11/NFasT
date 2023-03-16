package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.entity.business.Store;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NfastMintDto {
    private Long storeSequence;
    private Date nfastDate;
    private BigDecimal nfastPrice;
    private BigDecimal nfastDefaultPrice;
    private String nfastQr;
    private List<String> nfastEigenvalue;
    private int nfastSupply;
    private String storeWallet;

    public Nfast toEntity(Store store, String eigenvalue){
        Nfast nfast = Nfast.builder()
                .nfastPrice(nfastPrice)
                .nfastDefaultPrice(nfastPrice)
                .nfastDate(nfastDate)
                .nfastQr(nfastQr)
                .nfastEigenvalue(eigenvalue)
                .storeSequence(store)
                .build();
        return nfast;
    }
}
