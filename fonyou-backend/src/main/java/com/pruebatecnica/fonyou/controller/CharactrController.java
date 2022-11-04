package com.pruebatecnica.fonyou.controller;


import com.pruebatecnica.fonyou.exception.CharactrNotFoundException;
import com.pruebatecnica.fonyou.model.Charactr;
import com.pruebatecnica.fonyou.repository.CharactrRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class CharactrController {

    @Autowired
    private CharactrRepository charactrRepository;

    @PostMapping("/api/charactr")
    Charactr newCharactr(@RequestBody Charactr newCharactr) {
        return charactrRepository.save(newCharactr);
    }

    @GetMapping("/api/charactrs")
    List<Charactr> getAllCharactrs(){
        return  charactrRepository.findAll();
    }

    @GetMapping("/api/charactr/{id}")
    Optional<Charactr> getCharactrById(@PathVariable Long id){
        return Optional.ofNullable(charactrRepository.findById(id).orElseThrow(() -> new CharactrNotFoundException(id)));
    }

    @PutMapping("/api/charactr/{id}")
    Charactr editCharactr(@RequestBody Charactr newCharactr, @PathVariable Long id){
        return charactrRepository.findById(id).map( charactr -> {
            charactr.setName(newCharactr.getName());
            charactr.setRole(newCharactr.getRole());
            charactr.setDescription(newCharactr.getDescription());
            charactr.setDate(newCharactr.getDescription());
            return charactrRepository.save(charactr);
        }).orElseThrow(() -> new CharactrNotFoundException(id));
    }

    @DeleteMapping("/api/charactr/{id}")
    String deleteCharactr(@PathVariable Long id){
        if(!charactrRepository.existsById(id)){
            throw new CharactrNotFoundException(id);
        }
        charactrRepository.deleteById(id);
        return "Character deleted";
    }



}
