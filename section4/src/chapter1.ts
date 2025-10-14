/**
 * 함수 타입 표현식
 */
type Operation = (a: number, b: number) => number;
const add = (a: number, b: number) => a + b;
// 함수의 타입을 정의해서 표현식을 더 간결하게 만들 수 있다.
const typedAdd: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multifly: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
// 아래처럼 익명 타입 방식으로도 정의할 수 있다. 함수 표현식 자체를 타입부에 정의할 수 있다.
const expAdd: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */
// 호출 시그니쳐는 함수 타입을 객체 타입 문법 안에 정의하여,
// 변수가 함수와 객체 속성을 동시에 가질 수 있는 하이브리드 타입을 만들 수 있게 해준다.
type Operation2 = {
    (a: number, b: number): number;
    c? : number;
}

const typedAdd2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multifly2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;