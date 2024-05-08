
import { IEvent } from "./IEvents";
import { Hour } from "./app/schedule-mass"
import { Late } from "./late"

export class Memorial implements IEvent {
    
    private date!: Date;
    private hour!: Hour;

    private list: Late[] = [];

    addLateToMemorial(late: Late) {
        this.list.push(late);
    }

    getMemorialList() {
        return this.list;
    }

    setDate(date: Date) {
        this.date = date;
    }

    setHour(hour: Hour) {
        this.hour = hour;
    }

}