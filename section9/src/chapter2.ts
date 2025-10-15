/**
 * infer
 */

// 조건부 타입 내에서 특정 타입만 추출해 올 수 있는 기능
// 예를 들어 보기
type FuncA = () => string;

// 조건부 타입을 써 보면 아래와 같이 string만 뽑아올 수 있다.
type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>;
/**
 * 동작을 이해해 보자
 * Func는 화살표 함수다.
 * ReturnType<T>에서 T가 Func인 상태다. 따라서
 * type ReturnType<() => string> = () => string extends () => string ? string : never
 * 이 삼항 연산자에서 조건은, 좌항이 우항의 서브타입인가?를 묻는 중이고, 둘은 완전히
 * 동치이기 때문에 참이다. 따라서 string이 반환된다.
 * 따라서 A타입은 string 타입이 된다.
 */

// 또 다른 예를 들어 보자
type FuncB = () => number;
type B = ReturnType<FuncB>;
// number는 string을 extends 하는가? === number는 string의 서브타입인가? false
// 따라서 never를 반환하고 B타입은 never타입이 된다.
// 하지만 우리가 원했던 거는 함수의 반환 타입을 반환하는 것이었다.
// 이 경우 infer를 사용할 수 있다.
type ReturnTypeByInfer<T> = T extends () => infer R ? R : never;
type inferedA = ReturnTypeByInfer<FuncA> // string
type inferedB = ReturnTypeByInfer<FuncB> // number
/**
 * 동작을 이해해 보자
 * FuncB는 화살표 함수타입이다. 매개변수는 없고 number 타입을 반환하는 함수 타입이다.
 * 이게 T로 들어갔다. () => number extends ()=> infer R 
 * () => number 함수는 () => infer R의 서브타입인가?
 * 여기서 infer R은 단어 그대로의 의미로 R을 추론해낸 타입을 할당하라는 것
 * T로 들어온 함수가 number를 반환하므로 R도 number로 추론된다. 즉 아래와 같이 된다.
 * () => number 함수는 () => number의 서브타입인가? 그럼 R이 number 이므로 number가 된다.
 */

// 아래는 number 그 자체가 들어갔는데
// number 는 () => infer R의 서브타입인가? 애초에 함수타입과 원시타입의 비교일뿐만 아니라
// R을 추론해낼 수도 없다. 함수의 반환 타입을 할당해야 하는데 함수가 아니기 때문에.
// true일 수가 없는 상황인 것.
type C = ReturnTypeByInfer<number>;

/**
 * 예제
 */

/**
 * 좀 더 자세하게 이해해 보자
 * 아래 예시에서, infer R을 하라는 건 R을 추론해 내라는 것이다.
 * Promise<number>가 Promise<R>의 서브타입이 되도록 하는 R을 추론해 내라는 말인 것.
 * 당연히 number 그 자체가 들어오면 반드시 참이 되므로 number가 되는 것
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.


// number를 떼 온 타입
type PromiseA = PromiseUnpack<Promise<number>>;
// string을 떼 온 타입
type PromiseB = PromiseUnpack<Promise<string>>;