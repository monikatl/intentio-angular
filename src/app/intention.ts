import { IntentionPlace } from "../IntentionPlace";
import { Mass } from "./mass";

export class Intention {
    place!: IntentionPlace;
    type: string = "";
    date: string = "";
    header: string = "";
    for: string = "";
    from: string = "";
    occasion: string = "";
    anniversary: number = 0;

    firstName: string = "";
    name: string = "";
    
    mass!: Mass;

    assignMass(mass: Mass) {
        this.mass = mass;
    }

    getOccasion() {
        return this.occasion + " " + this.anniversary
    }

    getIntention() {
        return this.date + " " + this.header + " dla " + this.for + "."
    }
    
}