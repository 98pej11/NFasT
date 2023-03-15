package com.nft.nfast.repository;

import com.nft.nfast.entity.business.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoreRepository extends JpaRepository<Store,Long> {
    List<Store> findAllByStoreNameContaining(String storeName);
    Optional<Store> findByStoreName(String storeName);

}
