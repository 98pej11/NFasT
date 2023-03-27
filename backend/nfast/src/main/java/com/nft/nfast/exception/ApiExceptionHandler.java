package com.nft.nfast.exception;

import com.nft.nfast.config.constant.ExceptionMessage;
import com.nft.nfast.exception.Store.NFastNotExistException;
import com.nft.nfast.exception.Store.StoreNotFoundException;
import com.nft.nfast.exception.Store.TypeNotAvailabeException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

// Exception을 한 곳에 집중하여 핸들링할 수 있게 도와주는 Bean
@ControllerAdvice
public class ApiExceptionHandler {
    // 어떤 컨트롤러에서든 NFastNotExistException이 발생하면
    // 이 @ControllerAdvice 어노테이션이 선언된 클래스로 와서 맞는 익셉션 핸들러를 찾고 그에 대한 처리를 함
    @ExceptionHandler(value={NFastNotExistException.class})
    public ResponseEntity<Object> handlerNFastNotExistException(NFastNotExistException e){
        HttpStatus httpStatus=HttpStatus.BAD_REQUEST;
        ApiException apiException=new ApiException(
                ExceptionMessage.NFAST_NOT_EXIST_MESSAGE,
                httpStatus,
                ZonedDateTime.now(ZoneId.of("Z"))
        );

        return new ResponseEntity<>(apiException, httpStatus);
    }

    @ExceptionHandler(value={StoreNotFoundException.class})
    public ResponseEntity<Object> handlerStoreNotFoundException(StoreNotFoundException e){
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;
        ApiException apiException = new ApiException(
                ExceptionMessage.STORE_NOT_FOUND_MESSAGE,
                httpStatus,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiException, httpStatus);
    }

    @ExceptionHandler(value={TypeNotAvailabeException.class})
    public ResponseEntity<Object> handlerTypeNotAvailableException(TypeNotAvailabeException e){
        HttpStatus httpStatus=HttpStatus.BAD_REQUEST;
        ApiException apiException=new ApiException(
                ExceptionMessage.TYPE_NOT_AVAILABLE_MESSAGE,
                httpStatus,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiException, httpStatus);
    }
}
