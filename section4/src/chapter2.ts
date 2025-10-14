/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 둘 다 매개변수는 없으므로 매개변수는 상관이 없다.
a = b; // 가능, a의 반환값의 타입은 10의 상위타입이기 때문에 호환된다. 업캐스팅 가능
// b = a; // 불가능, b의 반환값의 타입은 number의 하위타입이기 때문에 호환되지 않는다. 다운캐스팅 불가

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};
// 불가능, C타입의 매개변수타입인 number는 D타입의 매개변수타입인 10의 상위 타입이다.
// c는 C타입이고, 그렇다면 10 이외의 다른 number들도 받을 수 있는 함수여야 한다.
// 그런데 d는 10만 받을 수 있는 함수 인스턴스이다.
// 따라서 d는 c가 수행할 수 있어야 하는 다른 매개변수들에 대한 처리를 하지 못 하는 함수이므로 불가
// c = d;

// 반대의 논리로 가능, c의 매개변수타입인 number는 D타입의 매개변수타입인 10의 상위 타입이므로,
// d는 D타입이고, 그렇다면 10을 처리할 수 있도록 함수 시그니처가 정의되어 있는 함수라면 모두 올 수 있다.
// C는 10을 포함한 모든 number를 처리할 수 있도록 함수 시그니처가 정의되어 있다.
// 따라서 c는 d가 수행할 수 있어야 하는 10이라는 매개변수에 대한 처리를 할 수 있는 함수이므로 가능.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

dogFunc = animalFunc; // 가능
// 불가능. animalFunc는 매개변수로 animal을 받는데,
// animal에는 name만 있고 dog는 color가 추가로 있다.
// dogFunc는 color도 log로 찍어야 하는데 Animal은 그런 게 없다.
// animalFunc = dogFunc;
// 아래와 같은 걸 시키는 것과 같은 것이다.
// let testFunc = (animal: Animal) => {
//     console.log(animal.name);
//     console.log(animal.color);
// }

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a:number, b: number) => void;
type Func2 = (a: number) => void;

let func1 : Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 가능, 매개변수가 더 많은 쪽에 더 적은 함수를 할당하는 건 괜찮다. a와 b를 받지만 a만 쓸 수도 있어서 그런 듯
// func2 = func1; // 불가능, 매개변수가 더 많은 걸 더 적은 함수를 할당하는 건 안 된다.