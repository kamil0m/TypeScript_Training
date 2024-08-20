// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Maximilian',
//     age: 30
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //tuple type defined inside brackets
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1]

console.log(person)