let order = [];
let clickedOrder =  [];
let score = 0;

//0 - verde.
//1 - vermelho. 
//2 - amarelo. 
//3 - azul. 

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//Cria ordem aleatório de cores.
let shuffleOrder = () => {
    //Gera número de 0 a 3.
    let colorOrder = Math.floor(Math.random() * 4); 
    //Atribui o número ao próximo da ordem.
    order[order.length] = colorOrder; 
    clickedOrder = [];

    //Acende a ordem gerada aleatoriamente.
    for(let i in order) {   
        let elementColor = createColorElement(order[i])    
        lightColor(elementColor, Number(i) + 1);  
    }                         
}

//Acende o elemento em sequência.
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });
}

//Checa se os botões clicados são os mesmos da ordem gerada

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.lenght == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário 
let click = (color) => {
    clickedOrder(clickedOrder.length) = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    },250);
}

//Função que retorna a cor 
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//Função para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}.\n Você perdeu o jogo. Clique em "OK" para iniciar novamente.`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função de início do jogo
let playGame = () => {
    window.document.alert("Bem vindo ao Genesis! Iniciando novo jogo");
    score = 0;

    nextLevel();
}

//Eventos de click para as cores
green.addEventListener("click", click(0));
red.addEventListener("click", click(1));
yellow.addEventListener("click", click(2));
blue.addEventListener("click", click(3));

//Início do jogo
playGame();

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
