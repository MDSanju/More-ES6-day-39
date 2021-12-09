// map with array string elements
const horrorBookList = ["Rosemary's Baby", "The Haunting of Hill House", "We Need to Talk about Kevin", "Night Film", "Exquisite Corpse"];

// use function and map in one single line code / very shortcut coding system
const horrorLengths = horrorBookList.map(book => book.length);
console.log(horrorLengths);



// use Map with array of objects
const products = [
    { name: 'Hp Laptop', price: 2000, color: 'Silver' },
    { name: 'iPhone 6s', price: 1599, color: 'Silver' },
    { name: 'Gigabyte Desktop', price: 650, color: 'Black' },
    { name: 'PC Table', price: 329, color: 'Basswood Color' },
    { name: 'Samsung Refrigerator', price: 520, color: 'Gray' }
];

// if we need to get return value
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
console.log(productNames);
console.log(productPrices);

// if we don't need to do return, only show the array elements
products.forEach(product => console.log(product));