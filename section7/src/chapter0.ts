/**
 * 제네릭 일반적인 포괄적인
 */

// 제네릭 함수
// T를 타입 변수라고 한다.
function func<T> (value: T): T{
    return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

let arr = func<[number, number, number]>([1,2,3]);