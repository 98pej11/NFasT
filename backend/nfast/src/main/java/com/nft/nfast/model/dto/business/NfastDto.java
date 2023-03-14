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
public class NfastDto {
    private long nfastSequence;
    private BigDecimal nfastPrice;
    private String nfastEigenvalue;
    private Date nfastDate;
    private Byte nfastUseState;
    private Byte nfastSaleState;
    private long nfastTransactionCount;
    private BigDecimal nfastDefaultPrice;
    private String nfastQr;
    private long ownerSequence;
    private long userSequence;

    public Nfast toEntity(){
        Nfast nfast = Nfast.builder()
                .nfastSequence(nfastSequence)
                .nfastPrice(nfastPrice)
                .nfastEigenvalue(nfastEigenvalue)
                .nfastDate(nfastDate)
                .nfastUseState(nfastUseState)
                .nfastSaleState(nfastSaleState)
                .nfastTransactionCount(nfastTransactionCount)
                .nfastDefaultPrice(nfastDefaultPrice)
                .nfastQr(nfastQr)
                .ownerSequence(ownerSequence)
                .userSequence(userSequence)
                .build();
        return nfast;
    }
}
