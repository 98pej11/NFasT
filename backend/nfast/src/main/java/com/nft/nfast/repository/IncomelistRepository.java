package com.nft.nfast.repository;

import com.nft.nfast.entity.business.Incomelist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomelistRepository extends JpaRepository<Incomelist,Long> {
    List<Incomelist> findAllByStoreSequence(Long storeSequence);
}
