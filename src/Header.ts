import { ContentType } from "./app/ContentType";

export class Header {
    type: ContentType;
    content: string;

    constructor(type: ContentType, content: string){
        this.type = type;
        this.content = content;
    }
}