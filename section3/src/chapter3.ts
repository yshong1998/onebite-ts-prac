/**
 * 기본 타입 간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅 - 가능
// num2 = num1; // 다운캐스팅 - 불가능

/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
 * 객체 타입 간의 호환성은 프로퍼티를 기준으로 판단한다.
 * 즉, 프로퍼티가 더 많은 객체 타입을 프로퍼티가 더 적은 객체 타입에 할당할 수 있다.
 * (업캐스팅)
 * 반대로 프로퍼티가 더 적은 객체 타입을 프로퍼티가 더 많은 객체 타입에 할당할 수 없다.
 * (다운캐스팅)
 * 
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color : string;
    breed: string;
}

let animal : Animal = {
    name: "기린",
    color: "yellow",
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
}

animal = dog; // 업캐스팅 - 가능
// dog = animal; // 다운캐스팅 - 불가능

type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book : Book;
let programmingBook : ProgrammingBook = {
    name: "한일 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
}

book = programmingBook;
// programmingBook = book; // error

/**
 * 초과 프로퍼티 검사
 * -> 객체 리터럴을 변수에 바로 할당할 때 발생하는 검사
 * -> 업캐스팅이 일어나는 상황에서만 발생
 * -> 즉, 프로퍼티가 더 많은 객체 리터럴을 프로퍼티가 더 적은 객체 타입에 할당할 때만 발생
 * 대신 위의 book = programmingBook; 처럼 이미 만들어진 객체를 할당하는 경우에는 발생하지 않는다.
 */
let book2 : Book = {
    name: "한일 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
}

function func (book: Book) {

}

func({
    name: "한일 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", // error - 초과 프로퍼티 검사 발생
})
func(programmingBook); // 이미 만들어진 객체를 할당하는 경우에는 발생하지 않는다.