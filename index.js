// WHEN A PLAYER INPUTS 'ROCK', 'PAPER' OR 'SCISSORS'- CALLED playerSelection
// COMPUTER RANDOMLY CHOOSES FROM 'ROCK', 'PAPER' OR 'SCISSORS' - CALLED computerPlay & computerSelection
// RESULT IS THEN SHOWN WITH MESSAGE
// RESULT IS DETERMINED BY; ROCK>SCISSORS>PAPER, ROCK<PAPER<SCISSORS, ROCK=ROCK, PAPER=PAPER, SCISSORS=SCISSORS
// PLAY 5 GAMES
// SHOWING RESULTS OF EACH ROUND



const computerDisplay=document.getElementById('computer-choice')
const playerDisplay=document.getElementById('player-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice=e.target.id
    playerDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))
function    generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3) +1
    if (randomNumber=== 1){
        computerChoice ='Rock'
    }
    if (randomNumber=== 2){
        computerChoice ='Paper'
    }
    if (randomNumber=== 3){
        computerChoice ='Scissors'
    }
    computerDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice===userChoice)
    {result='Its a Draw'}
    if(computerChoice=== 'Rock' && userChoice=== 'Scissors')
    {result='You Lose'}
    if(computerChoice=== 'Rock' && userChoice==='Paper')
    {result='you win'}
    if(computerChoice=== 'Paper' && userChoice==='Rock')
    {result='You lose'}
    if(computerChoice=== 'Paper' && userChoice==='Scissors')
    {result='You win'}
    if(computerChoice=== 'Scissors' && userChoice==='Rock')
    {result='You win'}
    if(computerChoice=== 'Scissors' && userChoice==='Paper')
    {result='You lose'}
    resultDisplay.innerHTML=result


}