/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 * -> 사용법 : Pick<Type, 'props1' | 'props2' | ...>
 */

// Pick 타입을 직접 구현해 보자
// K를 그냥 두면 함수도 되고 객체도 되고 다 들어올 수 있어서
// 추론을 할 수가 없어 타입 좁히기가 안 된다. T의 프로퍼티들에 대한 동작을 수행 불가
// 아래와 같이 K를 T가 가진 프로퍼티들만 들어올 수 있도록 해 주어야 한다.
// Post의 경우 'title' | 'tags' | 'content' | 'thumbnailURL' 을 프로퍼티로 갖고
// 아래 legacyPost에서는 'title' | 'content' 이니까 둘만 뽑아내면
// 'title' | 'content' 가 'title' | 'tags' | 'content' | 'thumbnailURL'의 서브타입인가?
// 뒷부분 유니온 타입이 앞 부분 유니온 타입을 포함하므로 참이 된다. 결과적으로
// Post의 프로퍼티 중 이 둘만을 프로퍼티로 갖는 타입으로 legacyPost의 타입이 결정된다.
// 만약 T에 없는 프로퍼티명을 넣으면 오류가 나고 이를 알려준다.
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K> - Pick의 반대동작
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
// 아래처럼 하면 제목만 빼면 되는데 나머지를 다 적어야 하는 불편이 있다.
// const noTitlePost : Pick<Post, "content" | "tags" | "thumbnailURL"> = {
//     content: "",
//     tags: [],
//     thumbnailURL: "",
// }
// 따라서 omit을 사용해 title만 빼는 쪽으로 바꿔주자
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Exclude<앞 유니온 타입, 뺄 유니온 타입> 의 방식으로 동작. 위에서 Exclude 후를 보면
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'> 이 된다.
// 이후 Post에서 세 개의 프로퍼티만 뽑아오게 되므로 의도대로 title만 뺀 타입이 반환되게 된다.
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V> - 인덱스 시그니처처럼 유연하지만 그것보다는 제한이 있는 타입
 *
 */

// 아래는 중복이 심하다.
// 이를 Record 타입으로 해소할 수 있다.
// type Thumbnail = {
//     large: {
//         url: string;
//     };
//     medium: {
//         url: string;
//     };
//     small : {
//         url: string;
//     };
//     watch: {
//         url: string;
//     }
// }
// Record<K,V>는 K에 프로퍼티 유니온 타입을 받고, 각 프로퍼티 안에 value를 받는다.
// 여기서는
// large : {url:string}
// medium : {url:string} ... 이런식으로 K,V 쌍으로 생성된다. 현재 value가 객체인 상황.
// 이제 한 번 직접 Record를 구현해 보자
// K에 any 제약을 준 이유는 적어도 K에 들어오는 타입은 어떤 객체로부터 추출해 온
// 유니온 타입이라는 것을 의미
type Record<K extends keyof any, V> = {
    [key in K] : V
}

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
