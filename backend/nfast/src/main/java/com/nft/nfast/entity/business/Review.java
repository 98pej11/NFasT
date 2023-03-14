package com.nft.nfast.entity.business;

import com.nft.nfast.model.dto.business.ReviewDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger reviewSequence;

    @Column(nullable = false)
    private int reviewTopic;

    @Column
    private int reviewSubTopic;

    @Column(nullable = false)
    private String reviewContent;

    @Column(nullable = false)
    private BigInteger ownerSequence;

    @Column
    private BigInteger userSequence;

    @Builder
    public Review(BigInteger reviewSequence, int reviewTopic, int reviewSubTopic, String reviewContent, BigInteger ownerSequence, BigInteger userSequence) {
        this.reviewSequence = reviewSequence;
        this.reviewTopic = reviewTopic;
        this.reviewSubTopic = reviewSubTopic;
        this.reviewContent = reviewContent;
        this.ownerSequence = ownerSequence;
        this.userSequence = userSequence;
    }

    public ReviewDto toDto(){
        ReviewDto reviewDto = ReviewDto.builder()
                .reviewSequence(reviewSequence)
                .reviewTopic(reviewTopic)
                .reviewSubTopic(reviewSubTopic)
                .reviewContent(reviewContent)
                .ownerSequence(ownerSequence)
                .userSequence(userSequence)
                .build();
        return reviewDto;
    }
}
