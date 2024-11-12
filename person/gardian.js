const Person = require("./person");

class Gardian extends Person {
  #profession;
  #income;
  constructor(id, name, income, profession) {
    super(id, name);
    this.#income = income;
    this.#profession = profession;
  }

  get profession() {
    return this.#profession;
  }
  set profession(value) {
    return (this.#profession = value);
  }
  get income() {
    return this.#income;
  }
  set income(value) {
    return (this.#income = value);
  }

  toString() {
    return `${super.toString()} profession : ${this.#profession} income : ${
      this.#income
    }`;
  }
}

module.exports = Gardian;
