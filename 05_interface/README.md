# interface


### 0. 기본 예시
```
interface User {
    age: number;
    name: string;
}
```

### 1. 변수에 인터페이스 활용
```
const user1: User = {
    age: 33,
    name: 'seho'
}
```

### 2. 함수에 인터페이스 활용
```
function getUser(user: User) {
    console.log(user)
}
```

### 3. 함수의 구조를 정의하는 인터페이스
```
interface SumFunction {
    (a: number, b:number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}
```

### 4. 인덱싱 방식을 정의하는 인터페이스
```
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];

arr[0] = 10;    // 에러 발생
arr[0] = '2';
```

### 5. 인터페이스 딕셔너리 패턴
```
interface StringRegexDictionary {
    [key: string]: RegExp
}

const obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
```

### 6. 인터페이스 확장 (상속)
- `extends` 사용
```
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const capt: Developer = {
    name: 'Captain',
    age: 31,
    language: 'JS'
}
```