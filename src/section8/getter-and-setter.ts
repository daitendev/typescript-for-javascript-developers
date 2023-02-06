export { }

class MyNumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner(): string {
    return this._owner
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}


let card = new MyNumberCard('manu', 12345)
// console.log(card.owner)
// card.secretNumber
console.log(card.debugPrint())
card.secretNumber = 333
console.log(card.debugPrint())