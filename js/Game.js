import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'

export default class Game {
  birds = []
  constructor() {
    this.createCounter()
    this.loop()
    this.createHunter()
  }

  createCounter() {
    this.counter = new Counter()
  }

  createHunter() {
    this.hunter = new Hunter()
  }

  addBird() {
    const config = {
      onRemove: this.removeBird,
      onClick: this.updatePlayerPoints,
      onEscape: this.updateBirdPoints,
    }
    this.birds = [...this.birds, new Bird(config)]
  }

  removeBird = bird => {
    const index = this.birds.indexOf(bird)
    this.birds = [...this.birds.slice(0, index), ...this.birds.slice(index + 1)]
  }

  updatePlayerPoints = () => {
    this.counter.addPlayerPoint()
  }

  updateBirdPoints = () => {
    this.counter.addBirdsPoint()
  }

  loop() {
    Math.random() < 1 / 50 && this.addBird()
    this.birds.forEach(bird => bird.update())
    requestAnimationFrame(() => this.loop())
  }
}
