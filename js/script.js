const result = document.querySelector('.result');
const choiceHuman = document.querySelector('.choice-human span');
const choiceMachine = document.querySelector('.choice-machine span');

let scoreHuman = 0;
let scoreMachine = 0;

const machineChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

const humanChoice = (humanChoice) => {
    playGame(humanChoice, machineChoice())    

    setTimeout(() => {
    result.innerHTML = "";
}, 1000);  

}

const playGame = (human, machine) => {

    if(human === machine){
        result.innerHTML = "Deu empate!";
    } else if(
        human === 'rock' && machine === 'scissors' || 
        human === 'paper' && machine === 'rock' || 
        human === 'scissors' && machine === 'paper'
    ){
        scoreHuman++
        choiceHuman.innerHTML = scoreHuman;
        result.innerHTML = "Você ganhou!";
    } else {
        scoreMachine++
        choiceMachine.innerHTML = scoreMachine;
        result.innerHTML = "A alexia ganhou!";
    }
}

