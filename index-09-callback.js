const callData = callback => {
    setTimeout(() => {
        const data = 'syam';
        callback(data)
    }, 3000)
}

callData(name => console.log(`my name is ${name}`))