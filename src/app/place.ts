import { Address } from "./address";

export class Place {
    public name: string;
    public address: Address;
 
    public constructor(name: string, address: Address) {
        this.name = name;
        this.address = address;
    }
}