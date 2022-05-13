package com.caloriedoc.foodservice.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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
