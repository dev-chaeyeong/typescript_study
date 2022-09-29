# 타입스크립트 시작하기

## 1. 타입스크립트 프로젝트 시작하는 방법

- 설치  
  npm i typescript -g
- ts -> js 파일로 변환하는 작업  
  컴파일(compile)
- tsc index.ts  
  컴파일된 js 파일이 생성됨

<br />

## 2. 타입스크립트 설정 파일

- 웹팩 :

  - 웹팩 핸드북  
    https://joshua1988.github.io/webpack-guide/

- tsconfig.json
  - 타입스크립트 컴파일 시 부가적인 옵션 적용
  - 타입스크립트 설정 파일 옵션  
    https://www.typescriptlang.org/docs/handbook/compiler-options.html

```
{
    "compilerOptions": {
        "allowJs": true,        // JS 허용
        "checkJs": true,        // JS 에서 에러체크 허용
        "noImplicitAny": true,  // any 타입 금지
    }
}
```

- 기타 옵션 참고  
  https://codingapple.com/unit/typescript-tsconfig-json/

<br />

## 3. 타입스크립트 플레이그라운드 사이트 소개

- 타입스크립트 플레이그라운드

  - https://www.typescriptlang.org/play
  - TS -> JS 컴파일

- 바벨 사이트
  - https://babeljs.io/repl
  - 최신 JS문법 -> 이전 JS 문법 컨파일(ex. ES6 -> ES5)
