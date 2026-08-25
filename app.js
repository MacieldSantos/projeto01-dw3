//Teste
//console.log("Projeto 01 - Desenvolvimento Web III");
/*
FATEC - Desenvolvimento Web III
Projeto 01

Nome: Maciel dos Santos
Descrião: Aplicação web para apresentação pessoal.
*/

//Carregar os módulos necessários
const http = require('http');
const url = require('url');
const fs = require('fs');

// Função para ler um arquivo e enviar na resposta HTTP
function readFile(response, file) {

    fs.readFile(file, function(err, data){

        if (err) {
            console.log("ERRO AO ABRIR:", file);
            console.log(err);
            response.end("Erro ao abrir o arquivo: " + file);
        }
        else {
            console.log("Arquivo aberto com sucesso:", file);
            response.end(data);
        }
    });
    
}
// Função Callback para utilizar no servidor HTPP
var callback = function(request, response) {

    // Faz o parse da URL
    var parts = url.parse(request.url);

    // Rota principal
    if (parts.path == "/") {

        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "index.html");
    }
    
    // Rota do currículo do Maciel
    else if (parts.path == "/maciel/curriculo") {

        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "maciel/curriculo_Maciel.pdf")
    }

    else if (parts.path == "/integrante2/curriculo") {

        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "integrante2/curriculo_integrante2.pdf")
    }

    // Rota não encontrada
    else{
        
        response.writeHead(404, {"Content-type": "text/html"});
        response.end("Erro 404 - Página não encontrada.");
    }
};

// Criar o servidor HTTP
var server = http.createServer(callback);

// Inicicar o servidor na porta 3000
server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/");

