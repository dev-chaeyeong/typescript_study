# 타입스크립트 기초 - 변수와 함수 타입 정의하기

## 기본 타입

- 12가지 타입 (https://joshua1988.github.io/ts/guide/basic-types.html)

  - Boolean
  - Number
  - String
  - Object
  - Array
  - Tuple
  - Enum
  - Any
  - Void
  - Null
  - Undefined
  - Never

- 참고: JS 타입은 7가지 - 원시타입(boolean, number, string, undefined, null, symbol), 객체 타입

```
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
```

<br />

## 함수 타입

```
// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);


// 함수의 반환값에 타입을 정의하는 방식
function sum2(): number {
    return 10;
}
sum2();


// 함수에 타입을 정의하는 방식
function sum3(a: number, b: number): number {
    return a + b;
}
sum3(10, 20);
sum3(10, 20, 30, 40);  // 에러발생 (JS 에서는 에러 발생하지 않음)


// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}
log('hello', 'world');
log('hello');  // 인자 생략 가능
```
