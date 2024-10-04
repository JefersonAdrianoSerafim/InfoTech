Teste_Estagio como solicitado.

Para testar as rotas utilizei o comando o Curl no linux.

--Create:
curl -X POST http://localhost:3000/posts -H "Content-Type: application/json" -d '{
  "nome_post": "Novo Post",
  "descricao_post": "Descrição do Novo Post",
  "categoria_post": "Nova Categoria"
}'

--Update:
curl -X PUT http://localhost:3000/posts/1 -H "Content-Type: application/json" -d '{"nome_post": "Nome atualizado",
"descricao_post": "Descricao atualizada",
"categoria_post": "Categoria atualizada"}'

--Delete:
curl -X DELETE http://localhost:3000/posts/1
