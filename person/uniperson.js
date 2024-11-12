const Person = requre("./Person");

class UniPerson extends Person {
  #department;
  #account;

  constructor(id, name) {
    super(id, name);

    this.#department = null;
    this.#account = null;
  }

  get department() {
    return this.#department;
  }

  set department(value) {
    return (this.#department = value);
  }

  get account() {
    return this.#account;
  }

  set account(value) {
    return (this.#account = value);
  }

  toString() {
    return `${super.toString()} department : ${this.#department} account : ${
      this.#account
    }`;
  }
}

module.exports = UniPerson;
