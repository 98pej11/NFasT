package com.nft.nfast.model.dto.business;

import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StoreIncomeDto {
//    private Long incomeListSequence;
    private String incomeListTransaction;
    private BigDecimal incomeListPrice;
    private Date incomeListDate;
    private Byte incomeListType;
//    private Long storeSequence;

    public StoreIncomeDto toEntity(){
        StoreIncomeDto incomelistDto = StoreIncomeDto.builder()
                .incomeListTransaction(incomeListTransaction)
                .incomeListPrice(incomeListPrice)
                .incomeListDate(incomeListDate)
                .incomeListType(incomeListType)
                .build();
        return incomelistDto;
    }

}
