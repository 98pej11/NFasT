package com.nft.nfast.entity.business;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nft.nfast.model.dto.business.NfastDto;
import com.nft.nfast.model.dto.business.NfastGetDto;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "nfast")
@DynamicUpdate
@Builder
public class Nfast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long nfastSequence;

    @Column(nullable = false)
    private BigDecimal nfastPrice;

    @Column
    private BigDecimal nfastHopePrice;

    @Column(nullable = false)
    private String nfastEigenvalue;

    @Column(nullable = false)
    private Date nfastDate;

    @Column(columnDefinition = "TINYINT")
    @ColumnDefault("0")
    private Byte nfastUseState;

    @Column(columnDefinition = "TINYINT")
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
    private long userSequence;

    @ManyToOne
    @JoinColumn(name="store_sequence", referencedColumnName = "storeSequence")
    private Store storeSequence;

    @Builder
    public Nfast(long nfastSequence, BigDecimal nfastPrice, BigDecimal nfastHopePrice, String nfastEigenvalue, Date nfastDate, Byte nfastUseState, Byte nfastSaleState, long nfastTransactionCount, BigDecimal nfastDefaultPrice, String nfastQr, Store storeSequence, long userSequence) {
        this.nfastSequence = nfastSequence;
        this.nfastPrice = nfastPrice;
        this.nfastHopePrice = nfastHopePrice;
        this.nfastEigenvalue = nfastEigenvalue;
        this.nfastDate = nfastDate;
        this.nfastUseState = nfastUseState;
        this.nfastSaleState = nfastSaleState;
        this.nfastTransactionCount = nfastTransactionCount;
        this.nfastDefaultPrice = nfastDefaultPrice;
        this.nfastQr = nfastQr;
        this.storeSequence = storeSequence;
        this.userSequence = userSequence;
    }

    public NfastDto toDto(){
        NfastDto nfastDto = NfastDto.builder()
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
                .storeSequence(storeSequence)
                .userSequence(userSequence)
                .build();
        return nfastDto;
    }

    public NfastGetDto toGetDto(){
        NfastGetDto nfastGetDto = NfastGetDto.builder()
                .nfastSequence(nfastSequence)
                .nfastPrice(nfastPrice)
                .nfastEigenvalue(nfastEigenvalue)
                .nfastDate(nfastDate)
                .nfastQr(nfastQr)
                .storeName(storeSequence.getStoreName())
                .build();
        return nfastGetDto;
    }
}
