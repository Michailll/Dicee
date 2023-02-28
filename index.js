let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
// let dice1 = document.getElementsByClassName("img1");

randomSrc1 = "images/dice" + random1 + ".png";
randomSrc2 = "images/dice" + random2 + ".png";
dice1.setAttribute("src", randomSrc1);
dice1.setAttribute("alt", random1.toString());
console.log("fff");
dice2.setAttribute("src", randomSrc2);
dice2.setAttribute("alt", random2.toString());

let h1 = document.querySelector(".container h1");
if (random1 > random2){
    h1.innerHTML = '😎 Player 1 Wins!';
} else if (random2 > random1){
    h1.textContent = "Player 2 Wins! 😎";
} else {
    h1.textContent = "Draw!";
}
