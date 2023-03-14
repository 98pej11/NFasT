package com.nft.nfast.entity.business;

import com.nft.nfast.model.dto.business.OwnerDto;
import lombok.Builder;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger ownerSequence;

    @Column(nullable = false)
    private String ownerWallet;

    @Column(nullable = false, length = 50)
    private String ownerName;

    @Column(nullable = false, length = 20)
    private String ownerCategory;

    @Column(nullable = false)
    private String ownerAddress;

    @Column(nullable = false, length = 13)
    private String ownerPhone;

    @Column
    private String ownerImage;

    @Column
    private String ownerDetail;

    @Column
    private String ownerOfficeHours;

    @Column(nullable = false)
    private int ownerIsApproved;

    @Column(nullable = false)
    private Date ownerDate;

    @Builder
    public Owner(BigInteger ownerSequence, String ownerWallet, String ownerName, String ownerCategory, String ownerAddress, String ownerPhone, String ownerImage, String ownerDetail, String ownerOfficeHours, int ownerIsApproved, Date ownerDate) {
        this.ownerSequence = ownerSequence;
        this.ownerWallet = ownerWallet;
        this.ownerName = ownerName;
        this.ownerCategory = ownerCategory;
        this.ownerAddress = ownerAddress;
        this.ownerPhone = ownerPhone;
        this.ownerImage = ownerImage;
        this.ownerDetail = ownerDetail;
        this.ownerOfficeHours = ownerOfficeHours;
        this.ownerIsApproved = ownerIsApproved;
        this.ownerDate = ownerDate;
    }

    public OwnerDto toDto(){
        OwnerDto ownerDto = OwnerDto.builder()
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
        return ownerDto;
    }
}
