import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class BinaryFile extends FSBasicNode{
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

}