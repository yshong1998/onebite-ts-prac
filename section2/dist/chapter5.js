// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입
// 아래는 숫자가 값으로 할당되는 숫자형 enum 이라고 한다.
var Role;
(function (Role) {
    // 자동으로 첫 번째 값부터 1씩 증가하는 숫자가 할당됨
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
    // 이 경우 첫 번째는 0, 두 번째는 10, 세 번째는 11이 할당된다.
    // ADMIN,
    // USER = 10,
    // GUEST,
    // 기본적으로 0부터 시작하지만 중간에 값을 변경해주면 그 다음부터는 해당 값부터 1씩 증가된 값이 할당된다.
})(Role || (Role = {}));
// enum은 기본적으로 숫자형이지만 문자열형으로도 정의할 수 있다.
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
