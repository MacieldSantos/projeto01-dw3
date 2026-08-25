# 🌐 Projeto 01 — Desenvolvimento Web III

Aplicação web desenvolvida para a disciplina de **Desenvolvimento Web III** do curso de **Desenvolvimento de Software Multiplataforma — FATEC**.

O projeto tem como objetivo aplicar os conceitos estudados em aula sobre **Node.js, servidor HTTP, callbacks, rotas, leitura de arquivos HTML, CSS e PDF**, utilizando apenas módulos nativos do Node.js e **sem framework**.

---

## 👨‍💻 Integrantes

### Maciel dos Santos

Estudante do curso de **Desenvolvimento de Software Multiplataforma — FATEC**.

### Integrante 2

A definir.

---

## 🎯 Objetivo do projeto

Desenvolver uma aplicação web de apresentação pessoal dos integrantes da equipe utilizando os conceitos apresentados nos projetos:

- `app01.js` — criação do servidor HTTP;
- `app02.js` — utilização de função callback;
- `app03.js` — criação de rotas/endpoints;
- `app04.js` — leitura e disponibilização de arquivos.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- HTML5
- CSS3
- Módulo `http`
- Módulo `url`
- Módulo `fs`
- Git
- GitHub

---

## 🌐 Rotas da aplicação

| Rota | Descrição |
|---|---|
| `/` | Página inicial |
| `/maciel` | Página pessoal do Maciel |
| `/maciel/sobre` | Apresentação pessoal |
| `/maciel/curriculo` | Currículo em PDF |
| `/projeto` | Documentação do projeto |
| `/css/estilo.css` | Folha de estilos |
| Outras rotas | Página de erro 404 |

As rotas do segundo integrante serão acrescentadas após a definição da dupla.

---

## 📁 Estrutura do projeto

```text
Projeto01-DW3/
│
├── app.js
├── index.html
├── erro404.html
├── .gitignore
│
├── css/
│   └── estilo.css
│
├── maciel/
│   ├── index.html
│   ├── sobre.html
│   └── curriculo_Maciel.pdf
│
└── projeto/
    └── projeto.html
```

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/MacieldSantos/projeto01-dw3.git
```

### 2. Entre na pasta do projeto

```bash
cd projeto01-dw3
```

### 3. Execute o servidor

```bash
node app.js
```

### 4. Abra no navegador

```text
http://localhost:3000/
```

O servidor utiliza a porta **3000**.

---

## 🔗 Repositório

[🔵 Acessar o projeto no GitHub](https://github.com/MacieldSantos/projeto01-dw3)

---

## 📚 Conceitos aplicados

O projeto utiliza os módulos nativos do Node.js:

```javascript
const http = require('http');
const url = require('url');
const fs = require('fs');
```

O módulo `http` é responsável pelo servidor web, o módulo `url` permite identificar as rotas acessadas e o módulo `fs` realiza a leitura dos arquivos utilizados pela aplicação.

O servidor identifica a rota solicitada e disponibiliza o arquivo correspondente ao navegador.

Fluxo simplificado:

```text
Navegador
    ↓
Servidor Node.js
    ↓
URL
    ↓
Rota / Endpoint
    ↓
fs.readFile()
    ↓
HTML / CSS / PDF
    ↓
Navegador
```

---

## 📄 Documentação

A documentação completa do projeto será disponibilizada através da rota:

```text
/projeto
```

Na versão final, essa rota disponibilizará um arquivo **PDF** contendo a documentação exigida para o Projeto 01.

---

## 🚧 Status do projeto

**Em desenvolvimento.**

A estrutura individual do primeiro integrante já está implementada. As informações do segundo integrante e a documentação definitiva serão adicionadas antes da entrega.

---

## 🎓 Informações acadêmicas

**Curso:** Desenvolvimento de Software Multiplataforma  
**Disciplina:** Desenvolvimento Web III  
**Professor:** Vinícius Heltai Pacheco  
**Instituição:** FATEC  
**Projeto:** Projeto 01  
**Ano:** 2026
