package com.nft.nfast.repository.admin;

import com.nft.nfast.entity.admin.Temp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TempRepository extends JpaRepository<Temp, Integer> {
    List<Temp> findByQuestionId(int questionId);
    void deleteByQuestionIdAndUserId(int questionId,int userId);
    List<Temp> findByUserId(int userId);
    List<Temp> deleteAllByQuestionId(int questionId);
}
