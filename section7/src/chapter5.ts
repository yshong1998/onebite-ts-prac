/**
 * 프로미스
 */

// new Promise<작업의 결과값의 타입>((resolve, reject) => {
// });
// 작업의 결과가 number 타입이라고 선언해 두었기 때문에
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);
        reject("~~ 때문에 실패")
    }, 3000)
});

// 여기서 then으로 받아온 response의 타입이 원래는 unknown이지만
// 제네릭으로 해당 타입이 number를 반환함을 명시해 두었기 때문에
// number 타입의 연산 * 10이 가능해진 것.
promise.then((response) => {
    console.log(response * 10); // 20
})

promise.catch((err) => {
    if(typeof err === 'string'){
        console.log(err);
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

// 이게 중요하네
// 함수의 반환 타입에 정의하는 게 일반적
function fetchPost() : Promise<Post> {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    });
}
const postRequest = fetchPost();
postRequest.then((post) => {
    post.id
})
