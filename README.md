<h1 align="center">Blog API</h1>

Este projeto consiste no desenvolvimento de uma API e de um banco de dados para gerar conteúdo para um blog. A aplicação foi construída utilizando Node.js e o pacote Sequelize para implementar as operações CRUD de posts.

A API oferece endpoints conectados ao banco de dados que seguem os princípios do REST. Para criar um post, é necessário que o usuário esteja autenticado, o que implica na criação e gerenciamento da relação entre usuário e post.

Além disso, é necessário associar categorias aos posts, o que implica na criação e gerenciamento da relação entre categorias e posts.

<h2>Stack utilizada</h2>

Back-end: `Node`, `Express`, `Javascript`, `JWT`, `Sequelize`, `MySQL2`, `Docker`

<h2>🐋 Rodando no Docker</h2>

Para executar o serviço Node, utilize o comando `docker-compose up -d`

Esse serviço ira inicializar um container chamado `trybers_and_dragons`. A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code. Use o comando `docker exec -it trybers_and_dragons bash`.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano. Instale as dependências "Caso existam" com `npm install`

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

<details>
  <summary><strong>🤷🏽‍♀️ Foram encontradas 2 possíveis soluções para este problema:</strong></summary><br />

- Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.

- Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.
</details>

<h1 align="center">Documentação da API</h1>

**Login na aplicação**

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email`     | `string`   | **Obrigatório no body**. Email cadastrado no banco de dados |
| `password`  | `string`   | **Obrigatório no body**. Password cadastrado no banco de dados |

**Criar um user**

```http
  POST /user
```

| Parâmetro    | Tipo     | Descrição                                   |
| :----------  | :------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório no body**. Email para cadastrar |
| `displayName`| `string` | **Obrigatório no body**. Nome de exibição para cadastrar |
| `image`      | `string` | **Obrigatório no body**. Imagem para cadastrar |
| `password`   | `string` | **Obrigatório no body**. Password para cadastrar |

**Criar categorias**

```http
  POST /categories
```

| Parâmetro      | Tipo       | Descrição                                   |
| :------------- | :--------- | :------------------------------------------ |
| `Authorization`| `string` | **Obrigatório no Header**. Key Recebida no login ou na hora de criar um usuario |
| `name`         | `string` | **Obrigatório no body**. Name existentes no banco de dados |

**Criar postagens**

```http
  POST /post
```

| Parâmetro      | Tipo     | Descrição                                   |
| :------------- | :------- | :------------------------------------------ |
| `Authorization`| `string` | **Obrigatório no Header**. Key Recebida no login ou na hora de criar um usuario |
| `title`        | `string` | **Obrigatório no body**. title da postagem  |
| `content`      | `string` | **Obrigatório no body**. Content da postagem |
| `categoryIds`  | `number` | **Obrigatório no body**. CategoryIds id da catecoria |

**Pegar post**

```http
  GET /post
  GET /post/:id
  GET /post/search
```

**Pegar categorias**

```http
  GET /categories
```

**Pegar usuario**

```http
  GET /user
  GET /user/:id
```

**Atualizar post**

```http
  PUT /post/:id
```

**Atualizar usuario**

```http
  PUT /user/:id
```

**Deletar post**

```http
  DELETE /delete/:id
```

**Deletar usuario**

```http
  DELETE /user/me
```

Qualquer duvida entre em contato comigo:

E-mail: higor.maranhao2000@gmail.com

Linkedin: https://www.linkedin.com/in/higor-maranhao/
