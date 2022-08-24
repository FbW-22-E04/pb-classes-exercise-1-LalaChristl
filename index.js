console.log("-----1. Full name-----");

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    this.fullname = `${this.firstname} ${this.lastname}`;

    // console.log(`${firstname} ${lastname}`);

    // Complete the code!
  }
}

const newName = new Employee("Lala", "Christl");

console.log(newName.fullname);

console.log("-----2. Email-----");

console.log(newName.email);