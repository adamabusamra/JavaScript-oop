class Student {
  constructor(id, name, email, mobile_number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.mobile_number = mobile_number;
  }
  Name() {
    return this.name;
  }
  Mobile() {
    return Number(this.mobile_number);
  }
}

let student1 = new Student(
  "123443",
  "Sara",
  "email:sara@orange.com",
  "0777777777"
);

console.log(student1.Name());
console.log(student1.Mobile());
