/**
 * keyof 연산자
 */

// interface Person {
//     name: string;
//     age: number;
// }
// person 타입으로부터 프로퍼티의 구성을 추출해 해당 구성의 타입을 반환하는 방식으로
// 동작하도록 할 수 있다. (타입스크립트에서)
type Person = typeof person;
// "name" | "age" | ... -> Person이 갖고 있는 프로퍼티의 갯수대로 key가 추출된다.
// 주의할 점은 keyof는 반드시 뒤에 타입이 와야 사용이 가능하다.
function getPropertyKey(person: Person, key: keyof Person){
    return person[key];
}

const person = {
    name: "이정환",
    age: 27,
};

getPropertyKey(person, "name");

// keyof 연산자는 typeof 연산자와 함께 사용이 가능하다
// 반대로 이 경우 타입이 아니라 인스턴스가 와야 사용이 가능하다.
function getPropertyKey2(person: Person, key: keyof typeof person){
    return person[key];
}
