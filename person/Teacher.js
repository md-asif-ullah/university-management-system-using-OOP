const Employ = require("./employ");

class Teacher extends Employ {
  #subject;
  constructor(id, name, teacherId, subject) {
    super(id, name);

    this.#subject = subject;
  }

  get subject() {
    return this.#subject;
  }

  set subject(value) {
    return (this.#subject = value);
  }

  toString() {
    return `${super.toString()} subject : ${this.#subject}`;
  }
}

module.exports = Teacher;
