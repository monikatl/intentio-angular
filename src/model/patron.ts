export class Patron {
    name: string = "Święty Wojciech";
    date: Date = new Date();
    description: string = "Nasz Patron nasz partorn";

    getString() {
        return this.name + " " + this.date + " " + this.description
    }
}