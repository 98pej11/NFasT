package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Nfast;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NfastMintDto {
    private long storeSequence;
    private Date nfastDate;
    private BigDecimal nfastPrice;
    private BigDecimal nfastDefaultPrice;

    private String nfastQr;
    private String nfastEigenvalue;
    private int nfastSupply;
    private String storeWallet;

    public Nfast toEntity(){
        Nfast nfast = Nfast.builder()
                .nfastPrice(nfastPrice)
                .nfastDefaultPrice(nfastPrice)
                .nfastDate(nfastDate)
                .nfastQr(nfastQr)
                .nfastEigenvalue(nfastEigenvalue)
                .storeSequence(storeSequence)
                .build();
        return nfast;
    }
}
