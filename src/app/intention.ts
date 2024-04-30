import { Mass } from "./mass";

export class Intention {
    place: string = "";
    type: string = "";
    date: string = "";
    header: string = "";
    for: string = "";
    from: string = "";
    mass!: Mass;

    assignMass(mass: Mass) {
        this.mass = mass;
    }
    
}