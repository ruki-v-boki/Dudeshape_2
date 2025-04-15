// ------------ ПЕРЕКЛЮЧЕНИЕ КНОПКИ ЛАЙКА ------------
const likeButtons = document.querySelectorAll('.like-button')

likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('like-button-active')
  })
})


// ------------ СЛАЙДЕР ------------
const slider = document.querySelector('.slider')
const container = slider.querySelector('.slider__slides-container')

function initSlider(slider) {
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

initSlider(slider);


// ------------ АНИМАЦИЯ ------------
const animatedBlocks = document.querySelectorAll('.scroll-animate');
const imageBox = document.querySelector('.furniture__content-image-box');
const reviewImage = document.querySelector('.reviews__image-box')
const reviewText = document.querySelector('.reviews__text')
const aboutUsImage = document.querySelector('.about-us__image')


// Появление
animatedBlocks.forEach(block => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animate-visible');
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.5 // % видимости
  })

  observer.observe(block)
});

//Рамки Картинки
const imageBordersObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-borders')
      imageBordersObserver.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.5
  })

imageBordersObserver.observe(imageBox)

//Кружок
const circleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-circle')
      circleObserver.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.5
  })

circleObserver.observe(reviewImage)

//О нас
const aboutUsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-image')
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.5,
})

aboutUsObserver.observe(aboutUsImage)

//Слайдер
const sliderObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slider')
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.5,
})

sliderObserver.observe(container)

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