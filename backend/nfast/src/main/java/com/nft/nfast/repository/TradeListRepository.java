package com.nft.nfast.repository;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.entity.user.TradeList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TradeListRepository extends JpaRepository<TradeList,Long> {
    List<TradeList> findAllByUserSequence(long userSequence);
}
