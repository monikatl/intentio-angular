import { Mass } from "./mass";

export class Intention {
    place: string = "";
    type: string = "";
    date: string = "";
    header: string = "";
    for: string = "";
    from: string = "";
    occasion: string = "";
    anniversary: number = 0;
    
    mass!: Mass;

    assignMass(mass: Mass) {
        this.mass = mass;
    }

    getOccasion() {
        return this.occasion + " " + this.anniversary
    }
    
}