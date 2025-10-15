/**
 * Exclude<T, U>
 * -> 제외하다
 * -> T에서 U를 제거하는 타입
 */

// 직접 구현해 보자
// T가 U의 서브타입이라면 never로 바꾸고 아니라면 T를 그대로 반환
//string | boolean이 T로 들어오고, 이 경우 분산적 조건부 타입이 되어
// 각각에 대해 조건을 검증한다.
type Exclude<T, U> = T extends U ? never : T;

// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 최종적으로는
// string

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 * Exclude와 정확히 반대 동작, 반환 조건을 반대로 하기만 하면 된다.
 */
type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

// 직접 ReturnType을 만들어 보자
// 매개변수로 아무거나 들어와도 되고 아무거나 반환하면 되는 '함수' 타입이기만 하면 된다.
// 들어온 함수가 반환하는 값을 통해 R을 추론해서, 목적은
// T extends (...args: any) => any 가 T extends (...args: any) => infer R의
// 서브 타입이 되도록 하는 R을 추론해내는 것.
type ReturnType
    <T extends (...args: any) => any> =
    T extends (...args: any) => infer R ? R : never;

function funcA() {
    return "hello";
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;