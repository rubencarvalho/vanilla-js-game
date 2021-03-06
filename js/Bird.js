import Entity from './Entity'
export default class Bird extends Entity {
  defaultConfig = {
    color: 'white',
    speed: 2 + Math.random() * 2,
    position: { x: 0, y: 200 + Math.random() * 200 },
  }

  constructor(config) {
    super()
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, onRemove, onClick, onEscape } = config
    this.config = config
    this.onRemove = onRemove
    this.onClick = onClick
    this.onEscape = onEscape
    this.position = position
    this.color = color
    this.speed = speed
    this.el = this.render('bird', { background: this.color })
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => {
      this.onClick()
      this.remove()
    })
  }

  update() {
    this.position.x += this.speed
    this.position.y =
      this.position.y + this.speed * Math.sin(this.position.x / 100)
    if (this.position.x > window.innerWidth) {
      this.remove()
      this.onEscape()
    } else {
      this.el.style.top = this.position.y + 'px'
      this.el.style.left = this.position.x + 'px'
    }
  }
}
