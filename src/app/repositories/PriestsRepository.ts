import { Function } from "../function";
import { Priest } from "../priest";

export class PriestRepository {
    priests = [
        new Priest(0, "Ksiadz", "Ksiadz", Function.VICAR, "ki@ksiadz.com"),
        new Priest(1, "Ksiadz", "Ksiadz", Function.VICAR, "ki@ksiadz.com"),
        new Priest(2, "Ksiadz", "Ksiadz", Function.GUEST, "ki@ksiadz.com"),
        new Priest(3, "Ksiadz", "Ksiadz", Function.PARISH_PRIEST, "ki@ksiadz.com")
    ]

    getData() {
        return this.priests;
    }
}