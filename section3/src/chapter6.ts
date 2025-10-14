/**
 * 타입 단언
 */

type Person = {
    name : string;
    age : number;
}

// as를 통해 들어오게 될 타입을 단언해 주면 된다.
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거나 A가 B의 서브타입이어야 한다.
 */

let num1 = 10 as never; // never는 모든 타입의 서브 타입이기 때문에 10은 never의 슈퍼타입이므로 가능
let num2 = 10 as unknown; // 이번에는 unknown이 10의 슈퍼 타입이기 때문에 가능
// let num3 = 10 as string; // 두 타입 간 교집합이 없는 배타적 관계이므로 서로 슈퍼, 서브 타입이 아니므로 불가
let num4 = 10 as unknown as string; // 이러면 되긴 한다. 상속관계가 있는 애들끼리 단언을 체이닝한 것
// 근데 그냥 타입 단언은 하지 마 뭔 말도 안 되는 게 있냐

/**
 * const 단언
 */

// = 10까지 했을 때는 number인데 as const를 붙이면 const num5 = 10과 같이
// number 10 리터럴 타입으로 변경된다.
let num5 = 10 as const;

// 이렇게 하면 내부 필드들이 변경이 불가능한 상태가 된다.
// 자바에서 final을 붙인 것과 같다.
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// cat.name = '';

/**
 * Non Null 단언
 * Null이나 undefined가 아니라고 타입스크립트 컴파일러에게 알려주는 것
 */

type Post = {
    title: string;
    author?: string; // 선택적 프로퍼티로 만들기
}

let post: Post = {
    title :"게시글1",
    author: "이정환",
}

// 자바스크립트에서 제공하는 옵셔널 체이닝. null이거나 undefined이면 런타임 에러가 발생
// 그래서 null이거나 undefined이면 그 다음 참조로 안 넘어가고 그냥 null이나 undefined 반환
// 근데 타입스크립트에서는 아래처럼 number 타입으로 정의해 두면 undefined를 못 넣어서 에러 발생
// const len: number = post.author?.length; -> 불가
const len: number = post.author!.length; // 이렇게 !로 null이거나 undefined가 아닐 것이라고 알려주는 것.

// !!!! 결론 : 그냥 타입 단언 일단 그냥 쓰지 말자 이거 뭐 그냥 말도 안 되는 게 아닌가... !!!!