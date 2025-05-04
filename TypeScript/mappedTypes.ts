interface User {
    age: number;
    name: string;
    password: string;
    type: string
}

interface Car {
    name: string;
    type: string
}

type Special<T> = {
    readonly [K in keyof T]?: T[K] | null;
}

type Edit<T> = {
    -readonly [K in keyof T]-?: T[K] | null;
}

type WithoutType<T> = {
    [K in keyof T as Exclude<K, 'type'>]: T[K]
}

type UpperCase<T> = {
    [K in keyof T as `${Capitalize<string & K>}`]
}

const user: WithoutType<User> = {
    name: '210,',
    age: 21,
    password: '123456',
}