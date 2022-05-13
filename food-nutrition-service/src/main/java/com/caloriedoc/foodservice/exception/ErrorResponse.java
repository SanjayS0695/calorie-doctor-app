package com.caloriedoc.foodservice.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ErrorResponse {

    private String errorMessage;
    private String stackTrace;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;

    private ErrorResponse() {
        timestamp = LocalDateTime.now();
    }

    public ErrorResponse(String errorMessage) {
        this();
        this.errorMessage = errorMessage;
        this.stackTrace = null;
    }

    public ErrorResponse(Throwable ex) {
        this();
        this.errorMessage = "Unexpected error";
        this.stackTrace = ex.getLocalizedMessage();
    }

    public ErrorResponse(String errorMessage, Throwable ex) {
        this();
        this.errorMessage = errorMessage;
        this.stackTrace = ex.getLocalizedMessage();
    }
}
