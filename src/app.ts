class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        //  this.name = n;
    }

    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string,  admins: string[]) {
        super(id, 'IT');
        this.admins = admins; // it has top be assigned afteer super( )
    }
};

class AccountingDepartment extends Department {
    constructor(id: string,  private reports: string[]) {
        super(id, 'Accounting');
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }
    getReports() {
        console.log(this.reports)
    }

};

const it =  new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation( );

console.log(it);


const accounting =  new AccountingDepartment('d1', []);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation( );

console.log(accounting);

 

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();