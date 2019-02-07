import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'

export default class Game {
  entities = []
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
    this.entities = [...this.entities, this.hunter]
  }

  addBird() {
    const config = {
      onRemove: this.removeBird,
      onClick: this.updatePlayerPoints,
      onEscape: this.updateBirdPoints,
    }
    this.entities = [...this.entities, new Bird(config)]
  }

  removeBird = bird => {
    const index = this.entities.indexOf(bird)
    this.entities = [
      ...this.entities.slice(0, index),
      ...this.entities.slice(index + 1),
    ]
  }

  updatePlayerPoints = () => {
    this.counter.addPlayerPoint()
  }

  updateBirdPoints = () => {
    this.counter.addBirdsPoint()
  }

  loop() {
    Math.random() < 1 / 50 && this.addBird()
    this.entities.forEach(entity => entity.update())
    requestAnimationFrame(() => this.loop())
  }
}
