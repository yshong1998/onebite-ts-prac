// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true]; // 제네릭을 통한 타입 배열 정의 가능

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 이렇게 | 를통해 여러 타입의 요소를 받는 방식을 유니온 타입이라고 한다.
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플 - ts에서만 지원하는 타입
// 길이와 타입이 고정된 배열
// 길이가 2이고, 첫번째 요소는 number, 두번째 요소는 number인 튜플
let tup1:[number, number] = [1,2];
// tup1 = [1,2,3]; - 길이가 다르므로 에러
// tup1 = [1,'2']; - 두번째 요소의 타입이 다르므로 에러
let tup2: [number, string, boolean] = [1, "2", true];
// 사실 이렇게 만들어 두기는 했지만 컴파일 후 js에서는 그냥 배열이다.
tup1.push(1); // 튜플에 요소 추가 가능
tup1.pop(); // 튜플에서 요소 제거 가능
// 개수가 변해도 일단은 배열로 간주하기 때문에 에러가 나지 않는다.

// 튜플이 유용한 상황 - 아래와 같이 객체의 배열에 들어와야 하는 요소들의 타입이 정해져 있을 때
// 아래와 같이 정의하면 순서를 바꿔넣거나 타입을 잘못 집어넣는 등의 실수를 방지할 수 있다.
const users :[string,number][] = [
    ["유저1", 1],
    ["유저2", 2],
    ["유저3", 3],
    ["유저4", 4],
    // [5, "최아무개"],
]