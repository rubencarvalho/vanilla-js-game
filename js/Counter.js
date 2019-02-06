export default class Counter {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    this.el = this.render()
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

  render() {
    this.el = document.createElement('div')
    this.el.className = 'scoreBox'
    document.body.insertAdjacentElement('beforeend', this.el)
    return this.el
  }
}
