package com.nft.nfast.repository;

import com.nft.nfast.entity.user.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark,Long> {
    Optional<Bookmark> findByUserSequenceAndStoreSequence(long storeSequence,long userSequence);
}
