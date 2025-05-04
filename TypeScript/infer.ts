function dn(arg1: string, arg2: string): Array<string> {
    return []
}

type MyParams<T> = T extends (...args: infer U) => any ? U : never;

type myReturnType<T> = T extends (...args: any) => infer U ? U : never;

type FN = myReturnType<typeof dn>