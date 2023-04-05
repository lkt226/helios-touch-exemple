const allElements = document.querySelectorAll('main *');

const texts = document.querySelectorAll('main ._text >*');
texts.forEach((text) => { text.classList.add('down-showing') })

const images = document.querySelectorAll('main >*:not(.no-animation) picture');
images.forEach((image) => { image.classList.add('left-showing') })

// IntersectionObserver API
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.setAttribute('data-viewed', 'true')
      observer.unobserve(element)
    }
  });
});

allElements.forEach(element => {
  observer.observe(element);
});

export default defineNuxtPlugin((app) => {
})