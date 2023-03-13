package com.nft.nfast.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class TempUserController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private TempService tradeService;

	// 입출금 신청
	@PostMapping("/mypage/points")
	public ResponseEntity<String> TradeAdd(@RequestBody TempDto tradeDto) {
		System.out.println("TRADEADD "+ tradeDto);
		tradeService.addTrade(tradeDto);
		return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
	}
}
