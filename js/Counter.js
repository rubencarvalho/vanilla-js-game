import Entity from './Entity'

export default class Counter extends Entity {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    super()
    this.el = this.render('scoreBox')
  }

  addPlayerPoint() {
    this.playerPoints++
    this.update()
  }

  addBirdsPoint() {
    this.birdsPoints++
    this.update()
  }
  update() {
    this.el.innerHTML = this.playerPoints + ' : ' + this.birdsPoints
  }
}
