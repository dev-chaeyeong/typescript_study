// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);  // 숫자 10
// logText('하이');  // 문자열 하이
// logText(true);  // 진위값 true


function logText<T>(text: T): T {
    console.log(text);
    return text
}

// 호출하는 시점에 타입을 넘겨줌
logText('하이');

// 넘길 인자의 타입을 string 으로 제네릭으로 정의함
logText<string>('하이');

// 기존 타입 방식
function logText2(text) {
    console.log(text);
    return text;
}
logText2('a');
logText2(10);
logText2(true);


function logText3(text: string | number) {
    console.log(text);
    text.
    return text;
}

logText3('a');
logText3(10);

// 예제
interface Email {
    value: string;
    selected: boolean;
}
interface ProductNumber {
    value: number;
    selected: boolean;
}

interface TrueFalse {
    value: boolean;
    selected: boolean;
}
interface DropdownItem<T> {
    value: T;
    selected: boolean;
}

const emails: DropdownItem<string>[] = [
    {value: 'naver.com', selected: true},
    {value: 'gmail.com', selected: false},
    {value: 'hanmail.net', selected: false},
];

const numberOfProducts: DropdownItem<number>[] = [
    {value: 1, selected: true},
    {value: 2, selected: false},
    {value: 3, selected: false},
];
// 하나의 인터페이스로 여러가지 타입을 커버할 수 있음 : 제네릭의 장점!

function createDropdownItem<T>(item: DropdownItem<T>) {
// function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}


// 이메일 드롭다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
})

numberOfProducts.forEach(function(product) {
    const item = createDropdownItem<number>(product);
})


//


interface Dropdown<T> {
    value: T;
    selected: boolean;
}

// 특정 타입을 입력해야 함
// const dd1: Dropdown = {value:10, selected:false};  // 에러 발생
const dd2: Dropdown<number> = {value:10, selected:false};


//
function logTextLength<T>(text: T): T {
    console.log(text.length); // 에러 발생: Property 'length' does not exist on type 'T'.
    return text;
}
// logTextLength에 어떤 타입이 들어올지 알 수 없음

logTextLength('hi')

// 타입을 배열로 지정해주면 배열 메서드를 사용할 수 있음
function logTextLength2<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    })
    return text;
}
logTextLength2<string>(['hi', 'abc']);



//
interface LengthType {
    length: number;
}
// length 속성이 있을 것이라는 것을 extends를 활용해 나타낼 수 있음
function logTextLength3<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}

logTextLength3('a');  // 문자열 length 속성이 제공되어서 ok
logTextLength3(10);  // 숫자는 length 속성이 없어 에러 발생
logTextLength3({length: 10});  // ok


//
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// ShoppingItem 속성 중 하나만 받는걸로 제약할 수 있음 : keyof 이용
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}


getShoppingItemOption(10);  // 에러 발생;
getShoppingItemOption('name');
// 키값만 들어갈 수 있음

