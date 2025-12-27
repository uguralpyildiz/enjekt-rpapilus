document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAV SCROLL (CLASS BASED)
    ========================= */
    const nav = document.querySelector(".sticky-fun");

    window.addEventListener("scroll", () => {
        nav?.classList.toggle("nav-scrolled", window.scrollY > 50);
    }, { passive: true });


    /* =========================
       REVEAL – INTERSECTION OBSERVER
    ========================= */
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(el => revealObserver.observe(el));


    /* =========================
       SERVICES DROPDOWN
    ========================= */
    const trigger = document.querySelector('.services-drop');
    const fas = document.querySelectorAll('.p1, .p3, .p4, .p5');
    const overlayer = document.querySelector('.overlayer-dropbox');
    const dropdownBox = document.querySelector('.services-dropdown-box');
    const dotLink = document.querySelector('.dot-link-effect');
    const dotLinkS = document.querySelector('.services-icon-down');

    function closeDropdown() {
        overlayer?.classList.remove('active');
        dropdownBox?.classList.remove('active');
        dotLink?.classList.remove('active1');
        if (dotLinkS) dotLinkS.style.transform = "rotate(0deg)";
    }

    trigger?.addEventListener('mouseover', () => {
        overlayer?.classList.add('active');
        dropdownBox?.classList.add('active');
        dotLink?.classList.add('active1');
        if (dotLinkS) dotLinkS.style.transform = "rotate(-180deg)";
    });

    overlayer?.addEventListener('mouseover', closeDropdown);
    fas.forEach(el => el.addEventListener('mouseover', closeDropdown));


    /* =========================
       AI BUTTONS
    ========================= */
    document.querySelectorAll('.enj-aibtnx').forEach(button => {
        button.addEventListener('click', () => {
            const text = button.innerText.toLowerCase();
            const prompt = encodeURIComponent(
                `${window.location.href}\n\nCan you analyze and summarize this page clearly?`
            );

            const map = {
                chatgpt: `https://chat.openai.com/?q=${prompt}`,
                claude: `https://claude.ai/new?q=${prompt}`,
                grok: `https://grok.x.ai/?q=${prompt}`,
                perplexity: `https://www.perplexity.ai/?q=${prompt}`,
                gemini: `https://gemini.google.com/app?q=${prompt}`
            };

            for (const key in map) {
                if (text.includes(key)) {
                    window.open(map[key], "_blank");
                    break;
                }
            }
        });
    });


    /* =========================
       DOT LINK EFFECT
    ========================= */
    const nthLinks = document.querySelectorAll("#nth a");
    const dotEffect = document.querySelector(".dot-link-effect");

    nthLinks.forEach((link, index) => {
        link.addEventListener("click", () => {
            nthLinks.forEach((_, i) => dotEffect?.classList.remove("active" + i));
            dotEffect?.classList.add("active" + index);
        });

        link.addEventListener("mouseenter", () => {
            nthLinks.forEach(l => l.style.opacity = ".25");
            link.style.opacity = "1";
        });

        link.addEventListener("mouseleave", () => {
            nthLinks.forEach(l => l.style.opacity = "1");
        });
    });


    /* =========================
       MOBILE MENU
    ========================= */
    const menuBtn = document.querySelector(".menu-btn");
    const overlayMenu = document.querySelector(".overlay-menu");
    const navLinks = document.querySelector(".nav-links");

    menuBtn?.addEventListener("click", () => {
        overlayMenu.style.display = "flex";
        navLinks.classList.toggle("active-nav");

        setTimeout(() => {
            navLinks.classList.toggle("anim-navs");
        }, 100);
    });

    overlayMenu?.addEventListener("click", () => {
        overlayMenu.style.display = "none";
        navLinks.classList.remove("active-nav", "anim-navs");
    });

});
