export interface IMass {
    hour : Hour;
    kind: Kind;
}


export class ScheduleMass implements IMass {
    
    hour: Hour = new Hour();
    kind: Kind = Kind.EVERYDAY;
    
}

// export class ExtraordinaryMass implements IMass {
//     hour: Hour;
//     kind: Kind;
//     occasion: Occasion;
// }

export class Hour {
    value: string = "18:00";

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