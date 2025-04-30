function sum(a, b){
    return a + b;
}

function decorator(fn){
    const hashMap = new Map()

    return (...args) => {
        const key = JSON.stringify(args)

        if (hashMap.has(key)){
            return hashMap.get(key)
        }

        const result = fn(...args)
        hashMap.set(key, result)

        return result
    }
}

const memoSum = decorator(sum);

console.log(memoSum(1, 2));
console.log(memoSum(1, 2));