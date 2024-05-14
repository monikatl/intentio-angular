export class Address {
    street_name: string = "Lipowa";
    street_number: string = "45";
    local_number!: string;
    code: string = "42-200";
    city: string = "Malediwy";

    getString() {
        return "ul. " + this.street_name + " " + this.street_number + " " + this.code + " " + this.city;
     }
}