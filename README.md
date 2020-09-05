## Requirements

é necessário ter node e mongodb instalados.

## Project setup
```
yarn install
```

### Run
```
yarn start
```

### Endpoints

POST
```
/api/auth/signup - cadastro de usuários
```

POST
```
/api/auth/signin - login de usuário
```

GET
```
/api/address/search/:cep - endpoint público que retorna endereço baseado no cep passado como parâmetro
```

POST
```
/api/address - cadastro de ceps
```

GET
```
/api/address/all - listagem de endereços do usuário logado
```
