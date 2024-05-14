import { IEvent } from "../../IEvents";
import { IEventsRepository } from "../../IEventsRepository";
import { Hour } from "../schedule-mass";
import { Service } from "../../service";

export class ServicesRepository implements IEventsRepository {

    services: Service[] = [
        new Service("Majowe", new Date(), new Hour("17:30")),
        new Service("Majowe", new Date(), new Hour("17:30")),
        new Service("Majowe", new Date(), new Hour("17:30"))
    ]

    getServices() {
        return this.services;
    }

    getData(): IEvent [] {
        return this.getServices();
    }

}