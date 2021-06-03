var jogadorNome;
var computadorEscolha;
var jogadorEscolha;

//SORTEIA ENTRE 2 NUMEROS.
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogar(escolha) {
    jogadorEscolha = escolha;
}



function jogar(escolha) {
    computadorEscolha = sortear(1, 3);
   
}

//Exibe mensagem na caixa de mensagem.
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

//Definir nome do jogador.
function nome(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
    
}




// Calcula e retorna quem ganhou.
// 0 - Empate
// 1 - Jogador
// 2 - Computador


// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

function calcularEscolha(jogador, computador) {
        if (jogador == 1 && computador == 1){
            return 0;}
        else if (jogador == 1 && computador == 2) {
            return 2;}
        else if (jogador == 1 && computador == 3) {
            return 1}

        if (jogador == 2 && computador == 1){
            return 1;}
        else if (jogador == 2 && computador == 2) {
            return 0;}
        else if (jogador == 2 && computador == 3) {
            return 2;}
        
        if (jogador == 3 && computador == 1){
            return 2;}
        else if (jogador == 3 && computador == 2) {
             return 1;}
        else if (jogador == 3 && computador == 3) {
            return 0;}

        }
        



var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

if (ganhador == 0) {
    mensagem('empate');
}

if (ganhador == 1) {
    mensagem('jogador');
}
if (ganhador == 3) {
    mensagem('computador');
}


document.getElementById('jogador-escolha-1').onclick = function() { jogar(1) };

document.getElementById('jogador-escolha-2').onclick = function() { jogar(2) };

document.getElementById('jogador-escolha-3').onclick = function() { jogar(3) };

jogadorNome = prompt('Qual o seu nome Desafiante?');

mensagem('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima ...');

 nome(jogadorNome);