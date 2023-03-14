package com.nft.nfast.entity.user;

import com.nft.nfast.model.dto.user.BookmarkDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@Builder
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bookmarkSequence;

    @Column(nullable = false)
    private long ownerSequence;

    @Column(nullable = false)
    private long userSequence;

    @Builder
    public Bookmark(long bookmarkSequence, long ownerSequence, long userSequence) {
        this.bookmarkSequence = bookmarkSequence;
        this.ownerSequence = ownerSequence;
        this.userSequence = userSequence;
    }

    public BookmarkDto toDto(){
        BookmarkDto bookmarkDto = BookmarkDto.builder()
                .bookmarkSequence(bookmarkSequence)
                .ownerSequence(ownerSequence)
                .userSequence(userSequence)
                .build();
        return bookmarkDto;
    }
}
