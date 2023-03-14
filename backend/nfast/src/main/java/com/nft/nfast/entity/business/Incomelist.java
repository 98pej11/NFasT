package com.nft.nfast.entity.business;

import com.nft.nfast.model.dto.business.IncomelistDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import software.amazon.ion.Decimal;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class Incomelist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long incomeListSequence;

    @Column(nullable = false)
    private BigDecimal incomeListPrice;

    @Column(nullable = false)
    private Date incomeListDate;

    @Column(nullable = false)
    private Byte incomeListType;

    @Column(nullable = false)
    private long storeSequence;

    @Builder
    public Incomelist(long incomeListSequence, BigDecimal incomeListPrice, Date incomeListDate, Byte incomeListType, long storeSequence) {
        this.incomeListSequence = incomeListSequence;
        this.incomeListPrice = incomeListPrice;
        this.incomeListDate = incomeListDate;
        this.incomeListType = incomeListType;
        this.storeSequence = storeSequence;
    }

    public IncomelistDto toDto(){
        IncomelistDto incomelistDto = IncomelistDto.builder()
                .incomeListSequence(incomeListSequence)
                .incomeListPrice(incomeListPrice)
                .incomeListDate(incomeListDate)
                .incomeListType(incomeListType)
                .storeSequence(storeSequence)
                .build();
        return incomelistDto;
    }
}
