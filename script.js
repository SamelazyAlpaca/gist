const array = [-3, -3, -2, -1, 0, 1, 2, 2, 3, 4, 5, 6, 7, 8]
const arraySubMassives = [1, 3, 5, 8, [1, 2], [8, 182]]
// Task 1 Math.pow()
const arraySquare = array.map(num => num ** 2)
console.log(array);
console.log(arraySquare);

// Task 2 Unique values .Set()
const arrayUnique = [...new Set(array)]
console.log(arrayUnique);

// Task 3 num > 0

const arrayPositive = array.every(num => num >= 0)
console.log(arrayPositive);

// Task 4 only Negative numbers 
const arrayNegative = array.filter(num => num < 0) 
console.log(arrayNegative);

// Task 5 Summ of numbers
const arraySum = array.reduce((a, b) => a + b)
console.log(arraySum);

// Task 6 Submassive

const onlySubmassives  = arraySubMassives.filter(Array.isArray)
console.log(onlySubmassives)

// Task 7 quantity of nubmers

const stringQuantity = 'Верните количество слов в строке длина которых больше 4 символов'
const stringFourSybmols = stringQuantity.split(' ').filter(el => el.length > 4)
console.log(stringFourSybmols);

// Task 8 a six-digit numbers

const string = 'abcd123456ef5234'
const string1 = 'abcef12345678ghi654321klm'
const string2 = 'abcdef'
const string3 = 'abc1234567asd'
const string4 = 'abc12345asd'

const findNumber = () => {
    let num = string.match(/\d{6}/);
    console.log(num[0]);
}
console.log(findNumber(string));