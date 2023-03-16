package com.nft.nfast.controller.business;

import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.StoreFindDto;
import com.nft.nfast.model.dto.business.StoreIncomeDto;
import com.nft.nfast.model.service.store.StoreMainService;
import com.nft.nfast.model.service.user.UserMainServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Slf4j
@RestController
@RequestMapping("/api/owner")
@CrossOrigin(origins = "*")
public class StoreMainRestController {
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";


    @Autowired
    StoreMainService storeMainService;

    // 가게 NFast 발행
    @PostMapping("/{store_sequence}/mint")
    public ResponseEntity<String> mintNfast(@RequestBody NfastMintDto mintDto, @PathVariable Long store_sequence){
        storeMainService.saveNfast(mintDto);
        String result=SUCCESS;
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
    }

    @GetMapping("{store_sequence}/incomes")
    public ResponseEntity<Map<String, Object>> incomeList(@PathVariable Long store_sequence){
        Map<String, Object> resultMap = new HashMap<>();
        List<StoreIncomeDto> incomeGetDtoList=storeMainService.findAllIncomes(store_sequence);

        resultMap.put("result", SUCCESS);
        resultMap.put("incomes", incomeGetDtoList);
        return new ResponseEntity<>(resultMap,HttpStatus.ACCEPTED);
    }
}
