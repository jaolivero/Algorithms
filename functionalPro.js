// const cash = [1, 2, 3, 4, 5, 6];

// // const results = (moneys) => moneys.map((x) => x * 10);

// // console.log(typeof cash);
// const results = (moneys) => moneys.filter((x) => x > 3);

// console.log(results(cash));
// console.log(cash);

// const person = {
//   name: 'John',
//   address: {
//     country: 'USA',
//     city: 'San Francisco',
//   },
// };

// // deep copy
// const updated = {
//   ...person,
//   address: {
//     ...person.address,
//     city: 'New York',
//   },
//   name: 'bob',
// };

// updated.address.city = 'New York';
// console.log(updated);

const number = [1, 2, 3];

// const added = [4, ...numbers];
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice()];

//removing
const removed = numbers.filter((n) => n !== 2);

//updating
numbers.map((n) => (n === 2 ? 20 : n));
