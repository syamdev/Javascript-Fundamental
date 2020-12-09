// const firstName = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const data = 'Cristiano'
//             resolve(data)
//         }, 1000);
//     })
// }

// const lastName = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const data = `Ronaldo`
//             resolve(data)
//         }, 1000);
//     })
// }

// const resultName = async() => {
//     const first = await firstName();
//     const last = await lastName();
//     return `${first} ${last}`
// }

// resultName().then(result => console.log(result))

//test fetch data from API
const fetch = require('node-fetch');

const callData = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return data.json()
}

callData().then(result => console.log(result))