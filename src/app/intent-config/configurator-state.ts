export class IntentionConfiguratorState {

    current: State = State.PLACE;


    next() {
        if(this.current === State.PLACE) {
            this.current = State.TYPE
        }
        if(this.current === State.TYPE) {
            this.current = State.DATE
        }
        if(this.current === State.DATE) {
            this.current = State.CONTENT
        }
        if(this.current === State.CONTENT) {
            this.current = State.SUMMARY
        }
        if(this.current === State.SUMMARY) {
            this.current = State.PAY
        }
    }


    back() {
        if(this.current === State.TYPE) {
            this.current = State.PLACE
        }
        if(this.current === State.DATE) {
            this.current = State.TYPE
        }
        if(this.current === State.CONTENT) {
            this.current = State.DATE
        }
        if(this.current === State.SUMMARY) {
            this.current = State.CONTENT
        }
        if(this.current === State.PAY) {
            this.current = State.SUMMARY
        }
    }
}

export enum State {
    PLACE = 'intent-configurator/place-1',
    TYPE = 'intent-configurator/type-2',
    DATE = 'intent-configurator/date-3',
    CONTENT = 'intent-configurator/content-4',
    SUMMARY = 'intent-configurator/summary-5',
    PAY = 'intent-configurator/pay-6'
}

