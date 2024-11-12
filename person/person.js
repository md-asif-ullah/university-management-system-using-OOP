class Person {
  #id;
  #name;
  #blood;
  #contact;

  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.blood = null;
    this.contact = null;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }

  set name(value) {
    return (this.#name = value);
  }
  get blood() {
    return this.#blood;
  }
  set blood(value) {
    return (this.#blood = value);
  }
  get contact() {
    return this.#contact;
  }
  set contact(value) {
    return (this.#contact = value);
  }

  toString() {
    return `name : ${this.#name} id : ${this.#id} blood : ${
      this.#blood
    } contact : ${this.#contact}`;
  }
}

module.exports = Person;
