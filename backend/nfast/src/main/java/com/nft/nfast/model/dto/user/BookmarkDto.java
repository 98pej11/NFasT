package com.nft.nfast.model.dto.user;

import com.nft.nfast.entity.user.Bookmark;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookmarkDto {
    private long bookmarkSequence;
    private long storeSequence;
    private long userSequence;

    public Bookmark toEntity(){
        Bookmark bookmark = Bookmark.builder()
                .bookmarkSequence(bookmarkSequence)
                .storeSequence(storeSequence)
                .userSequence(userSequence)
                .build();
        return bookmark;
    }
}
