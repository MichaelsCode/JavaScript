const fruits = ['apple', 'pear', 'cherry'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]
//   console.log(fruit);
// }
//
// fruits.forEach(fruit => console.log(fruit));

// let capitalizedFruits = [];
//
// fruits.forEach(fruit => {
//   let capitalizedFruit = fruit.toUpperCase();
//   capitalizedFruits.push(capitalizedFruit);
// });
//
// console.log(capitalizedFruits);

// const prices = [6.75, 3.10, 4.00, 8.12];
//
// let totalcost = 0;
//
// prices.forEach(price => {
//   totalcost +=  price;
// });
//
// console.log(totalcost);

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let namesList = [];

// names.forEach(name => {
//   if (name.substr(0,1) ==+ 'S'){
//     namesList.push(name);
//   }
// });
//
// console.log(namesList);

names.forEach((name, index) => console.log(`${index + 1}) ${name}`));
