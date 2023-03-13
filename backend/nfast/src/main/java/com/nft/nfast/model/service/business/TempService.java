package com.nft.nfast.model.service.business;

public interface TempService {
	// 입출금 내역 찾기
	public TempDto findTrade(int tradeId);
	// 입출금 내역 삽입
	public void addTrade(TempDto tradeDto);
}
