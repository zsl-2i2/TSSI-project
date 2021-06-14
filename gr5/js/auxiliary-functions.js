/* gsap functions service */

const anim = (elem, options, duration = .4) => {
    gsap.to(elem, { duration, ease: 'power3', ...options});
}

const tlAnim = (tl, elem, options, duration = .4, others = null) => {
    tl.to(elem, { duration, ease: 'power3', ...options }, others);
}

const darkModeButton = document.querySelector('.switch > input');

darkModeButton.addEventListener('click', () => {

    const b = document.body;
    if (b.classList.contains('light')) {
        b.classList.add('dark');
        b.classList.remove('light');
    } else {
        b.classList.add('light');
        b.classList.remove('dark');
    }
});
