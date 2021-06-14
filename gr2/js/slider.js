let arrowNext = document.querySelector('#slider_arrow_next')
let arrowPrevious = document.querySelector('#slider_arrow_previous')
let activeNumber = 0

const sliderEnum = Object.freeze({ 0: '#main_page', 1: '#first_spec', 2: '#second_spec', 3: '#third_spec', 4: '#fourth_spec' })

const sliderEnum_nav = Object.freeze({ 0: '#main_page_nav', 1: '#first_spec_nav', 2: '#second_spec_nav', 3: '#third_spec_nav', 4: '#fourth_spec_nav' })
const sliderEnum_footer = Object.freeze({ 1: '#first_spec_footer', 2: '#second_spec_footer', 3: '#third_spec_footer', 4: '#fourth_spec_footer' })

document.querySelector(sliderEnum_footer[1]).addEventListener('click', () => {
    set_active(true, 1)
})
document.querySelector(sliderEnum_footer[2]).addEventListener('click', () => {
    set_active(true, 2)
})
document.querySelector(sliderEnum_footer[3]).addEventListener('click', () => {
    set_active(true, 3)
})
document.querySelector(sliderEnum_footer[4]).addEventListener('click', () => {
    set_active(true, 4)
})

let bottom = document.querySelector('#slider_pointers').children

document.querySelector(sliderEnum_nav[0]).addEventListener('click', () => {
    set_active(true, 0)
})
document.querySelector(sliderEnum_nav[1]).addEventListener('click', () => {
    set_active(true, 1)
})
document.querySelector(sliderEnum_nav[2]).addEventListener('click', () => {
    set_active(true, 2)
})
document.querySelector(sliderEnum_nav[3]).addEventListener('click', () => {
    set_active(true, 3)
})
document.querySelector(sliderEnum_nav[4]).addEventListener('click', () => {
    set_active(true, 4)
})
bottom[0].addEventListener('click', () => {
    set_active(true, 0)
})
bottom[1].addEventListener('click', () => {
    set_active(true, 1)
})
bottom[2].addEventListener('click', () => {
    set_active(true, 2)
})
bottom[3].addEventListener('click', () => {
    set_active(true, 3)
})
bottom[4].addEventListener('click', () => {
    set_active(true, 4)
})
arrowNext.addEventListener('click', () => {
    set_active(true)
})

arrowPrevious.addEventListener('click', () => {
    set_active(false)
})

function set_active(direction, value = null) {
    document.querySelector('#menu').querySelector(sliderEnum_nav[activeNumber]).querySelector('.underscore').className = 'underscore'
    document.querySelector('#slider_content').querySelector(sliderEnum[activeNumber]).className = ''
    document.querySelector('#slider_pointers').children[activeNumber].className = 'slider_pointer'
    document.querySelector('#content').children[activeNumber].className = ''

    if (value == null) {
        if (direction) {
            if (activeNumber == 4) activeNumber = 0
            else activeNumber++
        } else {
            if (activeNumber == 0) activeNumber = 4
            else activeNumber--
        }
    } else {
        activeNumber = value
    }

    document.querySelector('#slider_content').querySelector(sliderEnum[activeNumber]).className = 'active'
    document.querySelector(sliderEnum_nav[activeNumber]).querySelector('.underscore').className = 'underscore active'
    document.querySelector('#slider_pointers').children[activeNumber].className += ' active'
    document.querySelector('#content').children[activeNumber].className = 'active'

}
