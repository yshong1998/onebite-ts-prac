// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용할 수 있는 타입
let anyVar = 10;
// anyVar = "hello"; // 오류가 난다. 처음 선언할 때 할당한 값의 타입을 통해 변수의 타입을 추론해 정의해 놓기 때문이다.
// 자바스크립트처럼 아무 타입이나 다 받으려면 any 타입을 쓰면 된다.
let anyVar2: any = 10;
// anyVar2 = "hello"; // 오류가 나지 않는다.
// anyVar2 = true; // 오류가 나지 않는다.
// anyVar2 = []; // 오류가 나지 않는다.
// anyVar2 = () => {}; // 오류가 나지 않는다.
// anyVar2.toUpperCase(); // 타입 오류는 안 난다. 다만 문자가 아니라면 런타임 에러가 발생할 예정

//정의할 때 뿐만 아니라 집어넣을 때도 아무 곳에나 다 집어넣을 수 있다.
let num : number = 10;
num = anyVar2; // 오류가 나지 않는다. any 타입이기 때문에

// unknown
let unknownVar : unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// any와의 차이 - 할당은 아무렇게나 되지만 아무 곳에나 집어넣을 수는 없다.

// num = unknownVar; // error - unknown 타입은 number 타입에 할당할 수 없다.
// 쓰고 싶다면 아래와 같이 타입 정제를 통해 unknownVar의 타입이 number임을 확인해야 한다.
if (typeof unknownVar === "number") {
    num = unknownVar; // 이제는 오류가 나지 않는다.
}
