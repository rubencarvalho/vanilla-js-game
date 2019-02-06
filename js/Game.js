import Bird from './Bird'

export default class Game {
  constructor() {
    this.createBirds()
    this.loop()
  }
  createBirds() {
    const config = {
      removeBird: this.removeBird,
    }

    this.birds = [
      new Bird({
        ...config,
        color: 'hotpink',
        speed: 5,
      }),
      new Bird(config),
      new Bird(config),
      new Bird(config),
    ]
  }

  removeBird = bird => {
    const index = this.birds.indexOf(bird)
    this.birds = [...this.birds.slice(0, index), ...this.birds.slice(index + 1)]
    console.log(this.birds.length)
    // this.birds.splice(index, 1)
  }

  loop() {
    this.birds.forEach(bird => bird.update())
    requestAnimationFrame(() => this.loop())
  }
}
