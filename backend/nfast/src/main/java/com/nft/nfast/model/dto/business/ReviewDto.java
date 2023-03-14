package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Review;
import lombok.*;

import java.math.BigInteger;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewDto {
    private BigInteger reviewSequence;
    private int reviewTopic;
    private int reviewSubTopic;
    private String reviewContent;
    private BigInteger ownerSequence;
    private BigInteger userSequence;

    public Review toEntity(){
        Review review = Review.builder()
                .reviewSequence(reviewSequence)
                .reviewTopic(reviewTopic)
                .reviewSubTopic(reviewSubTopic)
                .reviewContent(reviewContent)
                .ownerSequence(ownerSequence)
                .userSequence(userSequence)
                .build();
        return review;
    }
}
