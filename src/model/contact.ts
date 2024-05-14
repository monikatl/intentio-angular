export class Contact {
    email: string = "monikatl@interia.pl";
    phone_number: string = "45345454";

    getString() {
        return "email: " + this.email + '\n' + "tel.: " + this.phone_number;
    }
}