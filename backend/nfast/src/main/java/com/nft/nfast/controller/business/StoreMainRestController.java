package com.nft.nfast.controller.business;

import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.StoreFindDto;
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
    public ResponseEntity<String> mintNfast(@RequestBody NfastMintDto mintDto, @PathVariable String store_sequence){
//        log.info( mintDto.getStoreSequence());
        System.out.println("check1 "+mintDto.getStoreWallet());
        System.out.println("check22 "+store_sequence);

        storeMainService.saveNfast(mintDto);
//        Map<String, Object> resultMap = new HashMap<>();
//        resultMap.put("result",SUCCESS);
//        resultMap.put("stores",null);
        String result=SUCCESS;
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
    }

}
