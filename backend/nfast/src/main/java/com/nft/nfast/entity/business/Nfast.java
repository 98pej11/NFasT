package com.nft.nfast.entity.business;

import com.nft.nfast.model.dto.business.NfastDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class Nfast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long nfastSequence;

    @Column(nullable = false)
    private BigDecimal nfastPrice;

    @Column(nullable = false)
    private String nfastEigenvalue;

    @Column(nullable = false)
    private Date nfastDate;

    @Column
    @ColumnDefault("0")
    private Byte nfastUseState;

    @Column
    @ColumnDefault("0")
    private Byte nfastSaleState;

    @Column
    @ColumnDefault("0")
    private long nfastTransactionCount;

    @Column(nullable = false)
    private BigDecimal nfastDefaultPrice;

    @Column(nullable = false)
    private String nfastQr;

    @Column
    private long ownerSequence;

    @Column
    private long userSequence;

    @Builder
    public Nfast(long nfastSequence, BigDecimal nfastPrice, String nfastEigenvalue, Date nfastDate, Byte nfastUseState, Byte nfastSaleState, long nfastTransactionCount, BigDecimal nfastDefaultPrice, String nfastQr, long ownerSequence, long userSequence) {
        this.nfastSequence = nfastSequence;
        this.nfastPrice = nfastPrice;
        this.nfastEigenvalue = nfastEigenvalue;
        this.nfastDate = nfastDate;
        this.nfastUseState = nfastUseState;
        this.nfastSaleState = nfastSaleState;
        this.nfastTransactionCount = nfastTransactionCount;
        this.nfastDefaultPrice = nfastDefaultPrice;
        this.nfastQr = nfastQr;
        this.ownerSequence = ownerSequence;
        this.userSequence = userSequence;
    }

    public NfastDto toDto(){
        NfastDto nfastDto = NfastDto.builder()
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
        return nfastDto;
    }
}
