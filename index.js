// ------------ ПЕРЕКЛЮЧЕНИЕ КНОПКИ ЛАЙКА ------------
const likeButtons = document.querySelectorAll('.like-button')

likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('like-button-active')
    })
})


// ------------ СЛАЙДЕР ------------
function initSlider() {
  const slider = document.querySelector('.slider')
  const sliderContainer = slider.querySelector('.slider__slides-container')
  const slideWidth = slider.querySelector('.slides-list__item').offsetWidth
  const prevButton = slider.querySelector('.slider__button-nav--prev')
  const nextButton = slider.querySelector('.slider__button-nav--next')

  prevButton.addEventListener('click', () => {
    sliderContainer.scrollLeft -= slideWidth
  })

  nextButton.addEventListener('click', () => {
    sliderContainer.scrollLeft += slideWidth
  })
}

initSlider()


// ------------ АНИМАЦИЯ ------------
const animatedBlocks = document.querySelectorAll('.scroll-animate')

animatedBlocks.forEach(block => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0] // Первая запись в массиве
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animate-visible')
      }
    }, {
      threshold: 0.5 // 50% видимости
    })

    observer.observe(block)
})