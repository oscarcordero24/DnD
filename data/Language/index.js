
const letterBox = document.querySelector('.container .letter-box');
const myButton = document.getElementById('my-button');
const myTextBox = document.getElementById('input-txtb');
const inputString = document.querySelector('.input-string span');
const letterMap = {
    "a": "Letter_A.png",
    "b": "Letter_B.png",
    "c": "Letter_C.png",
    "d": "Letter_D.png",
    "e": "Letter_E.png",
    "f": "Letter_F.png",
    "g": "Letter_G.png",
    "h": "Letter_H.png",
    "i": "Letter_I.png",
    "j": "Letter_J.png",
    "k": "Letter_K.png",
    "l": "Letter_L.png",
    "m": "Letter_M.png",
    "n": "Letter_N.png",
    "o": "Letter_O.png",
    "p": "Letter_P.png",
    "q": "Letter_Q.png",
    "r": "Letter_R.png",
    "s": "Letter_S.png",
    "t": "Letter_T.png",
    "u": "Letter_U.png",
    "v": "Letter_V.png",
    "w": "Letter_W.png",
    "x": "Letter_X.png",
    "y": "Letter_Y.png",
    "z": "Letter_Z.png",
    " ": "Letter_Space.png",
    ".": "Letter_Period.png"
}

myButton.addEventListener('click', function() {
    letterBox.innerHTML = '';
    let sentence = myTextBox.value.split('');
    sentence.forEach(letter => {
        let inputLetter = translateLetter(letter);
        let imagePath = createImagePath(inputLetter);

        addWordToTextBox(imagePath);
    });
    inputString.textContent = myTextBox.value;
    myTextBox.value = '';
})

function translateLetter(letter){
    return letterMap[letter.toLowerCase()];
}

function createImagePath(imageName){
    return "Elvish/" + imageName; 
}

function addWordToTextBox(imagePath){

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newImage = document.createElement('img');
    newImage.src = imagePath;

    newCard.appendChild(newImage);
    letterBox.appendChild(newCard);
}

function checkWordAmount(){
    let divWidth = letterBox.offsetWidth;
    let cardWidth = letterBox.childNodes[0].offsetWidth;
    let lettersPerRow = divWidth / cardWidth;

    let wordsList = myTextBox.value.split(' ');
    
    /* letterBox.childNodes.forEach(element => {
        console.log(element.firstChild.getAttribute('src'));
    }); */
}
