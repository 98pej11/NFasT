package com.nft.nfast.repository;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.model.dto.business.NfastPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface NfastRepository extends JpaRepository<Nfast,Long> {
    List<Nfast> findAllByUserSequence(long userSequence);

    @Query(value="select nfast_date as nfastDate,count(*) as amount, min(nfast_price) as price from nfast where store_sequence=?1 group by nfast_date",nativeQuery = true)
    List<NfastPurchase> findAllByStoreSequence(long storeSequence);

    @Query(value="select nfast_date as nfastDate, count(*) as amount, nfast_price as price from nfast where nfast_date=?1 group by nfast_price", nativeQuery = true)
    List<NfastPurchase> findAllByNfastDate(String nfastDate);

    @Query(value="select * from nfast where nfast_sale_state!=2 and store_sequence=?1 and nfast_date=?2 and nfast_price=?3 limit ?4", nativeQuery = true)
    List<Nfast> findTopAmountNfastByParam(long storeSequence, String nfastDate,BigDecimal nfastPrice, int amount);
}

