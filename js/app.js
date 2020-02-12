const $buttonRight = document.querySelector('#button-right')
const $buttonLeft = document.querySelector('#button-left')
const $galleryImage = document.querySelector('#gallery-image')

const data = {
    images: ['work-1.jpg', 'work-2.jpg', 'work-3.jpg'],
    descriptions: ['Nos especializamos en consultorías, tratamientos de aguas, manejo de residuos.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga?', 'Repellendus labore quidem dolor inventore iste rem.']
}

const getCurrentIndex = () => {
    const currentImage = $galleryImage.src.split('/img/')[1]
    const currentIndex = data.images.indexOf(currentImage)

    return currentIndex
}

const changeImage = order => {
    index = getCurrentIndex()
    if (order === 'inc') {
        index++
        if( index < data.images.length) {
            $galleryImage.src = `./img/${data.images[index]}`
        } else {
            $galleryImage.src = `./img/${data.images[0]}`
        }
    } else if (order === 'dec') {
        index--
        if( index >= 0) {
            $galleryImage.src = `./img/${data.images[index]}`
        } else {
            $galleryImage.src = `./img/${data.images[data.images.length - 1]}`
        }
        
    }
}

$buttonRight.addEventListener('click', () => {   
    changeImage('inc')
})

$buttonLeft.addEventListener('click', () => {   
    changeImage('dec')
})

