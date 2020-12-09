const myObject = {
    name: 'syam',
    age: 39
}

const copyObject = {...myObject, college: 'master'}
console.log(copyObject)

const myArray = ['syam', 40]
const copyArray = [...myArray, 'master']
//console.log(myArray)
console.log(copyArray)