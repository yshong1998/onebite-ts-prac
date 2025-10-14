/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 *  화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 기본값을 주면 기본값으로 추론한다.
 * 기본값과 다른 타입으로 정의하면 오류난다.
 * 필수매개변수가 선택 매개변수보다 뒤에 올 수 없다.
 */
function introduce(name: string = "이정환", age:number, tall?: number, /*age: number*/){
    console.log(`name: ${name}`);
    if(typeof tall === 'number'){
        console.log(`tall : ${tall + 10}`); // tall의 타입이 number | undefined이므로 타입 좁히기가 필요
    }
}

introduce("이정환", 27, 175);

introduce("이정환", 27);

// 가변길이 매개변수
function getSum(...rest: number[]){
    let sum = 0;
    rest.forEach(it => sum += it);
    return sum;
}

// 불변길이 매개변수
function getSum2(...rest: [number, number, number]){
    let sum = 0;
    rest.forEach(it => sum += it);
    return sum;
}

getSum(1,2,3); // 6
getSum(1,2,3,4,5); // 15
