class Teacher extends Student {
  constructor(salary, subjects, id, name, email, mobile_number) {
    super(id, name, email, mobile_number);
    this.salary = salary;
    this.subjects = subjects;
  }
}
let teacher1 = new Teacher(
  "800",
  "English, Arabic, Math, science",
  "96432",
  "Sadi",
  "Sadi@orange.com",
  "0777788888"
);
console.log(teacher1.salary);
console.log(teacher1.subjects);
