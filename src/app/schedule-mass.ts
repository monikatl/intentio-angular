export interface IMass {
    hour : Hour;
    kind: Kind;
}


export class ScheduleMass implements IMass {
    
    hour: Hour;
    kind: Kind;

    constructor(hour: Hour, kind: Kind) {
        this.hour = hour;
        this.kind = kind;
    }
    
}

// export class ExtraordinaryMass implements IMass {
//     hour: Hour;
//     kind: Kind;
//     occasion: Occasion;
// }

export class Hour {
    value: string = "18:00";

    constructor(hour: string) {
        this.value = hour;
    }

}

export enum Occasion {
    FUNERAL = "Pogrzeb",
    WEDDING = "Wedding",
    Custom = "Other"
}

export enum Kind {
    EVERYDAY = "Dzień powszedni", 
    SUNDAY = "Niedziela i Święta Nakazane"
}