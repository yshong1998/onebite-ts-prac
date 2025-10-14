/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';
type Animal = "dog" | "cat" | "chicken";
type ColoredAnimal = `${Color} - ${Animal}`; // 타입을 조합 형식으로 정의 가능

// const coloredAnimal : ColoredAnimal = 'green - cat';
// const coloredAnimal : ColoredAnimal = 'black - chicken';