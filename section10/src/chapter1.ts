/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/**
 * 직접 Partial 타입을 구현해 보자
 * 특정 타입 T를 받아서 다른 타입으로 변환하는 경우 맵드 타입을 쓰자.
 * key of Post -> title | tags | content | thumbnailURL 의 유니온 타입이 반환된다.
 * 이후 key in title | tags | content | thumbnailURL 의 동작은
 * 왼쪽의 key 변수에 오른쪽의 유니온 타입들이 한 번씩 할당되게 된다. 일종의 iterating
 * 그리고 T[key]는 인덱스드 액세스 타입이다.
 * T 타입이 가진 key 프로퍼티에 인덱스 방식으로 접근해 해당 프로퍼티의 타입을 반환한다.
 * key가 iterating되면서 title | tags | content | thumbnailURL가 한번씩 할당되니까
 * Post[title], Post[tags], Post[content], Post[thumbnailURL]이 한번씩 할당된다.
 * 그러면 Post의 프로퍼티들이 모두 복사되었다. 이들을 모두 선택적 프로퍼티로 바꾸려면
 * 좌측이 key, 우측이 type이므로 key 뒤에 ?를 붙여주면 된다.
 */
type Partial<T> = {
    [key in keyof T]? : T[key];
}


// Post의 모든 프로퍼티들을 선택적 프로퍼티로 만들어주는 타입
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 * -> Partial과 반대 동작으로 보면 된다.
 */

/**
 * Required 타입을 직접 구현해 보자
 * 논리는 Partial 타입과 똑같지만 -?가 혼란스러운데
 * ?가 붙은 프로퍼티에서 ?를 모두 빼라는 뜻이다. 그냥 그렇구나 하면 된다.
 */

type Required<T> = {
    [key in keyof T]-? : T[key];
}

const withThumbnailPost : Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://..."
}

/**
 * ReadOnly<T>
 * -> 읽기 전용, 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

/**
 * Readonly 타입을 직접 구현해 보자.
 */
type Readonly<T> = {
    readonly [key in keyof T] : T[key];
}

const readonlyPost : Readonly<Post> = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
}

// readonlyPost.content = ""; // 불가능