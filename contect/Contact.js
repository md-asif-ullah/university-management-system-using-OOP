class Contact {
  #id;
  #email;
  #phone;
  #alternatePhone;
  #address;

  constructor(id, email, phone, alternatePhone, address) {
    this.#id = id;
    this.#email = email || "";
    this.#phone = phone || "";
    this.#alternatePhone = alternatePhone || "";
    this.#address = address || null;
  }

    get id() {
        return this.#id;
    }
    get email() {
        return this.#email;
    }
    set email(value) {
        return (this.#email = value);
    }
    get phone() {
        return this.#phone;
    }
    set phone(value) {
        return (this.#phone = value);
    }
    get alternatePhone() {
        return this.#alternatePhone;
    }
    set alternatePhone(value) {
        return (this.#alternatePhone = value);
    }
    get address() {
        return this.#address;
    }
    set address(value) {
        return (this.#address = value);
    }

    toString() {
        return `id : ${this.#id} email : ${this.#email} phone : ${
            this.#phone
        } alternatePhone : ${this.#alternatePhone} address : ${
            this.#address
        }`;
    }
    
}

module.exports = Contact;
