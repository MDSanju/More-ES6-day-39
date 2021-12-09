// filter works by a condition. code is written almost same how map is written
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const biggerThan20 = numbers.filter(number => number > 20);
console.log(biggerThan20);

const smallerThan15 = numbers.filter(number => number < 15);
console.log(smallerThan15);

const notEqual = numbers.filter(number => number != -1);
console.log(notEqual);


// more complex
const products = [
    { name: 'Hp Laptop', price: 2000, color: 'Silver' },
    { name: 'iPhone 6s', price: 1599, color: 'Silver' },
    { name: 'Gigabyte Desktop', price: 650, color: 'Black' },
    { name: 'PC Table', price: 329, color: 'Basswood Color' },
    { name: 'Samsung Refrigerator', price: 520, color: 'Gray' }
];

const priceMoreThan600 = products.filter(product => product.price > 600);
console.log(priceMoreThan600);

const getSilver = products.filter(product => product.color == 'Silver');
console.log(getSilver);



// using find()

// it'll give us only Hp Laptop element
const finding = products.find(product => product.color == 'Silver');
console.log(finding);