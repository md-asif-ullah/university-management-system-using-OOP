const UniPerson = require("./uniperson");

class Student extends UniPerson {
  #studentId;
  #guardian;
  #exams;
  #fee;

  constructor(id, name, studentId, guardian) {
    super(id, name);
    this.#studentId = studentId;
    this.#guardian = guardian;
    this.#exams = [];
    this.#fee = null;
  }

  get studentId() {
    return this.#studentId;
  }

  get guardian() {
    return this.#guardian;
  }

  get exam() {
    return this.#exams;
  }

  set exam(value) {
    [this.#exams] = value;
  }

  addExam(exam) {
    this.#exams.push(exam);
  }

  get fee() {
    return this.#fee;
  }

  set fee(value) {
    return (this.#fee = value);
  }

  toString() {
    return `${super.toString()} studentId : ${this.#studentId} guardian : ${
      this.#guardian
    } exams : ${this.#exams} fee : ${this.#fee}`;
  }
}
module.exports = Student;
