/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

// 여기서 author이라는 '문자'가 인덱스드 엑세스 '타입'이다.
// 문자열임에도 불구하고 타입의 이름으로 동작하기 때문에 직관적이지는 않은 듯
// 타입["타입명"] - 꼭 존재하는 프로퍼티명을 넣어야 한다.
// 참조에 참조도 가능하다 타입["타입명"]["타입명"]...
function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

// 배열타입[숫자 아무거나, 또는 number] - 이렇게 하면 배열의 요소의 타입을 추출해 온다.
// 1이든 100이든 뭐든 숫자면 상관 없다. 숫자도 결국 number 리터럴 타입이기 때문이다.
const post : PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};
printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; 불가능, 길이가 정해져있기 때문에 오류남
type TupNum = Tup[number]; // 튜플 모든 타입의 최적 유니온 타입을 반환한다.