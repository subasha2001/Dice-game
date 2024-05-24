let rNo1 = Math.floor(1 + (Math.random() * 6));
let randomDiceImage1 = "images/dice" + rNo1 + ".png";

let rNo2 = Math.floor(1 + (Math.random() * 6));
let randomDiceImage2 = "images/dice" + rNo2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(rNo1 > rNo2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(rNo1 < rNo2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}