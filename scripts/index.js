'use strict'

const wrapper = document.querySelector('.wrapper')
const sidebar = document.querySelector('.sidebar')
const slider = document.querySelector('.slider')
const upBtn = document.querySelector('#up-btn')
const downBtn = document.querySelector('#down-btn')

const slidesCount = slider.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}

	slider.style.transform = `translateY(-${activeSlideIndex * 100}%)`
	sidebar.style.transform = `translateY(${activeSlideIndex * 100}%)`
}

upBtn.addEventListener('click', () => {
	changeSlide('up')
	console.log(`clicked up`)
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
	console.log(`clicked down`)
})
