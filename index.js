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
  const container = slider.querySelector('.slider__slides-container')
  const slides = slider.querySelectorAll('.slides-list__item')
  const slideWidth = slides[0].offsetWidth
  const prevBtn = slider.querySelector('.slider__button-nav--prev')
  const nextBtn = slider.querySelector('.slider__button-nav--next')

  function checkButtons() {
    const atStart = container.scrollLeft === 0
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1

    prevBtn.classList.toggle('disabled', atStart)
    nextBtn.classList.toggle('disabled', atEnd)
  }

  prevBtn.addEventListener('click', () => {
    container.scrollLeft -= slideWidth
  })

  nextBtn.addEventListener('click', () => {
    container.scrollLeft += slideWidth
  })

  container.addEventListener('scroll', checkButtons)
  checkButtons()
}

initSlider();


// ------------ АНИМАЦИЯ ------------
const animatedBlocks = document.querySelectorAll('.scroll-animate')

animatedBlocks.forEach(block => {
  const observer = new IntersectionObserver(entries => {
    const entry = entries[0] // Первая запись в массиве
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animate-visible')
    }
  }, {
    threshold: 0.3 // 30% видимости
  })

  observer.observe(block)
})