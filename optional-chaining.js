// declare variable based on the name of an object property
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
};

const { x, b } = myObject;
console.log(b, x);



// destructuring array

// number
const [p, q] = [55, 46];
console.log(p, q);

// it can be more numbers than call name but show result how many calls
const [j, k, l] = [21, 5, 45, 74, 19, 14, 64];
console.log(j, k, l);

// string
const [word1, word2] = ['pour', 'regret'];
console.log(word1, word2);



// destructuring object
const { fastFood, favDrinks, budget } = { food: 'Biriyani', fastFood: 'Burger', likeFood: 'Pasta', favDrinks: 'Coffee', budget: 50 };
console.log(fastFood, favDrinks, budget);





// chaining object
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Sanju', food: 'Burger' },
    web: {
        work: 'Website Development',
        employee: 22,
        framework: 'React',
        tech: {
            first: 'HTML',
            second: 'CSS',
            javascript: {
                jsMain: 'Plane JavaScript',
                jsBack: 'Node JS',
                jsFront: 'React JS'
            }
        }
    }
};

console.log(company.web.tech.javascript.jsFront);





// optional chaining


// if we get error, we will apply optional chaining by using "?" this sign. Like-

// console.log(company?.web?.tech?.javascript?.jsFront);

// using (?) sign before dot (.)
// if we will get error, then it will work, otherwise it won't affect codes