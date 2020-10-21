![alt text](https://github.com/goomerdev/job-dev-backend-interview/raw/master/media/logo-azul.png "Goomer")



## Challenge - Developer Backend - GOOMER LISTA RANGO



## Projeto



Projeto Node.js utilizando Typescript



### Scripts iniciais

a Configuração inicial deve ser feita com os seguintes comandos

- "yarn install"
  - Efetuar a instalação de todas as dependências declaradas no arquivo "package.json"
- "yarn typeorm migration:run"
  - Executar os scripts para criação das tabelas do Banco de Dados
- "yarn start"
  - Iniciar a API

### Requisitos

- Dependências:
  	- express
  	- sqlite3
  	- typeorm
  	- typescript
  	- ts-node-dev
  	- multer
  	- express-async-errors
  	- yup
    - dotenv
    - moment

- Todas as dependências serão instaladas ao executar o comando "yarn install"

### Estrutura

- "src/database"
  - contém os arquivos relacionados ao Banco de Dados.
    - database.sqlite: Banco de Dados SQLite
    - connection.ts: Iniciar a conexão com o banco
    - pasta Migrations: Arquivos de criaçao de tabelas gerados utilizando a biblioteca "typeorm"
- "src/errors"
  - Contém os arquivos necessários para tratamento de erros
- "src/helpers"
  - Contém as funções "globais" da API





