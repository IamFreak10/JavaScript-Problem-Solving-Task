const users = [
  { id: 1, skills: ['js', 'react'] },
  { id: 2, skills: ['node'] },
  { id: 3, skills: ['js', 'mongodb'] },
];

// ? expected output ["js", "react", "node", "mongodb"]

const uniqueSkills = [...new Set(users.flatMap((user) => user.skills))];
// console.log(uniqueSkills);
const orders = [
  {
    orderId: 1,
    products: [
      { name: 'Laptop', price: 70000 },
      { name: 'Mouse', price: 1200 },
    ],
  },
  {
    orderId: 2,
    products: [{ name: 'Phone', price: 45000 }],
  },
];
const expensiveProducts = orders
  .flatMap((order) => order.products)
  .filter((product) => product.price > 5000)
  .map((product) => product.name);
console.log(expensiveProducts);
