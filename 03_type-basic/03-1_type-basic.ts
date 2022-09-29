// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
const str: string = "hello"; // : 을 이용하여 타입을 정의하는 방식 -> 타입 표기 (Type Annotation)

// TS 숫자
const num: number = 10;

// TS 배열
const arr: Array<number> = [1, 2, 3]; // 배열 안에 number 만 가능
const arr2: Array<string> = ["Captain", "Thor", "Hulk"];
const arr3: number[] = [1, 2, 3];

// TS 튜플
const tuple: [string, number] = ["gangnam", 100]; // 모든 인덱스의 타입을 각각 정의할 수 있음

// TS 객체
const obj: object = {};
const obj2: object = {
  name: "captain",
  age: 100,
};
const obj3: { name: string; age: number } = {
  // 객체를 더 구체적으로 정의
  name: "captain",
  age: 100,
};

// TS 진위값
const show: boolean = true;
