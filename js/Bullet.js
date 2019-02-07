import Entity from './Entity'
export default class Bullet extends Entity {
  position = { x: 0, y: 50 }
  speed = 20

  constructor(config) {
    super()
    const { onRemove, positionX } = config
    this.onRemove = onRemove
    this.el = this.render('bullet', { left: positionX + 'px' })
  }

  update() {
    this.position.y += this.speed
    // this.el.style.left = this.position.x + 'px'
    this.el.style.bottom = this.position.y + 'px'
    if (this.position.y > window.innerHeight) {
      this.remove()
    }
  }
}
