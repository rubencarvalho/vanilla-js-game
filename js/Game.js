import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'
import Bullet from './Bullet'

export default class Game {
  entities = []
  constructor() {
    this.createCounter()
    this.loop()
    this.createHunter()
  }

  shoot = positionX => {
    this.entities = [
      ...this.entities,
      new Bullet({ onRemove: this.removeEntity, positionX }),
    ]
  }

  createCounter() {
    this.counter = new Counter()
  }

  createHunter() {
    this.hunter = new Hunter({ onShoot: this.shoot })
    this.entities = [...this.entities, this.hunter]
  }

  addBird() {
    const config = {
      onRemove: this.removeEntity,
      onClick: this.updatePlayerPoints,
      onEscape: this.updateBirdPoints,
    }
    this.entities = [...this.entities, new Bird(config)]
  }

  removeEntity = entity => {
    const index = this.entities.indexOf(entity)
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
