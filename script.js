let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
// const scorecount=document.querySelector(".score")
const winUserScore=document.querySelector("#user-score");
const winCompScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["Rock","Paper","Scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];

}
const drawGame=()=>{
    // console.log("The game Is Draw");
    msg.innerText="The Game Was Draw ! Play Again";
    msg.style.backgroundColor=" #081b31"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        winUserScore.innerText=userScore;
        // console.log("You Win!")
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }else{
        // console.log("You lose!")
        compScore++;
        winCompScore.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}

const gameplay=(userChoice)=>{
    console.log("User Choice =",userChoice)
    //now we generate computer choice line num 4
    let compChoice=genCompChoice();
    console.log("Comp Choice =",compChoice);
    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"?false:true;
        }else if(userChoice==="Paper"){
            userWin=compChoice==="Scissor"?false:true;
        }else{
            userWin=compChoice==="Rock"?false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
     gameplay(userChoice);
    })
})