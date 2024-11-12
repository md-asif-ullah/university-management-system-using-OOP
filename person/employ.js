const uniperson = require("./uniperson");

class Employ extends uniperson {
  #employId;
  #department;
  #salary;
  constructor(id, name, employId, department) {
    super(id, name);
    this.#employId = employId;
    this.#department = department;
    this.#salary = null;
  }

  get employId() {
    return this.#employId;
  }

  get department() {
    return this.#department;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    return (this.#salary = value);
  }

  toString() {
    return `${super.toString()} employId : ${this.#employId} department : ${
      this.#department
    } salary : ${this.#salary}`;
  }
}

module.exports = Employ;
