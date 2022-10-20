# 이넘 (Enums)

### 1. 이넘 소개
- `특정 값들의 집합`을 의미하는 자료형
- 드롭다운 등 정해져있는 목록의 값들을 지정할 때 주로 사용

<br />

### 2. 숫자형 이넘
```
enum Shoes {
    // 별도의 값을 지정하지 않으면 숫자형으로 취급함 (0부터 순서대로)
    Nike,
    Adidas,
    Puma = 10,
    NewBal,
}

console.log(Shoes.Nike);  // 0 출력
console.log(Shoes.Adidas);  // 1 출력
console.log(Shoes.Puma);  // 10 출력
console.log(Shoes.NewBal);  // 11 출력
```

<br />

### 3. 문자형 이넘
```
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스',
}

console.log(Shoes2.Nike);  // '나이키' 출력
console.log(Shoes2.Adidas);  // '아디다스' 출력
```


<br />

### 4. 이넘 활용 사례

```
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}

// 이넘에서 제공하는 데이터만 넣을 수 있음
askQuestion(Answer.Yes); 
askQuestion('Yes');  // 에러
```

