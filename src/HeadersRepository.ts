import { Header } from "./Header";
import { ContentType } from "./app/ContentType";

export class HeadersRepository {
    headers: Header[] = [
        new Header(ContentType.THANKSGIVING, "Dziękczynna "),
        new Header(ContentType.SUPPLICATORY, "O boże błogosławieństwo "),
        new Header(ContentType.SUPPLICATORY, "O boże błogosławieństwo i opiekę Matki Bożej "),
        new Header(ContentType.FOR_THE_DEATH, "O niebo "),
        new Header(ContentType.FOR_THE_DEATH, "Za Świętej Pamięci ")
    ]
}

