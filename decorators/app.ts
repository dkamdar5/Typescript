class Person {
    private _directReports: Person[];

    public emailAddress: string;

    constructor(public firstName: string, public lastName: string) {
        this._directReports = [];
    }

    public addDirectReport(person: Person) {
        this._directReports.push(person);
    }
}

const person = new Person("Dharmesh", "Kamdar")