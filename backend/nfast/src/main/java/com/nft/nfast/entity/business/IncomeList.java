package com.nft.nfast.entity.business;

import com.nft.nfast.model.dto.business.IncomeListDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class IncomeList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long incomeListSequence;

    @Column(nullable = false)
    private String incomeListTransaction;

    @Column(nullable = false)
    private BigDecimal incomeListPrice;

    @Column(nullable = false)
    private Date incomeListDate;

    @Column(nullable = false)
    private Byte incomeListType;

    @Column(nullable = false)
    private long storeSequence;

    @Builder
    public IncomeList(long incomeListSequence, String incomeListTransaction, BigDecimal incomeListPrice, Date incomeListDate, Byte incomeListType, long storeSequence) {
        this.incomeListSequence = incomeListSequence;
        this.incomeListTransaction=incomeListTransaction;
        this.incomeListPrice = incomeListPrice;
        this.incomeListDate = incomeListDate;
        this.incomeListType = incomeListType;
        this.storeSequence = storeSequence;
    }

//    public IncomelistDto toDto(){
//        IncomelistDto incomelistDto = IncomelistDto.builder()
//                .incomeListSequence(incomeListSequence)
//                .incomeListTransaction(incomeListTransaction)
//                .incomeListPrice(incomeListPrice)
//                .incomeListDate(incomeListDate)
//                .incomeListType(incomeListType)
//                .storeSequence(storeSequence)
//                .build();
//        return incomelistDto;
//    }
}