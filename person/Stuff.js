const Employ = require("./employ");

class Stuff extends Employ {
  #title;
  constructor(id, name, title) {
    super(id, name);
    this.#title = title;
  }
  get title() {
    return this.#title;
  }
  set title(value) {
    return (this.#title = value);
  }

  toString() {
    return `${super.toString()} title : ${this.#title}`;
  }
}

module.exports = Stuff;
