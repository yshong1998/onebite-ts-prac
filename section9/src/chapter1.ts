/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string: number;
// 분산을 방지하고 싶다면 아래와 같이 묶어주면 된다.
// type StringNumberSwitch<T> = [T] extends [number] ? string: number;
// 위는 <boolean | number | string>이 T에 들어올텐데 이걸 각각 하나씩 하는 게 아니라
// 셋을 유니온한 형태가 된다. 즉 분산되자 않고 하나의 타입으로 조건을 검사하게 된다.


let a : StringNumberSwitch<number>;
let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>;
// 한 번은 StringNumberSwitch<number>로 들어가고 (-> string 타입으로 switch)
// 한 번은 StringNumberSwitch<string>로 들어간다 (-> number 타입으로 switch)
// 받아온 결과를 union한 타입을 할당한다.

let d : StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> (-> number 타입으로 switch)
// StringNumberSwitch<number> (-> string 타입으로 switch)
// StringNumberSwitch<string> (-> number 타입으로 switch)

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string> |

// 2단계
// number - number extends string인가? false -> number
// never - string extends string인가? true -> never
// boolean - boolean extends string인가? false -> boolean

// 결과
// number | never | boolean, never는 공집합이고, 공집합과 원집합의 합집합은 원집합이다
// 따라서 never를 제거하면 number | boolean이 된다.
// 즉 Exclude는 T로 들어오는 타입들 중, U타입이 들어오면 해당 타입을 제거한 타입이다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never - number extends string인가? false -> never
// string - string extends string인가? true -> string
// never - booleann extends string인가? false -> never