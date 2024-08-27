type Admin = {
    name: String;
    privileges: string[]
}

type Employee = {
    name: String;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number| boolean;

type Universal = Combinable & Numeric;

function add(a: string, b: string): string; //Function overloads precizing the result type if values are numbers
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return add.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' '); // impossibla on a number

const fetchedUserDate = {
    id: 'u1',
    name: 'Max',
    // job: { title: 'CEO', description: 'My own company' }
}

// console.log(fetchedUserDate.job && fetchedUserDate.job.title); // secure way of avoiding runtime error because the is no job property in the object
// console.log(fetchedUserDate?.job?.title); // Alternative way of writing this condition is with "?"

const userInput = '';

// const storedData = userInput || 'DEFAULT'; // works for null, undifined, empty string
const storedData = userInput ?? 'DEFAULT';  // as above but empty string

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate)
//     }
// }

// printEmployeeInformation(e1)

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...')
//     }
//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicule = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicule(vehicule: Vehicule) {
//     vehicule.drive();
//     if (vehicule instanceof Truck) {
//         vehicule.loadCargo(1000);
//     }
// }

// useVehicule(v1);
// useVehicule(v2);

// interface Bird {
//     type: "bird";
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number
// }

// type Animal = Bird | Horse;

// function movingAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break;
//         case 'horse':
//             speed = animal.runningSpeed
//             break;
//     }
//     console.log('Moving with speed: ' + speed);
// }

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement; //alternative way of letting TS know that we are dealing with input type for the .value to work ; "!" meaning that we are sure it will never yeall no
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// interface ErrorContainer { // index type
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character!'
// };

