// object <- 이 값이 객체라는 정보 외에는 다른 역할이 없다.
// let user:object = {
//     id : 1,
//     name: "이정환",
// }
// 따라서 object에는 뭐가 아무 것도 없다. 그래서 object의 속성에 접근하려고 하면 에러가 난다.
// user.id; - error
// 따라서 아래와 같이 객체 리터럴 타입을 사용해야 한다.
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// 이 객체를 이루는 프로퍼티나 메서드가 어떻게 생겼는지, 이 객체의 구조를 기준으로 타입을 정의한다.
// 이러한 타입스크립트의 특징을 구조적 타입 시스템이라고 한다.
// 프로퍼티를 기준으로 타입을 결정하기 때문에 Property Based Type System 이라고도 한다.
// 자바처럼 이름만으로 타입을 정의하는 걸 명목적 타입 시스템이라고 부른다.
let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// 가끔 프로퍼티들 중에 값이 없어도 되는 변수들이 있다.
user = {
  name: "홍길동", // 하지만 이렇게 name만 정의하면 오류가 난다.
  // 따라서 user를 정의한 상단 코드에서 id 뒤에 ?를 붙이면 이는 Optional Properyty가 된다. 객체를 만들 때 없이도 만들 수 있다는 뜻
};

// 처음 객체를 만든 이후 프로퍼티가 변경되면 안 되는 경우
// readonly 키워드를 사용할 수 있다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API Key",
};

// config.apikey = "hacked"; // error - readonly이기 때문에 변경 불가
