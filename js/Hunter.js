import Entity from './Entity'
export default class Hunter extends Entity {
  position = window.innerWidth / 2
  speed = 0
  constructor() {
    super()
    this.el = this.render('hunter')
    this.setupMovement()
  }

  update() {
    this.position += this.speed
    this.el.style.left = this.position + 'px'
  }

  setupMovement() {
    document.body.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.speed = -10
      } else if (event.key === 'ArrowRight') {
        this.speed = 10
      }
    })
    document.body.addEventListener('keyup', () => {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.speed = 0
      }
    })
  }
}
