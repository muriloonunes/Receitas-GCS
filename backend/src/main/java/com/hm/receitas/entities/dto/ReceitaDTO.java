package com.hm.receitas.entities.dto;

import com.hm.receitas.entities.Categoria;
import jakarta.validation.constraints.*;

import java.util.List;

public record ReceitaDTO(
        @NotBlank(message = "O nome da receita não pode estar em branco")
        @Size(min = 3, message = "O nome da receita deve ter pelo menos 3 caracteres")
        String nome,

        @NotNull(message = "A categoria da receita é obrigatória")
        Categoria categoria,

        @NotNull(message = "O tempo de preparo da receita não pode ser nulo")
        @Min(value = 1, message = "O tempo de preparo tem que ser maior que 1 minuto")
        Integer tempoPreparo,

        @NotNull(message = "O número de porções não pode ser nulo")
        @Min(value = 1, message = "O número de porções tem que ser pelo menos 1")
        Integer porcoes,

        @NotEmpty(message = "A lista de ingredientes não pode estar vazia")
        List<String> ingredientes,

        @NotBlank(message = "O modo de preparo não pode estar em branco")
        @Size(min = 10, message = "O modo de preparo deve ter pelo menos 10 caracteres")
        String modoPreparo
) {
}
