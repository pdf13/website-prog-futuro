<h1 align=center>
{ Programadores do Futuro }
<br/>
<br/>
<img src="https://img.shields.io/github/issues/pdf13/website-prog-futuro.svg"/>
<img src="https://img.shields.io/github/issues-pr/pdf13/website-prog-futuro.svg"/>
<img src="https://img.shields.io/node/v/pdf13/website-prog-futuro.svg"/>
</h1>
<p align="center">
  <a href="#configuração">Configuração</a> •
  <a href="#desenvolvimento">Desenvolvimento</a> •
  <a href="#execução">Execução</a>
</p>

### Status


### Configuração

A extensão depende de um ambiente configurado com o [Node.js](https://nodejs.org/en/) (_>=8_). Recomanda-se fortemente o uso do [nvm](https://github.com/creationix/nvm) (Node version manager) para a instalação do mesmo. Esse tutorial assume que o desenvolvimento é feito em um ambiente UNIX.

Após clonar o repositório, na pasta raiz, instale as dependências utilizando os comandos:

```bash
$ if hash yarn 2>/dev/null; then yarn; else npm install -g yarn && yarn; fi
```

### Desenvolvimento

O projeto usa o [Next.js](https://nextjs.org/) como framework. Ele por sua vez foi criado para aplicações [React.js](https://reactjs.org). Para iniciar o servidor em ambiente de desenvolvimento basta executar o seguinte comando:

```bash
$ yarn start
```

### Execução

Com o servidor ligado é possível visualizar o site no endereço [http://localhost:3000](http://localhost:3000). Cada modificação nos arquivos do código fonte são replicadas instantâneamente no navegador.
