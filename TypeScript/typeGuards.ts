// typeOf , in, instanceOf

interface Car {
    maxSpeed: number;
    width: number;
}

interface Person {
    age: number;
    name: string;
}

function isCar(value: any): value is Car {
    return 'maxSpeed' in value && 'width' in value;
}


function isPerson(value: any): value is Person {
    return 'age' in value && 'name' in value;
}


