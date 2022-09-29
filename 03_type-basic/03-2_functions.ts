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
sum3(10, 20, 30, 40); // JS 에서는 에러 발생하지 X

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}
log("hello", "world");
log("hello"); // 인자 생략 가능
