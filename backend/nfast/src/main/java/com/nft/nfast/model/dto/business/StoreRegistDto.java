package com.nft.nfast.model.dto.business;

import com.nft.nfast.entity.business.Nfast;
import com.nft.nfast.entity.business.Store;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StoreRegistDto {
    // 사업자 등록번호
    private String storeInfoNumber;
    
    // 주소
    private String storeAddress;
    
    // 사장님 지갑 주소
    private String storeWallet;

}
