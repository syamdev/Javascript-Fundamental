class Car {
    constructor (brand){
        this.brand = brand
    }

    present = () => {
        return `I have ${this.brand}`
    }
}

class CarUSA extends Car {
    roda = () => `I have 4 roda`
}

const myCar = new CarUSA('Mustang')
console.log(myCar.present())
console.log(myCar.roda())
