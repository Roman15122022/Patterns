export class Wallet {
    constructor(value) {
        this.value = value;
    }

    onUpdate(data){
        this.value += data;
    }
}

export class BankSalary {
    constructor() {
        this.peopleOnSalary = []
    }

    addPersonOnSalary(person) {
        this.peopleOnSalary.push(person);
    }

    removePersonOnSalary(person) {
        this.peopleOnSalary = this.peopleOnSalary.filter(p => p !== person);
    }

    salaryUpdate(value) {
        for (let person of this.peopleOnSalary) {
            person.onUpdate(value);
        }
    }
}

class Employee extends Wallet {
    constructor(name, value) {
        super();
        this.value = value;
        this.name = name;
    }

    onUpdate(value){
        this.value += value;
        console.log(`${this.name}: ${this.value}$`);
    }
}

const bank = new BankSalary();

const roman = new Employee('Roman', 500);

const Maksym = new Employee('Maksym', 100);

bank.addPersonOnSalary(roman);
bank.addPersonOnSalary(Maksym);

bank.salaryUpdate(500)

bank.removePersonOnSalary(Maksym);

bank.salaryUpdate(100)