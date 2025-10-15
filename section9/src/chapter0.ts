/**
 * 조건부 타입
 */

// 조건에 따라 타입을 결정하는 타입

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type objB = {
    a: number;
    b: number;
}
// 조건문 ? 참일 때 타입 : 거짓일 때 타입; - 이게 가장 기본 문법
type B = objB extends ObjA ? number: string;

// 보통 제네릭과 함께 쓸 때 아주 유용하다
/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number? string: number;

let varA : StringNumberSwitch<number>; // string이 된다
let varB : StringNumberSwitch<string>; // number가 된다.

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any){
    if(typeof text === 'string'){
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

let result = removeSpaces("h e l l o ");
result
let result2 = removeSpaces(undefined);