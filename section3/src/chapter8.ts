/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
// 앞서 배운 내용처럼 in을 통해 타입을 구분하면 코드가 직관적으로 와닿지 않는다.
// function login(user: User) {
//     if('kickCount' in user){
//         // admin 타입
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
//     } else if ('point' in user){
//         // member 타입
//         console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
//     } else {
//         // guest 타입
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
//     }
// }

// 각 타입에 tag를 추가해서 직관적으로 타입을 구분하자
function login(user: User) {
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}

// switch case를 쓰면 더 직관적이다.
function login2(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    case "GUEST":
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
  }
}

/**
 * 복습 겸 한 가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

// 아래와 같이 하면 error와 response가 타입을 좁혔음에도 null일 수가 있어 뒤에 ?가 붙는다.
// 이는 state별로 error 존재 여부, response 존재 여부를 구분한 게 아니라
// 각각의 타입이 모두 error를 가질 수도, response를 가질 수도 있게 설계했기 때문이다.
// 그렇다고 !를 통해 단언하면 또 직관적이지가 않다. 별로 좋지 않음.
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };
// function processResult(task: AsyncTask) {
//   switch (task.state) {
//     case "LOADING": {
//         console.log('로딩중');
//         break;
//     }
//     case "FAILED": {
//         console.log(`에러 발생 : ${task.error?.message}`)
//         break;
//     }
//     case "SUCCESS": {
//         console.log(`성공 : ${task.response?.data}`);
//     }
//   }
// }
// 대신 각각의 타입을 정의하고, 이들의 유니온 타입으로 AsyncTask를 아래와 같이 정의하는 것이 좋다.
// 이 경우 타입이 좁혀지면 갖게될 프로퍼티들을 정확하게 분리할 수 있다.
type LoadingTask = {
    state: "LOADING";
}

type FailedTask = {
    state: "FAILED",
    error: {
        message: string;
    }
}

type SuccessTask = {
    state: "SUCCESS";
    response : {
        data: string;
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
        console.log('로딩중');
        break;
    }
    case "FAILED": {
        console.log(`에러 발생 : ${task.error.message}`)
        break;
    }
    case "SUCCESS": {
        console.log(`성공 : ${task.response.data}`);
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
