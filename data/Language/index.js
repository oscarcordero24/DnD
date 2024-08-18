
const letterBox = document.querySelector('.container .letter-box');
const myButton = document.getElementById('my-button');
const myTextBox = document.getElementById('input-txtb');
const inputString = document.querySelector('.input-string span');
const symLetterList = document.querySelectorAll('.symbol .keyboard .card');
const symButton = document.getElementById('translate-sym');
const deleteButton = document.getElementById('delete-sym');
const symTranslateResult = document.querySelector('.result-string span');
const elvishToCommon = document.getElementById('elvish-common');
const commonToElvish = document.getElementById('common-elvish');
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

elvishToCommon.addEventListener('click', function(){
    document.querySelector('.container .input').classList.add('hidden');
    document.querySelector('.container .symbol').classList.remove('hidden');
});

commonToElvish.addEventListener('click', function(){
    document.querySelector('.container .input').classList.remove('hidden');
    document.querySelector('.container .symbol').classList.add('hidden');
});

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
});

symLetterList.forEach(sym => {
    sym.addEventListener('click', function(){
        let letterPath = sym.childNodes[1].getAttribute('src');
        addWordToTextBox(letterPath);
    })
});

deleteButton.addEventListener('click', function(){
    if (letterBox.childNodes.length != 1){
        letterBox.removeChild(letterBox.lastChild);
    }
});

symButton.addEventListener('click', function(){
    translateSymbol();
});

function translateLetter(letter){
    return letterMap[letter.toLowerCase()];
};

function translateSymbol(){
    let outputString = '';
    for (let i = 1; i < letterBox.childNodes.length; i++){
        let letterPath = letterBox.childNodes[i].firstChild.getAttribute('src').split('/')[1];

        for (let key in letterMap){
            if (letterPath == letterMap[key]){
                outputString += key;
            }
        }
    }
    symTranslateResult.textContent = outputString;
};

function createImagePath(imageName){
    return "Elvish/" + imageName; 
};

function addWordToTextBox(imagePath){

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newImage = document.createElement('img');
    newImage.src = imagePath;

    newCard.appendChild(newImage);
    letterBox.appendChild(newCard);
};

function checkWordAmount(){
    let divWidth = letterBox.offsetWidth;
    let cardWidth = letterBox.childNodes[0].offsetWidth;
    let lettersPerRow = divWidth / cardWidth;

    let wordsList = myTextBox.value.split(' ');
    
    /* letterBox.childNodes.forEach(element => {
        console.log(element.firstChild.getAttribute('src'));
    }); */
};
