//animacja slider
setTimeout(()=>{
	let sliderElement = document.getElementsByClassName('slaider-child');
	document.getElementById('slider1').style.opacity='1';
	for (let i=0; i<sliderElement.length; i++){
		sliderElement[i].style.animation = 'test 1s ease-in-out';
		sliderElement[i].style.transform = 'scaleY(1)';
	}

},1000)
//animacja_bloki
var scroll = window.requestAnimationFrame ||
         function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('#kolorowe-bloczki');
function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
        element.classList.add('is-visible-1');
    } else {
        element.classList.remove('is-visible-1');
    }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}
var rect = el.getBoundingClientRect();
return (
    (rect.top <= 0
    && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
//animacja_movie
var scroll1 = window.requestAnimationFrame ||
         function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow1 = document.querySelectorAll('.movie');
function loop1() {

    Array.prototype.forEach.call(elementsToShow1, function(element){
    if (isElementInViewport(element)) {
        element.classList.add('is-visible-movie');
    } else {
        element.classList.remove('is-visible-movie');
    }
    });

    scroll1(loop1);
}

loop1();

function isElementInViewport(el) {
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}
var rect1 = el.getBoundingClientRect();
return (
    (rect1.top <= 0
    && rect1.bottom >= 0)
    ||
    (rect1.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect1.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect1.top >= 0 &&
    rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
//animacja_text
var scroll2 = window.requestAnimationFrame ||
         function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow2 = document.querySelectorAll('.text_movie');
function loop2() {

    Array.prototype.forEach.call(elementsToShow2, function(element){
    if (isElementInViewport(element)) {
        element.classList.add('is-visible-1');
    } else {
        element.classList.remove('is-visible-1');
    }
    });

    scroll2(loop2);
}

loop2();

function isElementInViewport(el) {
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}
var rect2 = el.getBoundingClientRect();
return (
    (rect2.top <= 0
    && rect2.bottom >= 0)
    ||
    (rect2.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect2.top >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
