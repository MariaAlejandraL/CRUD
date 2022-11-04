package com.pruebatecnica.fonyou.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class CharactrNotFoundAdvice {


    @ResponseBody
    @ExceptionHandler(CharactrNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String , String> exceptionHandler (CharactrNotFoundException exception){
        Map<String, String> errorMap=new HashMap<>();
        errorMap.put("Error", exception.getMessage());
        return  errorMap;
    }
}
