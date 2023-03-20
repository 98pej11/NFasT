package com.nft.nfast.model.dto.user;

import com.nft.nfast.entity.user.User;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import java.math.BigInteger;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private long userSequence;
    private String userWallet;
    private String userImage;
    private String userNickname;

    public User toEntity(){
        User user = User.builder()
                .userSequence(userSequence)
                .userWallet(userWallet)
                .userImage(userImage)
                .userNickname(userNickname)
                .build();
        return user;
    }
}
