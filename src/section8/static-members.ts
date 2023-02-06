export { }

class Me {
  static isProgrammer: boolean = false
  static firstName: string = 'manu'
  static lastName: string = 'mannu'

  static work() {
    return `Hey, guys! This is ${this.firstName}. Are you interested in TypeScript?`
  }
}

// let me = new Me()
// console.log(me)

console.log(Me.isProgrammer)
console.log(Me.work())