/**
 * 선언 합침
 * 라이브러리 같은 거 쓸 때 라이브러리의 기능이 부실하거나 추가 기능이 필요하면
 * 그걸 좀 보강할 때 보통 활용한다.
 */
// 두 개의 같은 이름의 타입을 선언하면 오류가 나는데
// type Person = {
//     name: string;
// }

// type Person = {
//     age: number;
// }

interface Person {
    name: string;
}

interface Person {
    name: string; // 이 두 번째 인터페이스가 name을 중복으로 선언해도 오류가 나지 않는다.
    // name: number; // 하지만 이렇게 타입을 다르게 선언하면 오류가 난다. 충돌이라 부른다.
    age: number;
}

interface Developer extends Person {
    // 확장한 경우에는 프로퍼티의 타입을 서브 타입으로 재정의해도 괜찮았지만
    // 인터페이스의 선언 합침의 경우 반드시 완전히 같은 타입으로 선언해야 한다.
    // 그러니까 이따구로 하지 말고 그냥 하나의 인터페이스에 똑바로 선언해 놓자.
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27,
}

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    // 보통 첫 번째 인터페이스와 같이 선언되어 있어 추가하고 싶은 게 있어도 못 하는데
    // 이럴 때 인터페이스 선언 합침으로 보강해 활용 가능
    c: "hello",
}