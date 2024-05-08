import { IEvent } from "../IEvents";
import { Intention } from "./intention";
import { Priest } from "./priest";
import { ScheduleMass } from "./schedule-mass";

export class Mass implements IEvent {
    scheduleMass: ScheduleMass;
    date: Date;
    isFree: boolean;
    intents: Intention[];
    priests: Priest[];
    intentCounter: number = 1;

    name: string = "msza";

    constructor(scheduleMass: ScheduleMass,
        date: Date,
        isFree: boolean,
        intents: Intention[],
        priests: Priest[],
        intentCounter: number
    ) {
            this.scheduleMass = scheduleMass;
            this.date = date;
            this.isFree = isFree;
            this.intents = intents;
            this.priests = priests;
            this.intentCounter = intentCounter;
        }

    checkAvailability() {
        return this.isFree;
    }

    changeAvaliability() {
        this.isFree = !this.isFree
    }

    assignIntention(intention: Intention) {
        this.intents.push(intention);
        if(this.intentCounter === this.intents.length) {
            this.isFree = false
        }
    }

    assignPriest(priest: Priest) {
        this.priests.push(priest)
    }

    getMassDate() {
        let date = 
        this.scheduleMass.hour.value + " " + 
        this.date.getDate() + "-" + 
        this.date.getMonth() + "-" + 
        this.date.getFullYear() + " (" +
        this.toDay() + ")"
        return date
    }

    toDay() {
        switch(this.date.getDay()) {
            case 0:
                return "Niedziela"
            case 1:
                return "Poniedziałek"
            case 2: 
                return "Wtorek"
            case 3:
                return "Środa"
            case 4:
                return "Czwartek"
            case 5:
                return "Piątek"
            case 6:
                return "Sobota" 
            default:
                return ""

        }
    }


}