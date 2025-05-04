const legacyApi = (callback) => {
    setTimeout(() => callback(null, 42), 1000);
};

const promiseAdapter = () => {
    return new Promise((resolve, reject) => {
        legacyApi((err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

promiseAdapter().then(console.log); // 42


const multiply = (a, b) => a * b;

const double = multiply.bind(null, 2);

console.log(double(5)); // 10
