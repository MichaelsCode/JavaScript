const fruits = ['apple', 'pear', 'cherry'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i]
  console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit));
