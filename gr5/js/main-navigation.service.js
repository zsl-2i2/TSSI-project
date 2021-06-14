/* main navigation service */

window.addEventListener('wheel', e => {

    if (horizontal) {

        if (e.deltaY < 0 && c > 0 && c <= pagesNumber) c--;
        else if (e.deltaY > 0 && c >= 0 && c < pagesNumber) c++;
        navTo(c);
    }
});
