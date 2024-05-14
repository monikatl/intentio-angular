import { Address } from "./address";
import { Contact } from "./contact";
import { Patron } from "./patron";

export class Parish {
    patron: Patron = new Patron();
    address: Address = new Address();
    account_number: string = "45 4564 3333 4444 0000 2222"
    contact: Contact = new Contact();
    
}