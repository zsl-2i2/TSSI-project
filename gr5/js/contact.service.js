/* contact service */

let temp = null;

contactButton.addEventListener('click', () => {
    if (!horizontal) return
    anim(contactOverlay, {bottom: 0});
    let tl = gsap.timeline();
    tlAnim(tl, contactOverlayButton, {left: '24px'}, .6);
    if (window.innerWidth <= breakpoints.md)
        tlAnim(tl, contactMapButton, {bottom: 0}, .8);

    temp = horizontal;
    horizontal = null;
    isContactOverlay = true;
});

contactOverlayButton.addEventListener('click', () => {

    anim(contactOverlay, {bottom: '100vh'});
    let tl = gsap.timeline();
    tlAnim(tl, contactOverlayButton, {left: '-50px'}, .4);
    tlAnim(tl, contactMapButton, {bottom: '-80px'}, .6);

    horizontal = temp;
    isContactOverlay = false;
});
