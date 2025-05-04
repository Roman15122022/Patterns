//config, tests, vite

interface Person {
    age: number;
    name: string;
    password: string;
}


const obj = {
    age: 14,
    name: 'Roma',
} as Person;

const obj2 = <Person>{
    age: 14,
    name: 'Roma',
}

const str = '123' as unknown as number

const obj3 = {
    age: 14,
    name: 'Roma',
    password: '123'
} satisfies Person


function JSONParse<T>(data: string): T {
    return JSON.parse(data) as T;
}

const PersonsKeys = {
    age: 'age',
    username: 'username',
    password: 'password'
} as const;

const keys =  Object.keys(PersonsKeys);

function KeysFn<T extends object>(data: T): Array<keyof  T> {
    return Object.keys(data) as Array<keyof T>;
}

const k = KeysFn(PersonsKeys)