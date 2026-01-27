//*  Example 1: Users → Skills (most common flatMap use)
const users = [
  {
    id: 1,
    name: 'Mahfuj',
    skills: ['JS', 'React', 'Node', ['PHP', 'Laravel', 'CodeIgniter']],
  },
  {
    id: 2,
    name: 'Freak',
    skills: ['C', 'C++'],
  },
  {
    id: 3,
    name: 'Dev',
    skills: ['Python', 'Django'],
  },
];
const skills = users.map((user) => user.skills).flat(Infinity);
const skillFlat = users.flatMap((user) => user.skills);
// console.log(skillFlat)
// console.log(skills);
// *Example 2: Orders → Items (nested objects)
const orders = [
  {
    orderId: 101,
    items: [
      { name: 'Laptop', price: 70000 },
      { name: 'Mouse', price: 1500 },
    ],
  },
  {
    orderId: 102,
    items: [{ name: 'Keyboard', price: 3000 }],
  },
];
const orderFlat = orders
  .flatMap((order) => order.items)
  .filter((ittem) => ittem.price > 2000 && ittem.name == 'Keyboard');
console.log(orderFlat);
