package com.nft.nfast.entity.user;

import com.nft.nfast.model.dto.user.TempDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@DynamicUpdate
public class Temp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tradeId;

	@Column(nullable = false)
	private int userId;

	@Column
	@ColumnDefault("0")
	private int depositAndWithdrawl;

	@Column(nullable = false)
	private int amount;

	@CreatedDate
	@Column(updatable = false)
	private String date;

	@Column(nullable = false)
	private String bank;

	@Column(nullable = false)
	private String account;

	@Column
	@ColumnDefault("0")
	private int process;

	public TempDto toDto(){
		TempDto tempDto = TempDto.builder()
				.tradeId(tradeId)
				.userId(userId)
				.depositAndWithdrawl(depositAndWithdrawl)
				.amount(amount)
				.date(date)
				.bank(bank)
				.account(account)
				.process(process)
				.build();
		return tempDto;
	}

	@Builder
	public Temp(int tradeId, int userId, int depositAndWithdrawl, int amount, String date,
                String bank, String account, int process) {
		this.tradeId = tradeId;
		this.userId = userId;
		this.depositAndWithdrawl = depositAndWithdrawl;
		this.amount = amount;
		this.date = date;
		this.bank = bank;
		this.account = account;
		this.process = process;
	}

	public void changeProcess(int process){
		this.process=process;
	}
}
