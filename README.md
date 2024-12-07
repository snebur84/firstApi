## First API

# Instalar pacotes a aplicação:

``` bash
npm install typescript ts-node @types/node mongodb mongodb-memory-server
```

# Configurando o TypeScript
``` bash
npx tsc --init
```

# Inicializando a aplicação

``` bash
npm run start
```

###### ROTA POST

- **POST /usuarios**: Insere um usuário

# Exemplo de body da Request:
``` Json
{
    "nome": "Rubens Lemos",
    "email": "rlemos@crcttec.com.br",
    "telefone": "3198765432"
}
```
# Exemplo de resposta:
``` Json
{
    "message": "Usuário cadastrado com sucesso",
    "userId": "6754c53a8d3d359230670ef0"
}
```

###### ROTA GET

# Exemplo de resposta:
``` Json
[
    {
        "_id": "6754c53a8d3d359230670ef0",
        "nome": "Camila Lemos",
        "email": "camila@crcttec.com.br",
        "telefone": "3134567890",
        "data_cadastro": "2024-12-07T21:59:22.550Z"
    },
    {
        "_id": "6754c5ae8d3d359230670ef1",
        "nome": "Rubens Lemos",
        "email": "rlemos@crcttec.com.br",
        "telefone": "31987465321",
        "data_cadastro": "2024-12-07T22:01:18.198Z"
    }
]
```