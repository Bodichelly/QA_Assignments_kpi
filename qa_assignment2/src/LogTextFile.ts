import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class LogTextFile  extends FSBasicNode{
    private data: string = "";

    constructor(name: string, parent: Directory | null, data: string = "") {
        super(name, parent);
        this.data = data;
    }

    show(): any {
        return this.data;
    }

    push(dataElement: string): void {
        if(dataElement){
            this.data += `${dataElement}\n`;
        }
    }
}