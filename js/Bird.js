export default class Bird {
  defaultConfig = {
    color: 'black',
    speed: 2 + Math.random() * 2,
    position: 0,
  }

  constructor(config) {
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, removeBird } = config
    this.config = config
    this.position = position
    this.color = color
    this.removeBird = removeBird
    this.speed = speed
    this.el = this.render()
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => {
      // addPlayerPoint(this)
      this.el.classList.add('hit')
      console.log('bird shot')
    })
  }

  update() {
    this.position = this.position + this.speed
    if (this.position > window.innerWidth) {
      this.removeBird(this)
      this.el.remove()
      // addBirdsPoint()
    } else {
      this.el.style.left = this.position + 'px'
    }
  }

  render() {
    const el = document.createElement('div')
    el.className = 'bird'
    el.style.background = this.color
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
