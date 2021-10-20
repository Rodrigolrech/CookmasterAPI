# Boas vindas ao repositório do projeto Cookmaster!


# Habilidades

Neste projeto,fui capaz de:

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

- Realizar testes de integração


## O que foi desenvolvido

Foi desenvolvido uma api utilizando a arquitetura MSC!

Neste novo projeto é possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.

---

## Desenvolvimento

Foram desenvolvidas todas as camadas da aplicação (Models, Service e Controllers).

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜).

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) é necessário autenticar-se. Além disso, as pessoas usuárias podem ser clientes ou administradores. Pessoas clientes podem apenas disparar ações nas receitas que ele mesmo criou. Já uma pessoa administradora pode disparar qualquer ação em qualquer receita.

A autenticação é feita via `JWT`.

É possível adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.

## Como utlizar a api

Para poder utilizar a API você vai precisar fazer um git clone do repositorio.

Depois é necessário instalar todas as dependências necessárias com npm install (para o sistema operacional Linux).

Depois disso abra o vsCode na pasta do projeto e execute npm start.

Utilize um HTTP/API clients como POSTMAN ou IMSOMNIA para facilitar com as requisições.

Ter mongodb instalado em seu computador.

### 1 - Realizar o cadastro de usuários.

- A rota a ser usada é (http://localhost:3000/users) com o método POST.

- No banco um usuário cadastrado terá os campos Email, Senha, Nome e Role.

- Para criar um usuário através da API, todos os campos são obrigatórios, com exceção do Role.

- O campo Email deve ser único.

- Usuários criados através desse endpoint tem seu campo Role com o atributo "user" ou seja, são usuários comuns, e não admins.

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ``

### 2 - Realizar o login de usuários.

- A rota a ser usada (http://localhost:3000/login) com o método POST.

- A rota deve receber os campos Email e Senha e são validados no banco de dados.

- Um token `JWT` é gerado e retornado caso haja sucesso no login. No seu payload está presente o id, email e role do usuário.

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "email": "string",
    "password": "string"
  }
 

### 3 - Realizar o cadastro de receitas.

- A rota a ser usada (http://localhost:3000/recipes) com o método POST.

- A receita só pode ser criada caso o usuário esteja logado e o token `JWT` validado.

- No banco, a receita tem os campos Nome, Ingredientes, Modo de preparo, URL da imagem e Id do Autor.

- Nome, ingredientes e modo de preparo devem ser recebidos no corpo da requisição, com o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

- O campo dos ingredientes pode ser um campo de texto aberto.

- O campo ID do autor, é preenchido automaticamente com o ID do usuário logado, que é extraído do token JWT.

- A URL da imagem será preenchida através de outro endpoint


### 4 - Realizar a listagem de receitas cadastradas

- A rota a ser usada (http://localhost:3000/recipes) com o método GET.

- A rota pode ser acessada por usuários logados ou não

### 5 - Visualizar uma receita específica

- A rota a ser usada (http://localhost:3000/recipes/:id) com o método GET.

- A rota pode ser acessada por usuários logados ou não

### 7 - Realizar a edição de uma receita

- A rota a ser usada (http://localhost:3000/recipes/:id) com o método PUT.

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado, ou caso esse usuário seja um admin.

- O corpo da requisição deve receber o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

### 8 - Realizar a exclusão de uma receita

- A rota a ser usada (http://localhost:3000/recipes/:id) com o método DELETE.

- A receita só pode ser excluída caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser excluída caso pertença ao usuário logado, ou caso o usuário logado seja um admin.

### 9 - Realizar a adição de uma imagem a uma receita

- A rota a ser usada (http://localhost:3000/recipes/:id/image/) com o método PUT.

- A imagem deve ser lida do campo `image`.

- O endpoint aceita requisições no formato `multipart/form-data`.

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado ou caso o usuário logado seja admin.

- O upload da imagem é feito utilizando o `Multer`.

- O nome do arquivo será o ID da receita, e sua extensão `.jpeg`.

- A URL completa para acessar a imagem através da API é gravada no banco de dados, junto com os dados da receita.

### 10 - Acessar a imagem de uma receita

- As imagens estão disponíveis através da rota http://localhost:3000/images/<id-da-receita>.jpeg na API.

### 11 - Realizar o cadastro de pessoas administradoras

- A rota a ser usada (http://localhost:3000/users/admin) com o método POST.

- Só será possível adicionar um admin caso esta ação esteja sendo feita por outro admin.

- As requisições pra esse endpoint adicionam um usuário com a role admin.

- O corpo da requisição deve ter o seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
