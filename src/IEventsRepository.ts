import { IEvent } from "./IEvents";

export interface IEventsRepository {
    getData(): IEvent[]
}