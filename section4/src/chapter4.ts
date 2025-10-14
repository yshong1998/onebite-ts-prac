/**
 * 사용자 정의 타입 가드
 */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 아래 방식의 타입 가드는 아쉽다.
// function warning(animal: Animal){
//     if("isBark" in animal){
//         // 강아지
//     } else if ("isScratch" in animal){
//         // 고양이
//     }
// }

// 대신에 아래와 같이 Dog인지 확인하는 타입 가드 함수를 만들어 활용할 수 있다.
function isDog(animal: Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined;
}

//`매개변수명 is 타입`은 사용자 정의 타입 가드 문법.
// 이 함수가 `true`를 반환하면 TypeScript는 해당 매개변수가 지정된 타입임을 인지하고
// 타입 좁히기를 수행.
function isCat(animal: Animal): animal is Cat {
    let isCat = (animal as Cat).isScratch !== undefined;
    return isCat;
}

function warning(animal: Animal){
    if(isDog(animal)){
        // 강아지

    } else if (isCat(animal)){
        // 고양이
    }
}