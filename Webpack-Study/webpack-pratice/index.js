import 'normalize.css'
import styles from './index.css'
import $ from 'jquery'
import image from './assets/image.jpeg'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello Webpack'

  const imgElement = document.createElement('img')
  imgElement.src = image

  console.log(image)
  console.log(styles)
  element.appendChild(imgElement)

  element.classList = styles.helloWebpack

  return element
}

document.body.appendChild(component())
console.log($(`.${styles.helloWebpack}`).length)
console.log(`IS_PRODUCTION, ${IS_PRODUCTION}`)
