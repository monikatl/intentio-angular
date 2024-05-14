import { Parish } from "../../model/parish";


export class ParishRepository {
    parish = new Parish();

    getParish() {
        return this.parish
    }
}