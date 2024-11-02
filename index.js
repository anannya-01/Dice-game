let randomNumber1 = Math.floor(Math.random() * 6) + 1 ; // 1-6

let randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1 - dice6

let randomDiceSRC1 = "images/" + randomDiceImage1; //.images/dice1 - ./images/dice6

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomDiceSRC1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImageSRC2 = "images/dice" + randomNumber2 + ".png"; // //.images/dice1 - ./images/dice6 , done in one line

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSRC2); 

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){ 
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Aw, a draw!";
}
