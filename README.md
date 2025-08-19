
  Projeto ASFUS

  Repositório do site e portal de associados da ASFUS. Contém o protótipo do
  frontend e a API de backend.

  Estrutura do Projeto

   * Raiz do Projeto: Contém os arquivos do protótipo de frontend (.html, css/,
     js/) e toda a estrutura do backend.
   * /config: Configuração do banco de dados (Sequelize).
   * /controllers: Lógica de negócio para cada rota.
   * /middleware: Middlewares de autenticação (JWT).
   * /models: Definições das tabelas do banco de dados.
   * /routes: Definição dos endpoints da API.
   * server.js: Arquivo principal de entrada da API Node.js.

  Pré-requisitos

   * Node.js (v16 ou superior)
   * npm

  Setup e Instalação

   1. Clone o repositório:
   1     git clone [URL_DO_REPOSITORIO]

   2. Navegue até a pasta do projeto e instale as dependências do backend:
   1     cd suap
   2     npm install

   3. Crie o arquivo de variáveis de ambiente. Na raiz do projeto, crie um arquivo
      chamado .env:

   1     # Chave secreta para assinar os tokens JWT.
   2     # Use uma string longa e aleatória para segurança.
   3     JWT_SECRET=sua_chave_secreta_de_desenvolvimento

  Como Rodar o Projeto

  Backend

  Para iniciar o servidor da API em modo de desenvolvimento (com hot-reload):
   1 npm run dev
  O servidor estará disponível em http://localhost:3000.

  Para rodar em modo de produção:
   1 npm start

  Frontend

  O protótipo de frontend é estático. Para visualizar, basta abrir qualquer um
  dos arquivos .html diretamente no seu navegador.

  Endpoints da API

  A API está prefixada com /api.


  ┌────────┬────────────────┬───────────────────────────────────┬─────────┐
  │ Método │ Endpoint       │ Descrição                         │ Acesso  │
  ├────────┼────────────────┼───────────────────────────────────┼─────────┤
  │ POST   │ /auth/register │ Registra um novo usuário.         │ Público │
  │ POST   │ /auth/login    │ Realiza o login e retorna um JWT. │ Público │
  │ GET    │ /dependents    │ Lista os dependentes do usuário.  │ Privado │
  │ POST   │ /dependents    │ Adiciona um novo dependente.      │ Privado │
  └────────┴────────────────┴───────────────────────────────────┴─────────┘
