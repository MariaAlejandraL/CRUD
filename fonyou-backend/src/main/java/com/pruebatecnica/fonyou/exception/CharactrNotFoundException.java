package com.pruebatecnica.fonyou.exception;

public class CharactrNotFoundException extends  RuntimeException{
    public  CharactrNotFoundException (Long id){
        super("Character with  id: " + id + " not found");
    }
}
