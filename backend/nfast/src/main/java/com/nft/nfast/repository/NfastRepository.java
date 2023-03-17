package com.nft.nfast.repository;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.model.dto.business.NfastPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface NfastRepository extends JpaRepository<Nfast,Long> {
    List<Nfast> findAllByUserSequence(long userSequence);

    @Query(value="select nfast_date as nfastDate,count(*) as amount, min(nfast_price) as price from nfast where store_sequence=?1 group by nfast_date",nativeQuery = true)
    List<NfastPurchase> findAllByStoreSequence(long storeSequence);

    @Query(value="select nfast_date as nfastDate, count(*) as amount, nfast_price as price from nfast where nfast_date=?1 group by nfast_price", nativeQuery = true)
    List<NfastPurchase> findAllByNfastDate(String nfastDate);

}
