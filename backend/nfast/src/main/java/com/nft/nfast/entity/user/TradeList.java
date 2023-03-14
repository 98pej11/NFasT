package com.nft.nfast.entity.user;

import com.nft.nfast.model.dto.user.TradeListDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class TradeList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tradeListSequence;

    @Column(nullable = false)
    private String tradeListTransaction;

    @Column(nullable = false)
    private BigDecimal tradeListPrice;

    @Column(nullable = false)
    private Date tradeListDate;

    @Column(nullable = false)
    private Byte tradeListType;

    @Column
    private Byte userSequence;

    @Builder
    public TradeList(long tradeListSequence, String tradeListTransaction, BigDecimal tradeListPrice, Date tradeListDate, Byte tradeListType, Byte userSequence) {
        this.tradeListSequence = tradeListSequence;
        this.tradeListTransaction = tradeListTransaction;
        this.tradeListPrice = tradeListPrice;
        this.tradeListDate = tradeListDate;
        this.tradeListType = tradeListType;
        this.userSequence = userSequence;
    }

    public TradeListDto toDto(){
        TradeListDto tradeListDto = TradeListDto.builder()
                .tradeListSequence(tradeListSequence)
                .tradeListTransaction(tradeListTransaction)
                .tradeListPrice(tradeListPrice)
                .tradeListDate(tradeListDate)
                .tradeListType(tradeListType)
                .userSequence(userSequence)
                .build();
        return tradeListDto;
    }
}
