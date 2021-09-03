

// let numberOfFaces = prompt('How many faces to start with?');
let numberOfFaces = 0;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');
let counter = 0;


function getNumberOfFaces() {
    let userInput = prompt('how many faces?');
    numberOfFaces = Number.parseInt(userInput, 10);
    if (numberOfFaces === null) {
        alert('game has been canceled');
    } else if (numberOfFaces === NaN) {
        numberOfFaces = prompt('please enter a number');
    }
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
    console.log(theRightSide);

    theLeftSide.lastChild.addEventListener('click', nextLevel);

    theLeftSide.addEventListener('click', gameOver);
}



function nextLevel() {
    event.stopPropagation();
    numberOfFaces += 3;
    counter += 1;
    console.log(counter);

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    generateFaces();


}

function gameOver() {
    alert('Game Over! You did this ' + counter + ' times');
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    numberOfFaces = 3;
    counter = 0;

}

