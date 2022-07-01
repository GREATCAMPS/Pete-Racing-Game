const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const btn = document.querySelector(".btn");
const resultsDisplay = document.querySelector(".results");

const redCar = document.querySelector(".red");
const blueCar = document.querySelector(".blue");

let bluePos = 10; 
let redPos = 10;

const finishLine = canvas.width - 10;

let running = false;

let redA = true;
let blueJ = true;

//Animation code

let blueImg = new Image();
blueImg.src = "blue car(1).png";

let redImg = new Image();
redImg.src = "red car(1).png";

const numColumns = 15;
const numRows = 1;

const frameWidth = blueImg.width / numColumns;
const frameHeight = blueImg.height / numRows;
const maxFrame = numColumns * numRows -1;

let currentFrame = 0;

const speed = 5;

setInterval(draw, 33);

document.addEventListener('keypress', move);

function draw(){
    currentFrame++;

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if(currentFrame > maxFrame){
        currentFrame = 0;
    }

    let column = currentFrame % numColumns;

    ctx.drawImage(blueImg, column * frameWidth, 0, frameWidth, frameHeight, bluePos, 7, frameWidth, frameHeight );
    ctx.drawImage(redImg, column * frameWidth, 0, frameWidth, frameHeight, redPos, 46, frameWidth, frameHeight );
}

btn.addEventListener('click', start);

function start(){
    running = true;
    redPos = 10;
    bluePos = 10;
    resultsDisplay.innerHTML = "GO!";
}

function move(event){
    if(!running){
        return;
    }

    if(event.key == 'a'){
        if(redA){
            redPos += speed;
            redA = false;
        }
    }
    else if(event.key == 's'){
        if(!redA){
            redPos += speed;
            redA = true;
        }
    }
    else if(event.key =='j'){
        if(blueJ){
            bluePos += speed;
            blueJ = false;
        }
    }
    else if(event.key =='k'){
        if(!blueJ){
            bluePos += speed;
            blueJ = true;
        }
    }

    detectWin();
}

function detectWin(){
    if(redPos > finishLine){
        resultsDisplay.innerHTML = "Red wins!";
        running = false;
    }
    else if(bluePos > finishLine){
        resultsDisplay.innerHTML = "Blue wins!";
        running = false;
    }
}