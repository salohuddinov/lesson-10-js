// FUNCTIONS1.


// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];

// function getNamesWithGrade(baho) {
//     return students
//         .filter(student => student.percent >= (baho === 5 ? 85 : baho === 4 ? 70 : 60) && student.percent < (baho === 5 ? 101 : baho === 4 ? 85 : 70))
//         .map(student => ({ ...student, grade: baho }));
// }

// const studentsWithGrade = getNamesWithGrade(5);
// console.log("Output:", studentsWithGrade);

// const namesWithGrade5 = studentsWithGrade.map(student => student.name);
// console.log("Input: getNamesWithGrade:", namesWithGrade5);


// FUNCTIONS2.

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const wordCount = animals.reduce((result, animal) => {
//     result[animal] = (result[animal] || 0) + 1;
//     return result;
// }, {});

// console.log(wordCount);


// FUNCTIONS3.

// const inputArray = [1, 2, 3, 4, 5];

// const squaredArray = inputArray.map(element => element ** 2);

// console.log(squaredArray);


// FUNCTIONS4.

// const inputArray = [1, -4, 12, 0, -3, 29, -150];

// const positiveNumbersSum = inputArray
//     .filter(number => number > 0)
//     .reduce((sum, number) => sum + number, 0);

// console.log(positiveNumbersSum);


// FUNCTIONS5.

// const inputString = 'George Raymond Richard Martin';

// const initials = inputString
//     .split(' ')
//     .map(word => word.charAt(0))
//     .join('');

// console.log(initials);


// FUNCTIONS6.

// const students = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// students.sort((a, b) => a.age - b.age);

// const youngestStudent = students[0];
// const oldestStudent = students[students.length - 1];

// const ageDifference = oldestStudent.age - youngestStudent.age;

// console.log(ageDifference);


// FUNCTIONS7.

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evens = inputArray.filter(number => number % 2 === 0);
// const odds = inputArray.filter(number => number % 2 !== 0);

// console.log("Juftlar:", evens);
// console.log("Toqlar:", odds);


// FUNCTIONS8.

// const inputArray = [2, 5, 3, 2, 8, 3, 4, 1, 5];

// const resultArray = inputArray.reduce((uniqueArray, currentElement) => {
//     if (!uniqueArray.includes(currentElement)) {
//         uniqueArray.push(currentElement);
//     }
//     return uniqueArray;
// }, []);

// console.log(resultArray);


// FUNCTIONS9.

// const products = [
//     { id: 3, name: 'apple', price: 1000, rating: 4.5, discount: 10 },
//     { id: 1, name: 'banana', price: 500, rating: 4.2, discount: 5 },
//     { id: 4, name: 'poteto', price: 600, rating: 4.0, discount: 15 },
//     { id: 2, name: 'stroberry', price: 1500, rating: 4.8, discount: 8 },
// ];

// const sortByProperty = (property) => (a, b) => (a[property] > b[property] ? 1 : -1);

// const sortedProducts = products
//     .sort(sortByProperty('id'))
//     .sort(sortByProperty('name'))
//     .sort(sortByProperty('price'))
//     .sort(sortByProperty('rating'))
//     .sort(sortByProperty('discount'));

// console.log(sortedProducts);


// FUNCTIONS10.

// const products = [
//     { id: 3, name: 'Laptop', price: 1500, rating: 4.5, discount: 10 },
//     { id: 1, name: 'Phone', price: 900, rating: 4.2, discount: 5 },
//     { id: 4, name: 'Tablet', price: 300, rating: 4.8, discount: 15 },
//     { id: 2, name: 'Camera', price: 100, rating: 4.7, discount: 8 },
// ];

// const sortByRating = (a, b) => b.rating - a.rating;

// const strongestProduct = products.sort(sortByRating)[0];

// console.log(strongestProduct);


// FUNCTIONS11.

// const products = [
//     { id: 3, name: 'bus', price: 100, rating: 4.5, discount: 10 },
//     { id: 1, name: 'car', price: 800, rating: 4.2, discount: 5 },
//     { id: 4, name: 'min-bus', price: 500, rating: 4.8, discount: 15 },
//     { id: 2, name: 'bayckle', price: 300, rating: 4.7, discount: 8 },
// ];

// const sortByPrice = (a, b) => a.price - b.price;

// const cheapestProduct = products.sort(sortByPrice)[0];

// console.log(cheapestProduct);


// FUNCTIONS12.

// const products = [
//     { id: 3, name: 'book', price: 1800, rating: 4.5, discount: 10 },
//     { id: 1, name: 'notebook', price: 200, rating: 4.2, discount: 5 },
//     { id: 4, name: 'pen', price: 450, rating: 4.8, discount: 15 },
//     { id: 2, name: 'peaper', price: 250, rating: 4.7, discount: 8 },
// ];

// const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

// console.log(totalPrice);


// FUNCTIONS13.

// const products = [
//     { id: 3, name: 'chokolet', price: 100, rating: 4.5, discount: 10 },
//     { id: 1, name: 'water', price: 850, rating: 4.2, discount: 5 },
//     { id: 4, name: 'energy', price: 330, rating: 4.8, discount: 15 },
//     { id: 2, name: 'ice-crem', price: 370, rating: 4.7, discount: 8 },
// ];

// const productNames = products.map(product => product.name);

// console.log(productNames);


// FUNCTIONS14.



// FUNCTIONS15.

// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const removeProductById = (id) => {
//     const updatedProducts = products.filter(product => product.id !== id);
//     return updatedProducts;
// };

// const newProducts = removeProductById(4);

// console.log(newProducts);


// FUNCTIONS16.

// function isOnlyLetters(str) {
//     const letters = str.split('');

//     const onlyLetters = letters.every(char => /[a-zA-Z]/.test(char));

//     return onlyLetters;
// }

// const testStr1 = "HelloWorld";
// console.log(isOnlyLetters(testStr1)); 

// const testStr2 = "123ABC";
// console.log(isOnlyLetters(testStr2));


// FUNCTIONS17.

// function getTruthyFalsy(arr) {
//     const truthyArray = arr.filter(element => Boolean(element));
//     const falsyArray = arr.filter(element => !element);

//     return { truthy: truthyArray, falsy: falsyArray };
// }

// const inputArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// const result = getTruthyFalsy(inputArray);

// console.log(result);


// FUNCTIONS18.

// function getWordLengths(sentence) {
//     const words = sentence.split(' ');
//     const wordLengths = words.map(word => word.length);
//     return wordLengths;
// }

// const inputSentence = "Yusupov Muhammadjon";
// const result = getWordLengths(inputSentence);

// console.log(result);


// FUNCTIONS19.

// function hasWhiteSpace(str) {
//     return str.split('').some(char => char === ' ');
// }

// const inputString = "Yusupov Muhammadjon";
// const result = hasWhiteSpace(inputString);

// console.log(result);


// FUNCTIONS20.

// function objectToStringArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
// }

// const inputObject = { a: 2, b: 5, c: 7 };
// const result = objectToStringArray(inputObject);

// console.log(result);


// FUNCTIONS21.

// function digitSum(number) {
//     const digits = String(number).split('').map(Number);

//     const sum = digits.reduce((acc, digit) => acc + digit, 0);

//     if (sum >= 10) {
//         return digitSum(sum);
//     }

//     return sum;
// }

// const inputNumber = 9875;
// const result = digitSum(inputNumber);

// console.log(result);


// FUNCTIONS22.

// const pupils = [
//     { name: "Elbek", percent: 95 },
//     { name: "Zafar", percent: 78 },
//     { name: "Aziz", percent: 83 },
//     { name: "Jasur", percent: 88 },
//     { name: "Bobur", percent: 66 },
//     { name: "Kamron", percent: 75 },
// ];

// const averagePercent = pupils.reduce((total, pupil) => total + pupil.percent, 0) / pupils.length;

// const pupilsWithNewProperties = pupils.map(pupil => ({
//     ...pupil,
//     averagePercent,
//     isPassed: pupil.percent >= 70,
// }));

// console.log(pupilsWithNewProperties);


// FUNCTIONS23.

// const pupils = [
//     { name: "Elbek", percent: 95 },
//     { name: "Zafar", percent: 78 },
//     { name: "Aziz", percent: 83 },
//     { name: "Jasur", percent: 88 },
//     { name: "Bobur", percent: 66 },
//     { name: "Kamron", percent: 75 },
// ];

// const updatedPupils = pupils.map(pupil => {
//     let grade;

//     if (pupil.percent >= 90) {
//         grade = 5;
//     } else if (pupil.percent >= 80) {
//         grade = 4;
//     } else if (pupil.percent >= 70) {
//         grade = 3;
//     } else {
//         grade = 2;
//     }

//     return {
//         ...pupil,
//         grade,
//     };
// });

// console.log(updatedPupils);


// FUNCTIONS24.

// const pupils = [
//     { name: "Elbek", percent: 95 },
//     { name: "Zafar", percent: 78 },
//     { name: "Aziz", percent: 83 },
//     { name: "Jasur", percent: 88 },
//     { name: "Bobur", percent: 66 },
//     { name: "Kamron", percent: 75 },
// ];

// const updatedPupils = pupils.map(pupil => ({
//     ...pupil,
//     isPassed: pupil.percent >= 70,
// }));

// console.log(updatedPupils);


// FUNCTIONS25.

const pupils = [
    { name: "Elbek", percent: 95 },
    { name: "Zafar", percent: 78 },
    { name: "Aziz", percent: 83 },
    { name: "Jasur", percent: 88 },
    { name: "Bobur", percent: 66 },
    { name: "Kamron", percent: 75 },
];

const result = pupils.reduce(
    (acc, pupil) => {
        if (pupil.percent >= 70) {
            acc.passed++;
        } else {
            acc.failed++;
        }
        return acc;
    },
    { passed: 0, failed: 0 }
);

console.log(result);
