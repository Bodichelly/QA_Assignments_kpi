import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class LogTextFile  extends FSBasicNode{
    private data: string = "";

    constructor(name: string, parent: Directory | null, data: string = "") {
        super(name, parent);
    }

    moveTo(newParent: Directory): void {
    }

    remove(): void {
    }

    show(): any {
    }

    push(dataElement: string): void {
    }
}