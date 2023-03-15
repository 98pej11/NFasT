package com.nft.nfast.model.dto.business;

import java.math.BigDecimal;
import java.util.Date;

public interface NfastPurchase {
    BigDecimal getPrice();
    Date getNfastDate();
    int getAmount();
}
