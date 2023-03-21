package com.nft.nfast.repository;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.model.dto.business.NfastMinted;
import com.nft.nfast.model.dto.business.NfastMintedDto;
import com.nft.nfast.model.dto.business.NfastPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Repository
public interface NfastRepository extends JpaRepository<Nfast,Long> {
    List<Nfast> findAllByUserSequence(long userSequence);

    @Query(value="select nfast_date as nfastDate,count(*) as amount, min(nfast_price) as price from nfast where store_sequence=?1 group by nfast_date",nativeQuery = true)
    List<NfastPurchase> findAllByStoreSequence(long storeSequence);

    @Query(value="select nfast_date as nfastDate, count(*) as amount, nfast_price as price from nfast where nfast_date=?1 group by nfast_price", nativeQuery = true)
    List<NfastPurchase> findAllByNfastDate(String nfastDate);

    @Query(value=
            "select nfast_date as nfastDate, count(case when nfast_sale_state=0 then 1 end) as nfastSaleCount, count(*) as nfastTotalCount from nfast where store_sequence=:store group by nfast_date ", nativeQuery = true)
    List<NfastMinted> findUsedByNfastDate(@Param("store") Long store);
//    count(case when nfast_sale_state=0 then 1 end) as nfastSaleCount, count(*) as nfastTotalCount

    @Query(value="select * from nfast where nfast_sale_state!=2 and store_sequence=?1 and nfast_date=?2 and nfast_price=?3 limit ?4", nativeQuery = true)
    List<Nfast> findTopAmountNfastByParam(long storeSequence, String nfastDate, BigDecimal nfastPrice, int amount);

    @Query(value = "select max(nfast_default_price) as nfastDefaultPrice from nfast where nfast_date=:mintedDate", nativeQuery = true)
    BigDecimal findDefaultPriceByNfastDate(@Param("mintedDate") Date mintedDate);

    @Query(value="SELECT MAX(nfast_price) as nfastPrice FROM nfast GROUP BY nfast_date HAVING nfast_date BETWEEN DATE_FORMAT(DATE_SUB(NOW(), INTERVAL (WEEKDAY(NOW()) + 7) DAY), '%Y-%m-%d') AND DATE_FORMAT(DATE_SUB(NOW(), INTERVAL (WEEKDAY(NOW()) + 1) DAY), '%Y-%m-%d');", nativeQuery = true)
    List<Object> findMaxNfastPriceGroupByNfastDate();

    @Query(value="SELECT MIN(nfast_price) as nfast_price FROM nfast GROUP BY nfast_date HAVING nfast_date BETWEEN DATE_FORMAT(DATE_SUB(NOW(), INTERVAL (WEEKDAY(NOW()) + 7) DAY), '%Y-%m-%d') AND DATE_FORMAT(DATE_SUB(NOW(), INTERVAL (WEEKDAY(NOW()) + 1) DAY), '%Y-%m-%d');", nativeQuery = true)
    List<Object> findMinNfastPriceGroupByNfastDate();
}

