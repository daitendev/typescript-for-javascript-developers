export { }

abstract class Animal {
  abstract meep(): string
}

class Lion extends Animal {
  meep(): string {
    return 'roar'
  }
}

class Tiger extends Animal {
  meep(): string {
    return 'grrrr'
  }
}