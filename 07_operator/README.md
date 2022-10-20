# 연산자를 이용한 타입 정의

### 1. 유니온 타입 (Union Type)
- 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶을 때 사용
- '`|`' 이용하여 여러 타입을 쓸 수 있게 해줌
    ```
    let seho: string | number;
    type value = string | number;
    ```

- 예시1) 안좋은 예
    ```
    function logMessage(value: any) {   // any 사용 지양
        console.log(value);
    }

    logMessage('hello');
    logMessage(100);
    ```
- 예시2) 좋은 예
    ```
    function logMessage(value: string | number) {
        console.log(value);
    }

    logMessage('hello');
    logMessage(100);
    ```

<br />

### 2. 유니온 타입의 장점

- 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
    ```
    function logMessage(value: string | number) {
        if (typeof value === 'number') {
            value.toString();
        }
        if (typeof value === 'string') {
            return value.length;
        }
        throw new TypeError('value must be string or number');
    }
    ```

<br />

### 3. 유니온 타입의 특징 
### 4. 인터섹션 타입 소개

- 유니온(|) 타입과 인터섹션(&) 타입
    ```
    let cpt: string | number | boolean;  // 유니온 (or조건)
    let capt: string & number & boolean;  // 인터섹션 (and조건)
    // capt: never(불가능)타입이 됨 
    ```
- 예제
    ```
    interface Developer {
        name: string;
        skill: string;
    }

    interface Person {
        name: string;
        age: number;
    }
    ```

- 유니온(|) 타입 활용
    - 공통속성만 접근 가능 (*주의)
    - 별도의 타입가드 필요함
    ```
    function askSomeone(someone: Developer | Person) {
        someone.name = "Jason"
        someone.skill = "Python" // 에러 발생
        someone.age = 10 // 에러 발생
    }
    ```

- 인터섹션(&) 타입 활용
    - 모든 속성을 포함함
    ```
    function askSomeone2(someone: Developer & Person) {
        someone.name = "Jason"
        someone.skill = "Python" // ok
        someone.age; // ok
    }
    ```
- 실무에서는 인터섹션보다 유니온 타입을 더 많이 사용함

<br />

### 5. 유니온 타입과 인터섹션 타입의 차이점
- 유니온 타입
    - 타입가드 작업 필요
    - 타입을 선택할 수 있음 (Developer 또는 Person)
    ```
    askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
    askSomeone({ name: '캡틴', age: 100 });
    // 모두 정상 작동
    ```

- 인터섹션 타입
    - 두 개의 타입을 모두 포함하는(합집합) 새로운 타입을 만들게 됨
    ```
    askSomeone2({name: '디벨로퍼', skill: '웹 개발'});  // 에러발생
    askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 31 }); 
    ```
