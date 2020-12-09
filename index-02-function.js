//tanpa parameter
const helloWorld = () => {
    return 'Hello World Func'
}

//1 parameter
const helloName = name => {
    return `Hello my name is ${name}`
}
const helloName1 = name => `Hello my name is ${name}`

//2 parameter
const helloAge = (name, age) => {
    return `Hello my name is ${name} and my age is ${age}`
}
const helloAge1 = (name, age) => `Hello my name is ${name} and my age is ${age}`

//1 baris
const callAge = age =>`my age is ${age}`

//console.log(helloWorld());
//console.log(helloName('syam'))
//console.log(helloAge('syam',45))
//console.log(callAge(48))
//console.log(helloName1('budi'))
console.log(helloAge1('budi', 48))
