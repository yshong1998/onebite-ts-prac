function func() {
}
let user1 = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997-01-07",
    bio: "안녕하세요",
    location: "부천시",
};
// 위와 같이 객체의 타입이 길어지면 같은 타입의 객체를 또 만들 때 코드가 너무 길어진다.
// 따라서 타입 별칭(type alias)을 사용한다.
let user2 = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997-01-07",
    bio: "안녕하세요",
    location: "부천시",
};
// 타입 별칭으로 User를 만들어 놓고 재사용
let user3 = {
    id: 3,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997-01-07",
    bio: "안녕하세요",
    location: "부천시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: 'us',
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410, // 반드시 정의해야 하는 필드
    UnitedState: 840, // 이하 선택
    UnitedKingdom: 826,
};
export {};
