/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2,4,6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
// callback: (item:T) => U에서, (item:T)는 (it)에 대응되기 때문에
// 배열이 문자열 배열인 상황이므로 it는 문자열로 추론된다.
// 이후 => U에서 U는 함수의 리턴 타입이므로 콜백함수의 리턴 타입을 따라가게 된다.
// 따라서 toUpperCase()의 리턴 타입이 string이므로 첫 번째는 string 배열이 반환되고
// parseInt()의 리턴 타입이 number이므로 두 번쨰는 number배열이 반환된다.
map(["hi", "hello"], (it) => it.toUpperCase()); // 들어오는 타입과 나가는 타입이 같은 경우
map(["hi", "hello"], (it) => parseInt(it)); // 들어오는 타입과 나가는 타입이 다른 경우

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => {
  console.log(it);
});

function forEach<T>(arr:T[], callback:(item: T) => void) {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
})

forEach(['1,2,3', '4,5,6'], (it) => {
    it;
} )