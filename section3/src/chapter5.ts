/**
 * 타입 추론
 */

let a : number = 10;
let b = "hello";
let c = {
    id : 1,
    name : "이정환",
    profile : {
        nickname : "winterlood",
    },
    urls : ["https://winterlood.com"],
}

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// 암묵적 any 타입, 일단 any라고 해 놓는 것. 이후 할당하는 값에 따라 타입이 진화한다.
let d;
d = 10;
d.toFixed(); // d가 number 타입으로 진화했기 때문에 가능

d = 'hello';
d.toUpperCase(); // d가 string 타입으로 진화했기 때문에 가능

// 이 경우 num의 타입은 number가 아니라 10이라는 number 리터럴 타입 10이 타입이 된다.
const num = 10;
const str = "hello"; // 마찬가지로 string 리터럴 타입 hello가 타입이 된다.

// 이렇게 배열에 다양한 타입의 값을 담은 경우 공통 유니온 타입으로 추론해 준다.
// (string | number)[] 타입이 된다.
let arr = [1, "string"];
// 사실 따지고 보면 let a = 10; 에서 a의 타입은 number 리터럴 타입 10이지만, let의 특성상 다른
// 값이 들어올 수 있다. 이에 따라 number 타입으로 추론을 하게 되고 이를 '타입 넓히기'라 부른다.
// 나중에 '타입 좁히기'도 있다.