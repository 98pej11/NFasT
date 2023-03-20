package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.entity.business.Store;
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
    private BigDecimal nfastHopePrice;
    private String nfastEigenvalue;
    private Date nfastDate;
    private Byte nfastUseState;
    private Byte nfastSaleState;
    private long nfastTransactionCount;
    private BigDecimal nfastDefaultPrice;
    private String nfastQr;
    private Byte nfastTime;
    private Store storeSequence;
    private long userSequence;

    public Nfast toEntity(){
        Nfast nfast = Nfast.builder()
                .nfastSequence(nfastSequence)
                .nfastPrice(nfastPrice)
                .nfastHopePrice(nfastHopePrice)
                .nfastEigenvalue(nfastEigenvalue)
                .nfastDate(nfastDate)
                .nfastUseState(nfastUseState)
                .nfastSaleState(nfastSaleState)
                .nfastTransactionCount(nfastTransactionCount)
                .nfastDefaultPrice(nfastDefaultPrice)
                .nfastQr(nfastQr)
                .nfastTime(nfastTime)
                .storeSequence(storeSequence)
                .userSequence(userSequence)
                .build();
        return nfast;
    }
}
