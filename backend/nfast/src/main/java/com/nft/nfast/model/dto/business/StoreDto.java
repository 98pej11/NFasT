package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Store;
import lombok.*;

import java.util.Date;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StoreDto {
    private long storeSequence;
    private String storeWallet;
    private String storeName;
    private String storeCategory;
    private String storeAddress;
    private String storePhone;
    private String storeImage;
    private String storeDetail;
    private String storeOfficeHours;
    private Date storeDate;
    private String storeLat;
    private String storeLng;

    public Store toEntity(){
        Store owner = Store.builder()
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
        return owner;
    }
}
