![alt text](https://github.com/goomerdev/job-dev-backend-interview/raw/master/media/logo-azul.png "Goomer")



## Challenge - Developer Backend



## Projeto



Projeto Node.js utilizando Typescript



### Scripts iniciais

a Configuração inicial deve ser feita com os seguintes comandos

- "yarn install"
  - Efetuar a instalação de todas as dependências declaradas no arquivo "package.json"
- "yarn typeorm migration:run"
  - Executar os scripts para criação das tabelas do Banco de Dados
- "yarn dev"
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

### Estrutura

- "src/database"
  - contém os arquivos relacionados ao Banco de Dados.
    - database.sqlite: Banco de Dados SQLite
    - connection.ts: Iniciar a conexão com o banco
    - pasta Migrations: Arquivos de criaçao de tabelas gerados utilizando a biblioteca "typeorm"
- "src/models"
  - Contém o modelo das tabelas do Banco de Dados, detalhando os campos e os tipos de cada campo
- 





