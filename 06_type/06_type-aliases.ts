// 예제 1
interface IPerson {
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
}

const seho: TPerson = {
    name: '세호',
    age: 30
}

const seho2: IPerson = {
    name: '세호',
    age: 30
}


// 예제 2
type MyString = string;
const s: MyString = 'hello';


// 예제 3
type Todo = {
    id: string;
    title: string;
    done: boolean;
}
function getTodo(todo: Todo) {
    //
}
