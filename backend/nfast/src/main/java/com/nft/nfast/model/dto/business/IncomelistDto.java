package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Incomelist;
import lombok.*;

import javax.persistence.Column;
import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IncomelistDto {
    private long incomeListSequence;
    private BigDecimal incomeListPrice;
    private Date incomeListDate;
    private Byte incomeListType;
    private long storeSequence;

    public Incomelist toEntity(){
        Incomelist incomelist = Incomelist.builder()
                .incomeListSequence(incomeListSequence)
                .incomeListPrice(incomeListPrice)
                .incomeListDate(incomeListDate)
                .incomeListType(incomeListType)
                .storeSequence(storeSequence)
                .build();
        return incomelist;
    }
}
