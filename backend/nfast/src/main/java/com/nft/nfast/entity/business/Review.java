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
    private long reviewSequence;

    @Column(nullable = false)
    private int reviewTopic;

    @Column
    private int reviewSubTopic;

    @Column(nullable = false)
    private String reviewContent;

    @Column(nullable = false)
    private long storeSequence;

    @Column
    private long userSequence;

    @Builder
    public Review(long reviewSequence, int reviewTopic, int reviewSubTopic, String reviewContent, long storeSequence, long userSequence) {
        this.reviewSequence = reviewSequence;
        this.reviewTopic = reviewTopic;
        this.reviewSubTopic = reviewSubTopic;
        this.reviewContent = reviewContent;
        this.storeSequence = storeSequence;
        this.userSequence = userSequence;
    }

    public ReviewDto toDto(){
        ReviewDto reviewDto = ReviewDto.builder()
                .reviewSequence(reviewSequence)
                .reviewTopic(reviewTopic)
                .reviewSubTopic(reviewSubTopic)
                .reviewContent(reviewContent)
                .storeSequence(storeSequence)
                .userSequence(userSequence)
                .build();
        return reviewDto;
    }
}
