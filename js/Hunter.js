export default class Hunter {
  constructor() {
    this.el = this.render()
    this.setupMovement()
  }

  setupMovement() {
    document.body.addEventListener('keyup', event => {
      if (event.key === 'ArrowLeft') {
        console.log('Left')
      } else if (event.key === 'ArrowRight') {
        console.log('Right')
      }
    })
  }

  render() {
    const el = document.createElement('div')
    el.className = 'hunter'
    document.body.insertAdjacentElement('afterbegin', el)
    return el
  }
}
