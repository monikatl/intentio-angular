import { Priest } from "../priest";
import { Place } from "./place";

export class Parish {

    constructor(
        public name: string,
        public address: string,
        public priests: Priest[],
        public places: Place[]
      ) {  }
}