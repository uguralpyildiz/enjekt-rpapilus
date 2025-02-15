
window.addEventListener('scroll', function () {
    var nav = document.querySelector(".sticky-fun"); 
    if (window.scrollY > 150) {
        nav.style.background = "#111111";
    } else {
        nav.style.background = ""; 
    }
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


    window.addEventListener('scroll', function () {
                var scroll = window.scrollY;
    var hero = document.querySelector('.hero');

    var transformValue = 'translate3d(0, ' + (scroll / 75) + '%, 0) scale(' + (75 + scroll / 75) / 75 + ')';
    hero.style.transform = transformValue;
            });




const text = document.querySelector('.typing-text');


const words = [
    "Sonunda Aradığın Ajansı Buldun"
];


setTyper(text, words);

function setTyper(element, words) {

    const LETTER_TYPE_DELAY = 60;
    const WORD_STAY_DELAY = 5000;

    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    var direction = DIRECTION_FORWARDS;
    var wordIndex = 0;
    var letterIndex = 0;

    var wordTypeInterval;

    startTyping();

    function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
        const word = words[wordIndex];

        if (direction == DIRECTION_FORWARDS) {
            letterIndex++;

            if (letterIndex == word.length) {
                direction = DIRECTION_BACKWARDS;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, WORD_STAY_DELAY);
            }

        } else if (direction == DIRECTION_BACKWARDS) {
            letterIndex--;

            if (letterIndex == 0) {
                nextWord();
            }
        }

        const textToType = word.substring(0, letterIndex);

        element.textContent = textToType;
    }

    function nextWord() {

        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex == words.length) {
            wordIndex = 0;
        }

    }
}

const loading = document.querySelector(".overlay-loading")


setTimeout(() => {
    loading.style.top = "-150%";
    setTimeout(() => {
        loading.style.display = "none"; 
    }, 6500);
    
}, 3000);