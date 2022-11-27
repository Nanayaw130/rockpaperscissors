const buttons=document.querySelectorAll('.pick')
const scoreEl=document.getElementById('score');
const selection=document.getElementById('selection');
const main=document.getElementById('main');
const reset=document.getElementById('reset');
const user_select=document.getElementById('user_select');
const comp_select=document.getElementById('comp_select');
const winner=document.getElementById('win');



//modal buttons
const openBtn=document.getElementById('open');
const closeBtn=document.getElementById('close');
const modal=document.getElementById('modal');

const choices=[ 'paper','rock','scissors'];
let score=0;
let userChoice=undefined;

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        userChoice = button.getAttribute('data-choice');
        
        checkWinner();
    })
});

reset.addEventListener('click',()=>{
    main.style.display='flex';
    selection.style.display='none';

})

openBtn.addEventListener('click',()=>{
    modal.style.display='flex';

})

closeBtn.addEventListener('click',()=>{
    modal.style.display='none';

})

function updateScore(value){
    score+=value;
     scoreEl.innerText = score;
}

function randomChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}


function checkWinner(){
    const compChoice=randomChoice();
    updateSelection(user_select,userChoice);
    updateSelection(comp_select,compChoice);

    if (userChoice === compChoice){
    winner.innerText='draw';
    }
   else if(
    (userChoice === 'paper' && compChoice === 'rock') ||
   (userChoice === 'rock' && compChoice) === ('scissors') || (userChoice === 'scissors' && compChoice === 'paper'))
   {
    updateScore(1);
    winner.innerText='Won'
   }
   else{
    updateScore(-1);
    winner.innerText='Lost'
   }
    main.style.display='none';
    selection.style.display='flex';
}


function updateSelection(selectionEl,choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');
    const img=selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src=`./images/icon-${choice}.svg`;
    img.alt=choice;
}

