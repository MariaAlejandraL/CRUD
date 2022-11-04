package com.pruebatecnica.fonyou.repository;

import com.pruebatecnica.fonyou.model.Charactr;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CharactrRepository extends JpaRepository<Charactr, Long> {


    Charactr findCharactrByName (String name);
}
