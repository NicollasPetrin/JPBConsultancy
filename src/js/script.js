// Pedindo os dados ao usuario

var vinho = prompt("Digite o nome do vinho");
    if (vinho == ""){
        alert("O nome do vinho deve ser inserido !");
        var vinho = prompt("Digite o nome do vinho");
    }
var tipo = prompt("Digite o tipo do vinho");
    if (tipo == ""){
        alert("O tipo do vinho deve ser inserido !");
        var tipo = prompt("Digite o tipo do vinho");
    }
var ano = prompt("Digite o ano do vinho");
    if (ano == ""){
        alert("O ano do vinho deve ser inserido !");
        var ano = parseInt(prompt("Digite o ano do vinho"));
    }
var estoque = prompt("Digite a quantidade de vinho");
    if (estoque == ""){
        alert("O estoque do vinho deve ser inserido !");
        var vinho = parseInt(prompt("Digite a quantidade de vinho"));
    }

// mostrar que o cadastro esta realizado e cadastro no console

alert ("Cadastro realizado com sucesso");
alert ("A seguir, veja os detalhes no console !");
console.log ("nome do vinho : " + vinho);
console.log ("tipo do vinho : " + tipo);
console.log ("ano do vinho : " + ano);
console.log ("estoque do vinho : " + estoque);