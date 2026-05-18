package com.hm.receitas.repository;

import com.hm.receitas.entities.Receita;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceitasRepository extends JpaRepository<Receita, Long> {
    boolean existsByNome(String nome);
}
