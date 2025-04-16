// ------------ ПЕРЕКЛЮЧЕНИЕ КНОПКИ ЛАЙКА ------------
const likeButtons = document.querySelectorAll('.like-button')

likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('like-button-active')
  })
})


// ------------ СЛАЙДЕР ------------
const slider = document.querySelector('.slider')
const sliderContainer = slider.querySelector('.slider__slides-container')

function initSlider(slider) {
  const slides = slider.querySelectorAll('.slides-list__item')
  const slideWidth = slides[0].offsetWidth
  const prevBtn = slider.querySelector('.slider__button-nav--prev')
  const nextBtn = slider.querySelector('.slider__button-nav--next')

  function checkButtons() {
    const atStart = sliderContainer.scrollLeft === 0
    const atEnd = sliderContainer.scrollLeft + sliderContainer.clientWidth >= sliderContainer.scrollWidth - 1

    prevBtn.classList.toggle('disabled', atStart)
    nextBtn.classList.toggle('disabled', atEnd)
  }

  prevBtn.addEventListener('click', () => {
    sliderContainer.scrollLeft -= slideWidth
  })

  nextBtn.addEventListener('click', () => {
    sliderContainer.scrollLeft += slideWidth
  })

  sliderContainer.addEventListener('scroll', checkButtons)
  checkButtons()
}

initSlider(slider);


// ------------ АНИМАЦИЯ ------------
const animatedBlocks = document.querySelectorAll('.scroll-animate');
const imageBox = document.querySelector('.furniture__content-image-box');
const reviewImage = document.querySelector('.reviews__image-box')
const reviewText = document.querySelector('.reviews__text')
const aboutUsImage = document.querySelector('.about-us__image')


function setAnimation(block, animationClass) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${animationClass}`)
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.5 // 50% видимости блока
  })

  observer.observe(block)
}


// Появление
animatedBlocks.forEach(block => {
  setAnimation(block, 'scroll-animate-visible')
})

//О нас
setAnimation(aboutUsImage, 'animate-image')

//Слайдер
setAnimation(sliderContainer, 'animate-slider')

//Рамки Картинки (All furniture)
setAnimation(imageBox, 'animate-borders')

//Кружок
setAnimation(reviewImage, 'animate-circle')

//Текст
const textObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    const text = reviewText.textContent
    reviewText.textContent = ''

    new Typed(reviewText, {
      strings: [text],
      typeSpeed: 40,
      backSpeed: 0,
      showCursor: false,
      loop: false
    })

    textObserver.unobserve(reviewText)
  }
  }, {
    threshold: 0.3
  })

textObserver.observe(reviewText)