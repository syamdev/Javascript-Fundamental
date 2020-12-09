class Car {
    constructor (brand){
        this.brand = brand
    }

    present = () => {
        return `I have ${this.brand}`
    }
}

class Hp {
    constructor(brand){
        this.brand = brand
    }
    present = () => {
        return `I have ${this.brand}`
    }
}

//static method
class Product {
    static present = product => `My product is ${product}`
}

const newCar = new Car('Toyota');
console.log(newCar.present())

const newHp = new Hp('Apple');
console.log (newHp.present())

console.log(Product.present('Coffee'))
