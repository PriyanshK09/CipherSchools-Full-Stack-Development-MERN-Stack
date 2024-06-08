class Car {
  constructor(name, mfgYear) {
    this.name = name;
    this.mfgYear = mfgYear;
  }
}

const myCar1 = new Car("Mercedes", 2022);
const myCar2 = new Car("Porsche", 2020);
console.log(myCar1, myCar2);
