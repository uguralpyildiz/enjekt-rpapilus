
window.addEventListener('scroll', function () {
    var nav = document.querySelector(".sticky-fun"); 
    if (window.scrollY > 50) {
        nav.style.background = "linear-gradient(to top,#111111,#000000)";
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



document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
        img.classList.add('lazy-img'); 

    if (img.complete) {
   
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    }
  });
});




const trigger = document.querySelector('.services-drop');
const fas = document.querySelectorAll('.p1, .p3, .p4, .p5');
const overlayer = document.querySelector('.overlayer-dropbox');
const dropdownBox = document.querySelector('.services-dropdown-box');
const dotLink = document.querySelector('.dot-link-effect');
const dotLinkS = document.querySelector('.services-icon-down');

trigger.addEventListener('mouseover', () => {
    overlayer.classList.add('active');
    dropdownBox.classList.add('active');
    dotLink.classList.add('active1');
    dotLinkS.style.transform = "rotate(-180deg)";
});

overlayer.addEventListener('mouseover', () => {
    overlayer.classList.remove('active');
    dropdownBox.classList.remove('active');
    dotLink.classList.remove('active1');
    dotLinkS.style.transform = "rotate(0deg)";
});
fas.forEach(fa => {
    fa.addEventListener('mouseover', () => {
        overlayer.classList.remove('active');
        dropdownBox.classList.remove('active');
        dotLink.classList.remove('active1');
        dotLinkS.style.transform = "rotate(0deg)";
    });
});












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