// void
// void -> 공허 -> 아무 것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1() : string {
    return "hello";
}

function func2() : void {
    console.log("hello");
}

let a: void;
// a = null; // strictNullChecks 옵션이 켜져 있으면 null은 할당할 수 없다. 반대로 꺼져 있으면 할당 가능
a = undefined; // void 타입에는 undefined만 할당할 수 있다.

// void가 필요한 이유는 함수에서 아무것도 반환하지 않는다는 것을 명시적으로 나타내기 위해 필요하기 때문이다.
// 만약 반환 타입을 명시하지 않으면, 함수에서 아무것도 반환하지 않는 경우 자동으로 void 타입이 된다.
// undefined를 반환하면 되는 게 아닌가 라는 생각이 들 수 있지만 이 경우 반드시 undefined를 '반환'해야 한다.
// 즉, return undefined; 라고 명시적으로 작성해야 하고 반환값이 undefined로 '존재'한다.
// 따라서 반환 타입이 undefined라는 것이 아니라, 아무 것도 반환하지 않는다는 의미로 void 타입이 필요하다.
function func3() : undefined{
    console.log("hello");
    return undefined;
}

function func4() : null{
    console.log("hello");
    return null;
}

// never
// never -> 존재하지 않는, 불가능한 타입
// 절대로 정상적으로 종료될 수가 없어서 이 함수가 무언가를 반환하는 것 자체가
// 발생할 수 없는 상황이라는 것을 정의하는 타입이 never 타입이다.
function func5() : never {
    while(true) {

    }

}

// 아래와 같이 활용
function func6() : never {
    throw new Error();
}

