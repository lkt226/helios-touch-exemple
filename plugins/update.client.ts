// Define o width para o $device
const width = () => {
  return window.innerWidth
}

// Força o tamanho das imagem no width e height
const forceWidthAndHeight = () => {
  const images = document.querySelectorAll('img')

  setTimeout(() => {
    images.forEach((image) => {
      const dataSize = {
        width: `${image.naturalWidth}px`,
        height: `${image.naturalHeight}px`
      }
  
      if (image.getAttribute('width') === '0') image.setAttribute('width', dataSize.width)
      if (image.getAttribute('height') === '0') {
        console.log(dataSize.height)
        image.setAttribute('height', dataSize.height)
      }
    })
  }, 1000)
}

//Add animação de hover nas imagens
const addAnimationHoverOnImages = () => {
  const pictures = document.querySelectorAll('picture')
  
  pictures.forEach((picture) => {
    if (!picture.classList.contains('_no_hover')) {
      picture.classList.add('_img_hover')
    }
  })
}

export default defineNuxtPlugin(({ }) => {
  const device = {
    isDesktop: width() > 768,
    isMobile: width() < 768,
    size (size: number) { return width() >= size}
  }
  
  const update = () => {
    setTimeout(() => {
      console.log('update')
      forceWidthAndHeight()
      addAnimationHoverOnImages()
    }, 10)
  }

  return {
    provide: {
      update: update,
      device: device
    }
  }
})