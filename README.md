# geosampa-e2e
Testes end-to-end do portal geosampa

# objetivo
Pretendemos aqui com esse repositório criar um canal de comunicação com toda a sociedade, e principalmente, usuários do [Geosampa](http://geosampa.prefeitura.sp.gov.br) que queiram relatar um problema ou sugerir uma atualização. Mas sobretudo faz parte de uma estratégia de disponibilizar o SIG da cidade em código aberto, dando mais transparência aos dados, sistemas e processos da Prefeitura do Município de São Paulo comprometida com o princípio de governo aberto.

## Pré-requisito
[Nodejs](https://nodejs.org/)

## Setup
```bash
# clone o repositório
git clone https://github.com/geoinfo-smdu/geosampa-e2e.git

# instale as dependências
cd geosampa-e2e
npm i

# inicie em modo de linha de comando
npm run test:run

# inicie em modo de desenvolvimento (com browser e cypress)
npm run test:open
```