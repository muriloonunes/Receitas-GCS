package com.hm.receitas.service;

import com.hm.receitas.entities.Receita;
import com.hm.receitas.entities.dto.ReceitaDTO;
import com.hm.receitas.repository.ReceitasRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReceitasService {
    private final ReceitasRepository receitasRepository;

    public ReceitasService(ReceitasRepository receitasRepository) {
        this.receitasRepository = receitasRepository;
    }

    public Receita criar(ReceitaDTO receitaDTO) {
        if (receitasRepository.existsByNome(receitaDTO.nome())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Já existe uma receita cadastrada com este nome.");
        }
        Receita receita = new Receita();
        receita.setNome(receitaDTO.nome());
        receita.setCategoria(receitaDTO.categoria());
        receita.setTempoPreparo(receitaDTO.tempoPreparo());
        receita.setPorcoes(receitaDTO.porcoes());
        receita.setIngredientes(receitaDTO.ingredientes());
        receita.setModoPreparo(receitaDTO.modoPreparo());
        receita.setDataCadastro(LocalDateTime.now());

        return receitasRepository.save(receita);
    }

    public Receita atualizar(Long id, Receita receita) {
        Receita existente = buscarPorId(id);
        existente.setNome(receita.getNome());
        existente.setCategoria(receita.getCategoria());
        existente.setPorcoes(receita.getPorcoes());
        existente.setTempoPreparo(receita.getTempoPreparo());
        existente.setModoPreparo(receita.getModoPreparo());
        existente.setIngredientes(receita.getIngredientes());

        return receitasRepository.save(existente);
    }

    public List<Receita> listarTodos() {
        return receitasRepository.findAll();
    }

    public Receita buscarPorId(Long id) {
        return receitasRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Receita não encontrada")
        );
    }

    public void deletar(Long id) {
        receitasRepository.deleteById(id);
    }
}
