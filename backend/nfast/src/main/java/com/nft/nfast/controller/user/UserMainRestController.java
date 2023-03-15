package com.nft.nfast.controller.user;

import com.nft.nfast.model.dto.business.*;
import com.nft.nfast.model.dto.user.UserDto;
import com.nft.nfast.model.service.user.UserMainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserMainRestController {
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    UserMainService userMainService;

    @GetMapping("/main/search-list/{store_name}")
    public ResponseEntity<Map<String, Object>> storeList(@PathVariable String store_name){
        List<StoreFindDto> storeDtoList = userMainService.findAllStore(store_name);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("stores",storeDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    @GetMapping("/available-NFasT/{user_sequence}")
    public ResponseEntity<Map<String, Object>> nftList(@PathVariable long user_sequence){
        List<NfastGetDto> nfastGetDtoList = userMainService.findAvailableNfast(user_sequence);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",nfastGetDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    @GetMapping("/store/{store_sequence}/purchase")
    public ResponseEntity<Map<String,Object>> availableNftList(@PathVariable long store_sequence){
        List<NfastPurchaseDto> nfastPurchaseDtoList = userMainService.findPurchaseNfast(store_sequence);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",nfastPurchaseDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    @GetMapping("/store/{store_sequence}/purchase/detail")
    public ResponseEntity<Map<String,Object>> availableNftDateList(@PathVariable long store_sequence, @RequestBody NfastDto nfast){
        SimpleDateFormat tranSimpleFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
        List<NfastPurchaseDto> nfastPurchaseDtoList = userMainService.findAllByNfastDate(tranSimpleFormat.format(nfast.getNfastDate()));
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("result",SUCCESS);
        resultMap.put("NFasT",nfastPurchaseDtoList);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
}
