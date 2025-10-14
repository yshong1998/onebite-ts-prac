// 타입 별칭
// 타입은 타입스크립트만의 문법이기 때문에 컴파일 결과 자바스크립트 파일에서는 모두 제거된다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  // 이 경우 아래 타입이 User 타입으로 활용된다. 오버라이딩되는 것.
  type User = {}; // 함수 내부에서만 쓰이는 타입 별칭
}

let user1: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997-01-07",
  bio: "안녕하세요",
  location: "부천시",
};
// 위와 같이 객체의 타입이 길어지면 같은 타입의 객체를 또 만들 때 코드가 너무 길어진다.
// 따라서 타입 별칭(type alias)을 사용한다.
let user2: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997-01-07",
  bio: "안녕하세요",
  location: "부천시",
};

// 타입 별칭으로 User를 만들어 놓고 재사용
let user3: User = {
  id: 3,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997-01-07",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
// 규칙을 이용해서 유연하게 타입을 정의하는 문법을 인덱스 시그니처라고 한다.

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number | string; // 여러 타입이 가능하도록 할 수도 있다.
  // 반드시 정의해야 하는 필드가 있으면 타입 안에 명시함으로써
  // 객체를 만들 때 반드시 정의하도록 할 수 있다.
  Korea: number; // 반드시 위의 number와 Korea의 타입이 호환되어야 한다.
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410, // 반드시 정의해야 하는 필드
  UnitedState: 840, // 이하 선택
  UnitedKingdom: 826,
};
