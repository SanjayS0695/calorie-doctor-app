package com.caloriedoc.userservice.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class GenericException extends RuntimeException {

    private ErrorResponse errorResponse;
    private HttpStatus httpStatus;

    public GenericException(String message) {
        super(message);
    }

    public GenericException(ErrorResponse errorResponse, HttpStatus httpStatus) {
        this.errorResponse = errorResponse;
        this.httpStatus = httpStatus;
    }

    @Override
    public Throwable fillInStackTrace() {
        return this;
    }
}
