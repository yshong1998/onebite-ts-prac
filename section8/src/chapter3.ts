/**
 * 맵드 타입
 * 주의할 점 : 맵드 타입은 인터페이스에서 사용 불가, 반드시 타입에만 사용 가능
 */

interface User {
    id: number;
    name: string;
    age: number;
}
// 문법을 설명해 보면
// 대괄호 안은 key가 될 수 있는 타입들을 정의하는 부분
// 대괄호 밖은 키가 어떤 타입의 키로 동작할 것인지
// 결국 아래 코드는
// User['id'], user['name'], user['age']
// number       string        number   이렇게 세 가지 타입을 프로퍼티로 갖는
// 타입이 된다. 즉 User와 같은 타입이 된다.
// 이후 뒤에 ?를 붙여주면 모든 프로퍼티들이 선택적 프로퍼티가 된다.
// 따라서 원하는 프로퍼티만으로 구성되는 타입이 된다.
type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
// [key in 'id' | 'name' | 'age']: User[key];
}
// 그런데 User의 필드가 변할 때마다 이걸 변경하는 게 비효율적이니까
// keyof 연산자를 사용할 수 있다.
// key라는 변수명 말고 다른 변수명 써도 된다.
type PartialUser2 = {
    [key in keyof User]?: User[key];
}

// 아래는 각 키들을 모두 boolean으로 정의하는 맵드 타입 활용 방식이다.
// 결국 :의 뒤는 key들의 타입이 될 타입이 오는 것. User[key]는 User의 프로퍼티를
// 복사하여 동적으로 넣은 것이다.
type BooleanUser = {
    [key in 'id' | 'name' | 'age']: boolean;
}

// 모든 프로퍼티가 readonly로 바뀐 객체
type ReadOnlyUser = {
    readonly [key in keyof User] : User[key];
}


// 한 명의 유저 정보를 불러오는 기능
function fetchUser() : User {
    // ... 기능
    return {
        id: 1,
        name: "이정환",
        age: 27,
    };
}

function updateUser(user: User){
    // ... 수정하는 기능
}

updateUser({
    id : 1,
    name: "이정환",
    age: 25
});