export class IntentionConfiguratorState {
    
    current: string = State.PLACE;


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
    }
}

export enum State {
    PLACE = 'intent-configurator/place-1',
    TYPE = 'intent-configurator/type-2',
    DATE = 'intent-configurator/date-3',
    CONTENT = 'intent-configurator/content-4',
    SUMMARY = '5',
    PAY = '6'
}

