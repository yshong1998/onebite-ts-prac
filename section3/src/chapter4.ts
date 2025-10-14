/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; // a는 string 또는 number 타입
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name : string;
    color: string;
}

type Person = {
    name : string;
    language: string;
}

type Union1 = Dog | Person;

let union1 : Union1 = {
    name: "",
    color: "",
}

let union2 : Union1 = {
    name: "",
    language: "",
}

let union3 : Union1 = {
    name: "",
    color: "",
    language: "",
}

// let union4 : Union1 = {
//     name: "",
// }

/**
 * 교집합 타입 - Intersection 타입
 */
// number 이면서 string
// 근데 이런 건 없다. 서로 교집합이 공집합이기 때문
// 그래서 보통 이렇게 원시 자료형으로는 잘 안 하고 객체타입끼리 한다.
let variable : number & string;

// 위의 Dog와 Person 타입을 재사용해서 두 타입의 교집합 타입을 만들어 보자
type Intersection = Dog & Person;

// Dog와 Person의 프로퍼티를 모두 가지고 있어야 한다.
// 직관적으로는 교집합이라 name만 있으면 될 것 같지만, 대수적으로는 둘 다 만족해야 한다.
// 교집합 타입이라는 이름에 집중하지 말고,
// & 기호에 집중하면 Dog의 프로퍼티와 Person의 프로퍼티를 모두 가져야 한다고 이해할 수 있다.
let intersection1 : Intersection = {
    name: "",
    color: "",
    language: ""
}
