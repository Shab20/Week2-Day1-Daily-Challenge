const fruits= ["Banana","Apples","Oranges","Bluberries"];
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('kiwi');
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);

fruits.reverse()
console.log(fruits);

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);