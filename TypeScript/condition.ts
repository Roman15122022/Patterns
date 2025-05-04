// Condition types

type isArray<T> = T extends any[] ? true : false;

const first:isArray<string> = false

type User = {
    username: string,
}

type RandomName<T> = T extends User ? {value: number} : {value: string}

let third: RandomName<{username: string}>


type DTO<T> = T extends User
    ? { name: string; userId: number }
    : { name: string; anonymous: true };

function buildDTO<T>(input: T): DTO<T> {
    if ((input as any).username) {
        return { name: (input as any).username, userId: 1 } as DTO<T>;
    } else {
        return { name: 'Unknown', anonymous: true } as DTO<T>;
    }
}

const result1 = buildDTO({ username: 'alex' });
const result2 = buildDTO({});
