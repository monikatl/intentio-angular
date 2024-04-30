import { Date3Component } from "./app/intent-config/date-3/date-3.component";
import { Mass } from "./app/mass";
import { Hour, Kind, ScheduleMass } from "./app/schedule-mass";

export class MassesRepository {

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

    getMasses() {
        return this.masses
    }

    createMassesCalendar() {
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

    createMasses(date: Date, kind: Kind) {
        this.scheduleMasses
        .filter(m => m.kind === kind)
        .forEach(m => {
            let mass = new Mass(m, date, false, [], [], 1)
            this.masses.push(mass)
        });
    }
}