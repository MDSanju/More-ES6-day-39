// const phone = {
//     name: 'iPhone',
//     model: '12 Pro Max',
//     color: 'Golden',
//     camera: '16MP',
//     storage: '512GB',
//     sim: 'Dual sim',
//     price: 2999
// };

// // we can do like that, but is not the es6 rule
// // const name = phone.name;
// // const model = phone.model;
// // const color = phone.color;
// // const camera = phone.camera;
// // const price = phone.price;



// // rather we can do it using es6 like-written down below 

// // creat all variables in a single line code instead of creating more var using all object's properties
// const { name, model, sim, price, storage, camera } = phone;

// console.log(name, camera);
// console.log(model, storage, price);
// console.log(sim);



// complex case, multiple objects inside an object
const products = {
    company: 'Multi Electronics',
    mobile: { name: 'iPhone', camera: '16MP', color: 'Golden' },
    laptop: { brand: 'Hp', model: 'EliteBook', processor: 'Core i5', price: 2000 }
};

// declear variable in a single line, es6
const { brand, model, price } = products.laptop;
const { name, color } = products.mobile;
console.log(brand, model, price, name, color);