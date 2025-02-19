
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



const texts = ['Front-end Developer', 'UI & UX Developer', 'React Developer'];
var count = 0;
var index = 0;
var decrement = 0;
var currentText = '';
var letter = '';

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const typeWrite = async () => {
    if (count == texts.length) {
        count = 0;
    }
    currentWord = texts[count];
    currentLetter = currentWord.slice(0, ++index);
    document.querySelector(".job-bar").textContent = currentLetter;
    if (index == currentWord.length) {
        await sleep(1500);
        while (index > 0) {
            currentLetter = currentWord.slice(0, --index);
            document.querySelector(".job-bar").textContent = currentLetter;
            await sleep(50);
        }
        count++;
        index = 0;
        await sleep(500);
    }
    setTimeout(typeWrite, Math.random() * 200 + 50);
}
typeWrite();

const downloadCv = document.querySelector("#downloadCv");
const downloadText = document.querySelector(".download-text");
const spinnerAnim = document.querySelector(".spinner-anim");

downloadCv.addEventListener("click", () => {
    downloadText.style.top = "-100px";
    downloadCv.style.pointerEvents = "none";
    setTimeout(() => {
        downloadCv.innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
    }, 250);

    setTimeout(() => {
        downloadCv.innerHTML = '<span class="download-text"><i class="fa-solid fa-check"></i>Thank you</span>'
    }, 2500);

    setTimeout(() => {
        downloadCv.innerHTML = '<span class="download-text"><i class="fa-solid fa-file-arrow-down"></i>Download CV</span>'
        downloadCv.style.pointerEvents = "auto";
    }, 7000);
})



const nthAll = document.querySelectorAll("#nth a");
const dotLinkEffect = document.querySelector(".dot-link-effect");

function removeAllClass_fromNth() {
    const nthAll = document.querySelectorAll("#nth a");
    for (let i = 0; i < nthAll.length; i++) {
        dotLinkEffect.classList.remove("active" + i)
    }
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("click", () => {
        removeAllClass_fromNth()
        dotLinkEffect.classList.add("active" + i)
    })
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("mouseover", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = ".30"
        }
        nthAll[i].style.opacity = "1"
    })

    nthAll[i].addEventListener("mouseout", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = "1"
        }
    })
}

const menuBtn = document.querySelector(".menu-btn");
const overlaym = document.querySelector(".overlay-menu");
const navbarLinksM = document.querySelector(".nav-links");
const navLinkContainer = document.querySelector(".nav-link-container");
const downloadBtn = document.querySelector(".download-cv");


document.addEventListener("click", (e) => {
    target = e.target.parentNode;

    if (target === menuBtn) {
        overlaym.style.display ="flex";
        navbarLinksM.classList.toggle("active-nav")


        setTimeout(() => {
            navbarLinksM.classList.toggle("anim-navs")
        }, 100);
    }

    if (target != menuBtn && target != navLinkContainer && target != downloadBtn && target != navbarLinksM) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")

    }


});

overlaym.addEventListener("click", ()=> {
    overlaym.style.display ="none"
    setTimeout(() => {
        navbarLinksM.classList.remove("active-nav")
    }, 100);
    navbarLinksM.classList.remove("anim-navs")
})