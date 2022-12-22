const wordArray = ["Web Developer", "Machine Learning Engineer", "Industrial and Systems Engineer"];

const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

let wordArrayIndex = 0;
let letterIndex = 0;

const typyingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

//typing function

function type() {
    if (letterIndex < wordArray[wordArrayIndex].length) {

        if (!cursor.classList.contains("typing")) {
            cursor.classList.add("typing")
        }


        typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typyingDelay)
    }else {
        cursor.classList.remove("typing")
        setTimeout(erase, newWordDelay)
    }
}

//erase function

function erase() {
    if (letterIndex > 0) {
        if (!cursor.classList.contains("typing")) {
            cursor.classList.add("typing")
        }
        typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex - 1)
        letterIndex--
        setTimeout(erase, erasingDelay)
    }
    else {
        cursor.classList.remove("typing")
        wordArrayIndex++;
        if (wordArrayIndex >= wordArray.length) {
            wordArrayIndex = 0;
        }
        setTimeout(type, typyingDelay)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newWordDelay)
})


