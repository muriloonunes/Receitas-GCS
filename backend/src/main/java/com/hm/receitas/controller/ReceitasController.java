package com.hm.receitas.controller;

import com.hm.receitas.entities.Receita;
import com.hm.receitas.entities.dto.ReceitaDTO;
import com.hm.receitas.service.ReceitasService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receitas")
@CrossOrigin(origins = "http://localhost:4200")
public class ReceitasController {
    private final ReceitasService service;

    public ReceitasController(ReceitasService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Receita> criar(@Valid @RequestBody ReceitaDTO receitaDTO) {
        Receita novaReceita = service.criar(receitaDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaReceita);
    }

    @GetMapping
    public ResponseEntity<List<Receita>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Receita> buscar(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}