# 첫 번째 프로젝트 - 할 일 관리 애플리케이션

## 

- node_ modules 설치
    ```
    npm i
    ```

- 타이핑(typing)  
    - 타입이 정의되지 않은 코드에 타입을 입혀주는 행위

- npm으로 프로젝트 초기화
    ```
    npm init -y
    ```

- `any` 타입   
    - 모든 타입을 통칭하는 타입  
    - 처음에 any 타입으로 지정 후, 타입을 구체적으로 지정해 나가는 방법 추천

- `void` 타입  
    - 반환값이 없다는 걸 명시적으로 지정해 줄 때 사용

- `type`
    - object 의 타입을 지정하는 방법 중 하나
    ```
    type ToDo = {
       id: number;
       title: string;
       done: boolean;
    }
    ```

- `interface`
    - object 의 타입을 지정하는 방법 중 하나
    ```
    interface ItoDo {
        id: number;
        title: string;
        done: boolean;
    }
    ```


