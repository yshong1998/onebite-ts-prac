/**
 * 타입스크립트의 클래스
 * 타입스크립트의 클래스는 타입으로도 동작한다.
 */

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    // 호출을 꼭 해 주어야 한다.
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("이정환", 27, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
