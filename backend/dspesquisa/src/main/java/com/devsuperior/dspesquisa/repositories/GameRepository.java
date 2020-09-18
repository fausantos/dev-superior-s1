package com.devsuperior.dspesquisa.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
	

}
