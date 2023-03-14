package com.nft.nfast.entity.business;

import com.nft.nfast.model.dto.business.StoreDto;
import com.nft.nfast.model.dto.business.StoreFindDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long storeSequence;

    @Column(nullable = false)
    private String storeWallet;

    @Column(nullable = false, length = 50)
    private String storeName;

    @Column(nullable = false, length = 20)
    private String storeCategory;

    @Column(nullable = false)
    private String storeAddress;

    @Column(nullable = false, length = 13)
    private String storePhone;

    @Column
    private String storeImage;

    @Column
    private String storeDetail;

    @Column
    private String storeOfficeHours;

    @Column(nullable = false)
    private Date storeDate;

    @Column(nullable = false, length = 25)
    private String storeLat;

    @Column(nullable = false, length = 25)
    private String storeLng;

    @Builder
    public Store(long storeSequence, String storeWallet, String storeName, String storeCategory, String storeAddress, String storePhone, String storeImage, String storeDetail, String storeOfficeHours, Date storeDate, String storeLat, String storeLng) {
        this.storeSequence = storeSequence;
        this.storeWallet = storeWallet;
        this.storeName = storeName;
        this.storeCategory = storeCategory;
        this.storeAddress = storeAddress;
        this.storePhone = storePhone;
        this.storeImage = storeImage;
        this.storeDetail = storeDetail;
        this.storeOfficeHours = storeOfficeHours;
        this.storeDate = storeDate;
        this.storeLat = storeLat;
        this.storeLng = storeLng;
    }

    public StoreDto toDto(){
        StoreDto storeDto = StoreDto.builder()
                .storeSequence(storeSequence)
                .storeWallet(storeWallet)
                .storeName(storeName)
                .storeCategory(storeCategory)
                .storeAddress(storeAddress)
                .storePhone(storePhone)
                .storeImage(storeImage)
                .storeDetail(storeDetail)
                .storeOfficeHours(storeOfficeHours)
                .storeDate(storeDate)
                .storeLat(storeLat)
                .storeLng(storeLng)
                .build();
        return storeDto;
    }

    public StoreFindDto toFindDto(){
        StoreFindDto storeFindDto = StoreFindDto.builder()
                .storeSequence(storeSequence)
                .storeName(storeName)
                .build();
        return storeFindDto;
    }
}
