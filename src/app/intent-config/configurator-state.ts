import { IntentionPlace } from "../../IntentionPlace";
import { IntentionType } from "../IntentionType";

export class IntentionConfiguratorState {

    current: State = State.PLACE;
    mode!: IntentionPlace;
    type!: IntentionType;

    setMode(mode: IntentionPlace) {
        this.mode = mode;
    }

    setType(type: IntentionType) {
        this.type = type
    }
    
    next() {
        switch(this.current) {
            case State.PLACE:
                if(this.mode === IntentionPlace.MEMORIAL){
                    this.current = State.DATE
                } else {
                    this.current = State.TYPE;
                }
                break;
            case State.TYPE:
                this.current = State.DATE;
                break;
            case State.DATE:
                if(this.mode === IntentionPlace.MEMORIAL || this.type === IntentionType.GREGORIAN){
                    this.current = State.CONTENT_NAMES
                } else {
                    this.current = State.CONTENT
                }
                break;
            case State.CONTENT:
            case State.CONTENT_NAMES:
                this.current = State.SUMMARY
                break;
            case State.SUMMARY:
        }
    }

    back() {
        if(this.current === State.TYPE) {
            this.current = State.PLACE
        }
        if(this.current === State.DATE) {
            if(this.mode === IntentionPlace.MEMORIAL){
                this.current = State.PLACE
            } else {
                this.current = State.TYPE
            }
        }
        if(this.current === State.CONTENT || this.current === State.CONTENT_NAMES) {
            this.current = State.DATE
        }
        if(this.current === State.SUMMARY) {
            if(this.mode === IntentionPlace.MEMORIAL || this.type === IntentionType.GREGORIAN){
                this.current = State.CONTENT_NAMES
            } else {
                this.current = State.CONTENT
            }
        }
    }
}

export enum State {
    PLACE = 'intent-configurator/place-1',
    TYPE = 'intent-configurator/type-2',
    DATE = 'intent-configurator/date-3',
    CONTENT = 'intent-configurator/content-4',
    CONTENT_NAMES = 'intent-configurator/content-4-names',
    SUMMARY = 'intent-configurator/summary-5',
    PAY = 'intent-configurator/pay-6'
}

