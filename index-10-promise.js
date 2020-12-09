//tanpa promise
// const callData = callback => {
//     setTimeout(() => {
//         const data = 'syam';
//         callback(data)
//     }, 1000)
// }

// const callDataAgain = (firstname, callback) => {
//     setTimeout(() => {
//         const data = `${firstname} dev`;
//         callback(data)
//     }, 1000)
// }

// callData(name => callDataAgain(name, result => console.log(result)))

const firstName = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'Cristiano'
            resolve(data)
        }, 1000);
    })
}

const lastName = name => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = `${name} Ronaldo`
            resolve(data)
        }, 1000);
    })
}

firstName().then(data => lastName(data)).then(result => console.log(result))