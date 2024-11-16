class Address {
  #id;
  #roadNo;
  #city;
  #region;
  #country;
  #postalCode;

  constructor({ id, roadNo, city, region, country, postalCode }) {
    this.#id = id;
    this.#roadNo = roadNo || "";
    this.#city = city || "";
    this.#region = region || "";
    this.#country = country || "";
    this.#postalCode = postalCode || "";
  }

  get id() {
    return this.#id;
  }
  get roadNo() {
    return this.#roadNo;
  }
  set roadNo(value) {
    return (this.#roadNo = value);
  }
  get city() {
    return this.#city;
  }
  set city(value) {
    return (this.#city = value);
  }
  get region() {
    return this.#region;
  }
  set region(value) {
    return (this.#region = value);
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    return (this.#country = value);
  }
  get postalCode() {
    return this.#postalCode;
  }
  set postalCode(value) {
    return (this.#postalCode = value);
  }

  toString() {
    return `id : ${this.#id} roodNo : ${this.#roadNo} city : ${
      this.#city
    } region : ${this.#region} country : ${this.#country} postalCode : ${
      this.#postalCode
    }`;
  }
}

module.exports = Address;
