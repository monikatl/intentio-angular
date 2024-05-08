
import { IEvent } from "./IEvents";
import { IEventsRepository } from "./IEventsRepository";
import { Hour } from "./app/schedule-mass";
import { Memorial } from "./memorial";

export class MemorialRepository implements IEventsRepository {
   
    memorials = new Map<number, Hour>([
        [0, new Hour("9:45")],
        [0, new Hour("11:45")]
    ])

    memorialsCalendar: Memorial[] = []

    getData(): IEvent[] {
        return this.getMemorials();
    }

    getMemorials() {
        return this.memorialsCalendar;
    }

    private createMemoriesCalendar() {
        let dateNow = new Date();
        for(let i = 0; i <100; i++) {
            console.log(i)
            let day = dateNow.getDay() 
            if(day === 0) {
                this.createMemories(dateNow)
            } 
            dateNow.setDate(dateNow.getDate() + 1)
        }
    }

    private createMemories(date: Date) {
        this.memorials
        .forEach(m => {
            let memorial = new Memorial()
            memorial.setDate(date)
            memorial.setHour(m)
            this.memorialsCalendar.push(memorial)
        });
    }
    
}