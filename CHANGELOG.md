# Changelog
Todas as mudanças notáveis neste projeto serão documentadas aqui.
Formato: https://keepachangelog.com
## [1.0.0] - 2026-05-17
### Added
- RF01: Listagem de receitas com cards (nome, categoria, tempo de preparo) (#1)
- RF01: Ordenação por data de cadastro, mais recentes primeiro (#1)
- RF01: Mensagem informativa quando não há receitas cadastradas (#1)
- RF03: Formulário de cadastro com Reactive Forms e validação (#2)
- RF03: Mensagens de erro específicas por campo (#2)
- RF03: Redirecionamento para listagem após cadastro com sucesso (#2)
- CI: Pipeline GitHub Actions — build backend (Maven) e frontend (Angular)
### Technical
- Entidade Recipe com validações Bean Validation (@Valid)
- Branch protection configurado no main (PR + CI obrigatórios)
- Conventional Commits adotado como padrão do projeto
## [0.1.0] - 2026-05-10
### Added
- Configuração inicial do repositório (monorepo)
- Estrutura /backend e /frontend
- README.md e CHANGELOG.md iniciais
- Branch develop configurado
