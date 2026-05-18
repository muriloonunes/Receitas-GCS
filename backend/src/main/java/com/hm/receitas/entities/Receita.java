package com.hm.receitas.entities;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.UniqueElements;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "receita")
public class Receita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank(message = "O nome da receita não pode estar em branco")
    @Size(min = 3, message = "O nome da receita deve ter pelo menos 3 caracteres")
    private String nome;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "A categoria da receita é obrigatória")
    private Categoria categoria;

    @NotNull(message = "O tempo de preparo da receita não pode ser nulo")
    @Min(value = 1, message = "O tempo de preparo tem que ser maior que 1 minuto")
    private Integer tempoPreparo;

    @NotNull(message = "O número de porções não pode ser nulo")
    @Min(value = 1, message = "O número de porções tem que ser pelo menos 1")
    private Integer porcoes;

    @NotEmpty(message = "A lista de ingredientes não pode estar vazia")
    private List<String> ingredientes;

    @NotBlank(message = "O modo de preparo não pode estar em branco")
    @Size(min = 10, message = "O modo de preparo deve ter pelo menos 10 caracteres")
    private String modoPreparo;

    private LocalDateTime dataCadastro;

    public Receita() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Integer getTempoPreparo() {
        return tempoPreparo;
    }

    public void setTempoPreparo(Integer tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public Integer getPorcoes() {
        return porcoes;
    }

    public void setPorcoes(Integer porcoes) {
        this.porcoes = porcoes;
    }

    public List<String> getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(List<String> ingredientes) {
        this.ingredientes = ingredientes;
    }

    public String getModoPreparo() {
        return modoPreparo;
    }

    public void setModoPreparo(String modoPreparo) {
        this.modoPreparo = modoPreparo;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}
