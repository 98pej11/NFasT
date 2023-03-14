package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Owner;
import lombok.*;

import java.math.BigInteger;
import java.util.Date;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OwnerDto {
    private BigInteger ownerSequence;
    private String ownerWallet;
    private String ownerName;
    private String ownerCategory;
    private String ownerAddress;
    private String ownerPhone;
    private String ownerImage;
    private String ownerDetail;
    private String ownerOfficeHours;
    private int ownerIsApproved;
    private Date ownerDate;

    public Owner toEntity(){
        Owner owner = Owner.builder()
                .ownerSequence(ownerSequence)
                .ownerWallet(ownerWallet)
                .ownerName(ownerName)
                .ownerCategory(ownerCategory)
                .ownerAddress(ownerAddress)
                .ownerPhone(ownerPhone)
                .ownerImage(ownerImage)
                .ownerDetail(ownerDetail)
                .ownerOfficeHours(ownerOfficeHours)
                .ownerIsApproved(ownerIsApproved)
                .ownerDate(ownerDate)
                .build();
        return owner;
    }
}
