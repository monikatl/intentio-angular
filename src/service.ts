import { IEvent } from "./IEvents";
import { Intention } from "./app/intention";
import { Hour } from "./app/schedule-mass";

export class Service implements IEvent{
    name: string;
    date: Date;
    hour: Hour;
    intentions: Intention[] = [];


    constructor(name: string, date: Date, hour: Hour) {
        this.name = name;
        this.date = date;
        this.hour = hour;
    }

    addIntention(intent: Intention) {
        this.intentions.push(intent);
    }
}