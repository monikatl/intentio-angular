import { PassThrough } from "node:stream";
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

    getDate(): string {
        return this.name + " " + this.date.getDay() + "-" + this.date.getMonth() + "-" + this.date.getFullYear() + " " + this.hour.value
    }

    addIntention(intent: Intention) {
        this.intentions.push(intent);
    }
}