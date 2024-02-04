let randomnumber1, randomnumber2;
randomnumber1 = Math.floor(Math.random() * 6) + 1;
randomnumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('#Dice_Player1').setAttribute('src', `images/dice${randomnumber1}.png`);
document.querySelector('#Dice_Player2').setAttribute('src', `images/dice${randomnumber2}.png`);

if(randomnumber1 > randomnumber2){
    document.querySelector('.Dice--Title').innerHTML = "🚩Player 1 Wins";
}else if(randomnumber1 == randomnumber2){
    document.querySelector('.Dice--Title').innerHTML = "Draw";
}else{
    document.querySelector('.Dice--Title').innerHTML = "Player 2 Wins🚩";
}