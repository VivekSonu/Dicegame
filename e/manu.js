//declaring variables
var cDate = new Date();
var day   = cDate.getDate();
var month = cDate.getMonth()+1;
var year  = cDate.getFullYear();
var p3 = day + "/" + month + "/" + year ;
var cTime = new Date();
var hour  = cTime.getHours();
var min   = cTime.getMinutes();
var p4    = hour + ":" + min ;
var globalScore ;
var currentplayer , winningScore , playing;
var newscore ,flag = 0;
var p1,p2;
function call(){
    winningScore  = document.getElementById('input').value ;
    p1=prompt("Enter Player1 Name");
    p2=prompt("Enter Player2 Name");
   }
function again(){
    window.open("game.html");
}   
function front(){
    window.open("front.html");
}   

init();
//function of "roll" button

document.querySelector(".btn-roll").addEventListener("click" , function() {
    if(playing){
    var dice = Math.floor(Math.random() * 6 ) + 1;
    var outcome=document.querySelector(".dice")
    outcome.style.display = "block";
    outcome.src ="dice-" + dice + ".png";
    var dice2 = Math.floor(Math.random() * 6 ) + 1;
    var outcome2=document.querySelector(".dice2")
    outcome2.style.display = "block";
    outcome2.src ="dice-" + dice2 + ".png";
    if(dice !== 1 && dice2 !== 1)
    {   
         newscore = newscore + dice + dice2; 
        document.getElementById('current-' + currentplayer).innerHTML = newscore;
    }
    else{
        nextPlayer();
        }}

})
//function of "hold" button
document.querySelector('.btn-hold').addEventListener("click" , function(){
    if(playing){
       globalScore[currentplayer] += newscore ;
       document.getElementById('score-' + currentplayer).textContent = globalScore[currentplayer];
       if(globalScore[currentplayer] >= winningScore)
       {
           document.getElementById('name-' + currentplayer).innerHTML = "Winner!"
           document.querySelector(".dice").style.display = "none";
           document.querySelector(".dice2").style.display = "none";
           document.querySelector('.player-' + currentplayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + currentplayer + '-panel').classList.remove('active');
           playing = false ;
           document.getElementById('input3').value = p1;
           document.getElementById('input4').value = p2;
           document.getElementById('input5').value = p3;
           document.getElementById('input6').value = p4;
           if(currentplayer == 0)
           document.getElementById('input2').value = "player1";
           else
           document.getElementById('input2').value = "player2";
           
           
       }
        else 
        {
       nextPlayer();
        } 
    }})
//passing control to other player
function nextPlayer(){
    currentplayer === 0 ? currentplayer = 1 : currentplayer = 0;
    newscore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active')  ;
    document.querySelector('.player-1-panel').classList.toggle('active')  ;
    
}
//function of "new game" button
document.querySelector('.btn-new').addEventListener('click' , init );
//initialising 
function init(){
 globalScore = [0,0]
 currentplayer = 0;
 newscore = 0;
 playing = true;
 document.getElementById('score-0').innerHTML = "0";
 document.getElementById('score-1').innerHTML = "0";
 document.getElementById('current-0').innerHTML = "0";
 document.getElementById('current-1').innerHTML = "0";
 document.querySelector(".dice2").style.display = "none";
 document.querySelector(".dice").style.display = "none";
 document.getElementById('name-1').innerHTML = 'player2';
 document.getElementById('name-0').innerHTML = 'player1';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
}