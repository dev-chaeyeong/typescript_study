// 기본 형태
interface User {
    age: number;
    name: string;
}


// 변수에 인터페이스 활용
const user1: User = {
    age: 33,
    name: 'seho'
}


// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}


// 함수의 구조를 정의하는 인터페이스
interface SumFunction {
    (a: number, b:number): number;
}

let sumfunc: SumFunction;
sumfunc = function(a: number, b: number): number {
    return a + b;
}


// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}

const array: StringArray = ['a', 'b', 'c'];

// array[0] = 10 // 에러 발생
array[0] = '2';


// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

const ob: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(ob).forEach(function(value) {
    // 이런식으로 활용 가능
})


// 인터페이스 확장 (상속)
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
