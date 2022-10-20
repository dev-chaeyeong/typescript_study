# 클래스 (Class)
- 기본 문법
    - private : class 내부에서만 사용가능
    - public : class 외부에서도 사용가능
    - readonly : 읽기전용
    ```
    class Person {
        private name: string;
        public age: number;
        readonly log: string;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    ```