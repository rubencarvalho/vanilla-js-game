import Bird from './Bird'

export default class Game {
  birds = []
  counter = 0
  constructor() {
    this.createBirds()
    this.loop()
  }
  createBirds() {
    this.addBird()
    this.addBird()
    this.addBird()
    this.addBird()
  }

  addBird() {
    const config = {
      removeBird: this.removeBird,
    }

    this.birds = [...this.birds, new Bird(config)]
  }

  removeBird = bird => {
    const index = this.birds.indexOf(bird)
    this.birds = [...this.birds.slice(0, index), ...this.birds.slice(index + 1)]
    // console.log(this.birds.length)
  }

  loop() {
    this.counter++ % 60 === 0 && this.addBird()
    this.birds.forEach(bird => bird.update())
    requestAnimationFrame(() => this.loop())
  }
}
