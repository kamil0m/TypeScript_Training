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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sports', 1];
console.log(person);
