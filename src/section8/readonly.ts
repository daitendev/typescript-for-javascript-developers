export { }

class VisaCard {
  constructor(readonly owner: string) { }
}

let myVisaCard = new VisaCard('Manu')
console.log(myVisaCard)
