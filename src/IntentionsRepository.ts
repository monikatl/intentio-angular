import { Intention } from "./app/intention";

export class IntentionsRepository {
    intentions: Intention[] = []


    getIntentions() {
        return this.intentions
    }

    addIntention(intention: Intention) {
        this.intentions.push(intention)
    }
}