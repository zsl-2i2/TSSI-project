const lightboxContext = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__img--img");
const lightboxCloseButton = document.querySelector(".lightbox__close");
const lightboxNavPrev = document.querySelector(".lightbox__img__nav--prev");
const lightboxNavNext = document.querySelector(".lightbox__img__nav--next");

let currentGallery = 0;
let currentImage = 0;

function getImage(idGallery, idImage) {

    let imgGalleries = document.querySelectorAll(".lightbox__section");
    return imgGalleries[idGallery].querySelectorAll("img")[idImage];
}


function activateNav() {
    lightboxNavPrev.style.display = currentImage - 1 >= 0 ? "grid" : "none"
    let images = document
        .querySelectorAll(".lightbox__section")[currentGallery]
        .querySelectorAll("img");
    lightboxNavNext.style.display = currentImage + 1 < images.length ? "grid" : "none"
}


function openLightbox(value) {

    pageCornerCloseButton.style.display = 'none';
    let data = value.split(":");
    let idGallery = data[0];
    let idImg = data[1];
    currentGallery = Number(idGallery);
    currentImage = Number(idImg);

    anim(lightboxContext, {bottom: 0}, .4);
    anim(lightboxCloseButton, {display: 'grid'}, .3);
    tlAnim(gsap.timeline(), lightboxCloseButton, {opacity: 1});
    anim(pageCornerCloseButton, {left: '-70px'}, .2);

    lightboxImage.src = getImage(idGallery, idImg).src;
    activateNav();

}

function prevLightbox() {

    if (currentImage - 1 >= 0) {
        lightboxImage.style.opacity = 0;
        anim(lightboxImage, {opacity: 1}, .5);
        lightboxImage.src = getImage(currentGallery, currentImage - 1).src;
        lightboxImage.style.transform = 'translateX(0)';
        currentImage--;
    }
    activateNav();
}

function nextLightbox() {

    let images = document
        .querySelectorAll(".lightbox__section")[currentGallery]
        .querySelectorAll("img");
    if (currentImage + 1 < images.length) {
        lightboxImage.style.opacity = 0;
        anim(lightboxImage, {opacity: 1}, .5);
        lightboxImage.src = getImage(currentGallery, currentImage + 1).src;
        currentImage++;
    }
    activateNav();
}

function closeLightbox() {

    anim(lightboxContext, {bottom: '-100vh'}, .3);
    anim(lightboxCloseButton, {opacity: 0}, .2);
    tlAnim(gsap.timeline(), lightboxCloseButton, {display: 'none'});
    anim(pageCornerCloseButton, {left: '24px'}, .2);
    pageCornerCloseButton.style.display = 'grid';
}

function setup() {

    let imgGalleries = document.querySelectorAll(".lightbox__section");
    let idGallery = 0;
    imgGalleries.forEach(element => {

        let images = element.querySelectorAll("img");
        let idImage = 0;
        images.forEach(img => {
            let v = idGallery + ":" + idImage;
            img.addEventListener("click", () => openLightbox(v));
            idImage++;
        });
        idGallery++;
    });
}

setup();

window.addEventListener('touchend', e => {

    const endPosition = e.changedTouches[0].screenX;
    if (Math.abs(endPosition - position) < 100)
        return;
    if (endPosition > position) {
        prevLightbox();
    } else if (endPosition < position) {
        nextLightbox();
    }
});
