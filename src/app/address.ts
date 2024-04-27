export class Address {
    street_name: string;
    street_number: string;
    local_number: string;
    code: string;
    city: string;

    constructor(
        street_name: string,
        street_number: string,
        local_number: string,
        code: string,
        city: string) 
    {
        this.street_name = street_name;
        this.street_number = street_number;
        this.local_number = local_number;
        this.code = code;
        this.city = city;
    }

}