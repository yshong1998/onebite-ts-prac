/**
 * 인터페이스
 */

interface Person {
    readonly name : string;
    age?: number;
    // sayHi : () => void; // 함수 타입 표현식 : sayHi는 반환 타입이 void인 함수다 라는 의미
    // 아래는 호출 시그니처, 선언 자체를 호출의 모양으로 하는 것.
    sayHi() : void; // sayHi를 호출한 결과가 void라는 의미. 호출한다는 점에서 함수임을 알 수 있음.
    // 다만 메서드 오버로딩을 구현하고 싶다면 호출 시그니처를 사용해야 한다.
    sayHi(a: number, b: number): void;
    // 함수 타입 표현식에서 오버로딩을 만들어 본다면 아래와 같게 되는데
    // sayHi : () => void;
    // sayHi : (a: number, b: number) => void;
    // 이건 sayHi가 변수가 하나고 거기에 함수를 두 번 할당하는 모양이기 때문에 오버로딩이 안 된다.
}

const person : Person = {
    name: "이정환",
    sayHi : function() {
        console.log("HI");
    }
//     // 구현 시그니처 (가장 일반적인 형태로 하나만 정의)
//     sayHi(a?: number, b?: number): void {
//     if (typeof a === "number" && typeof b === "number") {
//       console.log(`HI with numbers: ${a}, ${b}`);
//     } else {
//       console.log("HI");
//     }
//   }
}

// person.name = "홍길동"; // readonly라 불가
person.sayHi();
person.sayHi(1, 2);