package com.nft.nfast.model.service.user;

import com.nft.nfast.entity.admin.Temp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TempServiceImpl implements TempService {
	@Autowired
	private TempRepository tradeRepository;

	// 입출금 내역 찾기
	@Override
	public TempDto findTrade(int tradeId) {
		Optional<Temp> tradeWrapper = tradeRepository.findById(tradeId);
		if (tradeWrapper.isPresent()) {
			Temp trade = tradeWrapper.get();
			TempDto dto = trade.toDto();
//			TempDto dto = TempDto.builder()
//				.tradeId(tradeId)
//				.userId(trade.getUserId())
//				.depositAndWithdrawl(trade.getDepositAndWithdrawl())
//				.amount(trade.getAmount())
//				.date(trade.getDate())
//				.bank(trade.getBank())
//				.account(trade.getAccount())
//				.process(trade.getProcess())
//				.build();
			return dto;
		}
		return null;
	}

	// 입출금 내역 등록
	@Override
	public void addTrade(TempDto tradeDto) {
		tradeRepository.save(tradeDto.toEntity()).getTradeId();
	}

}
