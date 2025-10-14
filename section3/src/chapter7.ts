/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 말한다.
 */
type Person = {
    name: string;
    age: number;
}

// value => number : toFiexed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다.

function func(value: number | string | Date | null | Person) {
  // value; // 여기서는 number|string 유니온 타입으로 보인다.
  // value.toUpperCase(); // 유니온 타입, string타입이 아니니까 string 내장 메서드 호출 불가
  // value.toFixed(); // 유니온 타입, number 아니니까 number 내장 메서드 호출 불가
  // 아래와 같은 작업에서 조건문을 타입 가드, 이후 value는 타입을 좁혔다고 부른다.
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // value => null => null도 object, Date도 object이기 때문에 문제 발생
  // 아래처럼 하면 안 된다.
//   else if (typeof value === "object") {
//     console.log(value.getTime());
//   }
  // 대신 아래처럼 instanceof를 쓰자
  else if (value instanceof Date){
    console.log(value.getTime());
    // 근데 Person 타입을 우리가 만들어 놓고, instanceof를 해 보면 안 된다고 나온다.
    // 이건 instanceof는 뒤에 '클래스'가 와야 한다. Date가 가능했던 이유는 node 내장 '클래스'이기 때문
  }
//   else if (value instanceof Person){
//   }
// 프로퍼티 in value => value 안에 age 프로퍼티가 있다면이라는 조건
// 가능한 타입들 중 age를 갖고 있는 타입이 Person밖에 없으므로 Person만 가능.
// 그런데 value가 null일 수 있는데 이 경우 in 연산이 불가능하다고 나온다.
// 따라서 value가 null이 아님을 조건문에 추가해 주어야 한다.
  else if (value && 'age' in value){
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
