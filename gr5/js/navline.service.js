/* navline service */

const initNavlineService = () => {

    let activeArticle = [
        ...document.querySelectorAll('.page__navline')[c].children
    ][0];

    const addActiveClass = target => {

        navlineOptionButtons.forEach(item => {
            item.classList.remove('page__nl-circle--active' + (c + 1));
        });

        target.classList.add('page__nl-circle--active' + (c + 1));
    }

    addActiveClass(activeArticle);

    navlineOptionButtons.forEach(item => item.addEventListener('click', e => {

        const selector = `.${e.target.dataset.article}`;
        const paragraph = document.querySelectorAll(".page__content")[c].querySelectorAll(selector);
        anim(pageContents[c], {
            scrollTo: paragraph[0].offsetTop
        }, .8);

        addActiveClass(e.target);
    }));

    pageContents[c].addEventListener('wheel', e => {

        const navlineOptionButtons = [
            ...document.querySelectorAll('.page__navline')[c].children
        ];
        if (pageContents[c].scrollTop === 0) {
            activeArticle = navlineOptionButtons[0]
        } else if (pageContents[c].scrollTop + pageContents[c].clientHeight === pageContents[c].scrollHeight) {
            activeArticle = navlineOptionButtons[navlineOptionButtons.length - 1]
        } else {
            navlineOptionButtons.forEach(circle => {

                const selector = `.${circle.dataset.article}`;
                const paragraph = document.querySelectorAll(".page__content")[c].querySelectorAll(selector);
                if (
                    pageContents[c].clientHeight / 2 +
                    pageContents[c].scrollTop >
                    paragraph[0].offsetTop
                )
                    activeArticle = circle;
            });
        }
        addActiveClass(activeArticle);
    });
}
