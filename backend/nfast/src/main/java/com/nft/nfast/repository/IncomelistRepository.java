package com.nft.nfast.repository;

import com.nft.nfast.entity.business.IncomeList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeListRepository extends JpaRepository<IncomeList,Long> {
    List<IncomeList> findAllByStoreSequence(Long storeSequence);
}
