package com.nft.nfast.model.dto.user;


import com.nft.nfast.entity.admin.Temp;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class TempDto {
    private int tradeId;
    private int userId;
    private int depositAndWithdrawl;
    private int amount;
    private String date;
    private String bank;
    private String account;
    private int process;


    @Builder
    public TempDto(int tradeId, int userId, int depositAndWithdrawl, int amount, String date,
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
}
