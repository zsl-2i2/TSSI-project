contactMapButton.addEventListener('click', () => {

    anim(contactMap, { bottom: 0 }, .6);
});

contactMapCloseButton.addEventListener('click', () => {

    anim(contactMap, { bottom: '-100vh' }, .4);
});
