/**
 * Unknown 타입 - 전체 집합
 */

function unknownExam() {
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;
    let unknownVar: unknown;

    // let num : number = unknownVar;
    // let str : string = unknownVar;
    // let bool : boolean = unknownVar;
}

/**
 * Never 타입 - 모든 집합의 부분 집합 (= 공집합)
 */

function neverExam (){
    function neverFunc() : never {
        while (true) {}
    }

    // never 타입은 모든 타입의 부분 집합이기 때문에 모든 타입에 할당할 수 있다.
    // 즉, never 타입은 모든 타입에 할당할 수 있다.
    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc();
    // 하지만 never 타입을 제외한 다른 타입을 never 타입에 할당할 수는 없다.
    // let never1 : number = 10;
    // let never2 : string = "string";
    // let never3 : boolean = true;
}

function voidExam() {
    function voidFunc() {
        console.log("hi");
    }
    let voidVar: void = undefined;
}

/**
 * any 타입 - 치트키 타입, 업캐스팅 다운캐스팅 모두 가능, never 제외
 */

function anyExam() {
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;
    // neverVar = anyVar; // 불가
}