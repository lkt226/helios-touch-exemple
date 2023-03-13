// Lazy loading para imagens
const imageObserver = () => {
  const images = Array.from(document.querySelectorAll('.lazy'));
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;

          image.src = image.getAttribute('data-src');
          image.onload = () => image.previousElementSibling?.remove();

          imageObserver.unobserve(image);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    images.forEach(img => img.src = img.getAttribute('data-src'));
  }
}

// Carrega animações quando entram na tela
const animationObserver = () => {
  //Força animação em todos os elementos do main
  document.querySelectorAll('main >*').forEach((item, index) => { if (index > 1) item.classList.add('anim') })

  const animations = Array.from(document.querySelectorAll('.anim'));

  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animation = entry.target

          animation.classList.add('active')
        }
      });
    });

    animations.forEach(anim => animationObserver.observe(anim))
  } else {
    animations.forEach(anim => anim.classList.add('active'))
  }
}

export default defineNuxtPlugin(({ }) => {
  
  return {
    provide: {
      observer: () => {
        setTimeout(() => {
          // imageObserver()
          animationObserver()
        }, 300)
      },
    }
  }
})