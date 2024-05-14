import { Intention } from "../intention";

export class IntentionsRepository {
    intentions: Intention[] = []


    getIntentions() {
        return this.intentions
    }

    addIntention(intention: Intention) {
        this.intentions.push(intention)
    }
}