

// let numberOfFaces = prompt('How many faces to start with?');
//let numberOfFaces = 0;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');
let counter = 0;
let counterMessage = document.getElementById('counter-message');
let gameOverMessage = document.querySelector('#game-over');
let difficultyValue = document.querySelector('#difficulty');
let increment = '';
let numberOfFaces;
let highScore = 0;
let highScoreMessage = document.querySelector('#high-score-message');


function getNumberOfFaces() {
    let numberSelected = document.querySelector('#face-number').value;
    numberOfFaces = Number.parseInt(numberSelected, 10);
    gameOverMessage.innerHTML = '';
    // let userInput = prompt('how many faces?');
    // numberOfFaces = Number.parseInt(userInput, 10);
    // if (userInput === null) {
    //     alert('game has been canceled');
    //     return;
    // } else if (userInput === NaN) {
    //     numberOfFaces = prompt('please enter a number');
    // }
    increment = difficultyValue.value;
    console.log(increment);
    generateFaces();
}

function generateFaces() {


    for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'img/smile.png';
        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);

    theRightSide.appendChild(leftSideImages);
    //console.log(theRightSide);

    theLeftSide.lastChild.addEventListener('click', nextLevel);

    theLeftSide.addEventListener('click', gameOver);
}



function nextLevel() {
    event.stopPropagation();

    if(increment === 'easy'){
        numberOfFaces +=2;
    } else if(increment === 'normal'){
        numberOfFaces +=3;
    } else if(increment === 'hard') {
        numberOfFaces += 4;
    }

    //numberOfFaces += 3;
    counter += 1;
    //console.log(counter);

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    generateFaces();

    counterMessage.innerHTML = `You have guessed right ${counter} times!`;
    
}

function gameOver() {
    //alert('Game Over! You did this ' + counter + ' times');
    gameOverMessage.innerHTML = 'GAME OVER';

    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    if(counter > highScore){
        highScore = counter;
        highScoreMessage.innerHTML = `New high score of ${highScore}`;
    } else {
        highScoreMessage.innerHTML = `High score is ${highScore}`;
    }

    


    counter = 0;

}

