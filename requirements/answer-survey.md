# Responder enquete

## Caso de sucesso:

- ⛔️ Recebe uma requisição do tipo **PUT** na rota **/api/surveys/{survey_id}/results**
- ⛔️ Valida se a requisição foi feita por um usuário
- ⛔️ Valida se a resposta é um valor válido
- ⛔️ Cria um resultado de enquete com os dados fornecidos
- ⛔️ Retorna 200 com os dados do resultado da enquete

## Exceções:

- ⛔️ Retorna erro 404 se a API não existir
- ⛔️ Retorna erro 403 se não for um usuário
- ⛔️ Retorna erro 500 se a resposta enviada pelo client for uma resposta inválida
- ⛔️ Retorna erro 500 se der erro ao tentar criar o resultado da enquete
