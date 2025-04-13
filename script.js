const slidesList = document.querySelector('.slides-list')
const slideItems = document.querySelectorAll('.slides-list__item')

const prevButton = document.querySelector('.slider__button-nav--prev')
const nextButton = document.querySelector('.slider__button-nav--next')
const likeButtons = document.querySelectorAll('.like-button')

const visibleSlides = 3
let currentPosition = 0


// ------------ КНОПКИ ------------
nextButton.addEventListener('click', () => {
    if (currentPosition < slideItems.length - visibleSlides) {
        currentPosition++

        updateSlider()
        updateButtons()
    }
})

prevButton.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--

        updateSlider()
        updateButtons()
    }
})

likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('like-button-active')
    })
})

// ------------ ФУНКЦИИ ------------
function updateSlider() {
    // Удаляем все классы позиций
    Array.from(slidesList.classList)
        .filter(className => className.startsWith('position-'))
        .forEach(className => slidesList.classList.remove(className))
  
    // Добавляем текущий класс позиции
    slidesList.classList.add(`position-${currentPosition}`)
}

function updateButtons() {
    prevButton.classList.toggle('slider__button-nav-disabled', currentPosition === 0)
    nextButton.classList.toggle('slider__button-nav-disabled', currentPosition >= slideItems.length - visibleSlides)
}


// Вызовы функций
updateSlider()
updateButtons()




document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-animate');
  
  const observerOptions = {
    threshold: 0.1, // Срабатывает когда 10% элемента видно
    rootMargin: '0px 0px -50px 0px' // Небольшой отступ снизу
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Можно отключить наблюдение после первого появления
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
});