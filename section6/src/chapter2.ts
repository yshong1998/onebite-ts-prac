/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
class Employee {
  // 필드

  // 생성자에 접근 제어자를 쓰면 그 필드들을 선언한 것과 같아진다.
  // 심지어 들어온 값들로  초기화까지 자동으로 해서 구현부를 비워도 된다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
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

  // 메서드
  func() {
    // this.name; // private - 불가능
    this.age; // protected - 가능
    this.position; // public - 아무데서나 가능
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";
