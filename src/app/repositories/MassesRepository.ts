import { IEvent } from "../../IEvents";
import { IEventsRepository } from "../../IEventsRepository";
import { Mass } from "../mass";
import { Hour, Kind, ScheduleMass } from "../schedule-mass";

export class MassesRepository implements IEventsRepository{

    hours: Hour[] = [
        new Hour("7:00"),
        new Hour("18:00"),
        new Hour("9:00"),
        new Hour("11:00")
    ]

    scheduleMasses: ScheduleMass[] = [
        new ScheduleMass(new Hour("7:00"), Kind.EVERYDAY),
        new ScheduleMass(new Hour("18:00"), Kind.EVERYDAY),
        new ScheduleMass(new Hour("7:00"), Kind.SUNDAY),
        new ScheduleMass(new Hour("9:00"), Kind.SUNDAY),
        new ScheduleMass(new Hour("11:00"), Kind.SUNDAY),
        new ScheduleMass(new Hour("18:00"), Kind.SUNDAY)
    ]

    masses: Mass[] = []

    constructor() {
        this.createMassesCalendar()
    }

    getData() {
        return this.getMasses();
    }

    getMasses() {
        return this.masses;
    }

    private createMassesCalendar() {
        let dateNow = new Date();
        for(let i = 0; i <100; i++) {
            console.log(i)
            let day = dateNow.getDay() 
            let massKind = Kind.EVERYDAY
            if(day === 0) {
               massKind = Kind.SUNDAY
            } 
            this.createMasses(dateNow, massKind)
            dateNow.setDate(dateNow.getDate() + 1)
        }
    }

    private createMasses(date: Date, kind: Kind) {
        this.scheduleMasses
        .filter(m => m.kind === kind)
        .forEach(m => {
            let mass = new Mass(m, date, false, [], [], 1)
            this.masses.push(mass)
        });
    }
}