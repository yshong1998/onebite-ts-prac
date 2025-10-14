/**
 * 인터페이스 확장 (= 상속)
 */

interface Animal {
  name: string;
  color: string;
}
// 인터페이스는 또 다른 인터페이스뿐만 아니라 type도 확장할 수 있다.
type temp = {
    temp? : string;
}

interface Dog extends Animal, temp {
  // string이었지만 이번에 hello 라는 string 리터럴로 재정의가 가능
  // 당연하지만 상위 인터페이스에서 해당 변수의 타입의 서브 타입으로만 재정의할 수 있다.
  // name: number -> 불가능
//   name: "hello";
  isBark: boolean;
}

const dog : Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 상속도 가능하다
interface DogCat extends Dog, Cat {
    
}

const dogCat : DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
}
