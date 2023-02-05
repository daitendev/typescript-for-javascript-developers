export { }

type Pitcher1 = {
  trowingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  trowingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
}

// type TwoWayPlayer = {
//   trowingSpeed: number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1

const OhtaniShohei: TwoWayPlayer = {
  trowingSpeed: 165,
  battingAverage: 0.286
}