/* fixed bug connected with resizing the window */

window.addEventListener('resize', () => {

    gsap.to(document.body, {
        duration: .3,
        left: -window.innerWidth * c
    });

    if (window.innerWidth > breakpoints.md) {
        contactMapButton.style.bottom = '-80px';
    } else {
        if (isContactOverlay) {
            contactMapButton.style.bottom = 0;
        }
    }

    if (isReadMore) {
        pageHeader.forEach(page => page.style.fontSize = '4vh');
    } else {
        if (window.innerWidth <= breakpoints.sm)
            pageHeader.forEach(page => page.style.fontSize = '40px');
        else
            pageHeader.forEach(page => page.style.fontSize = '80px');
    }

    navTo(c);

});
