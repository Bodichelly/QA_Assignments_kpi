import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class BufferFile extends FSBasicNode{
    private data: string[] = [];

    constructor(name: string, parent: Directory | null, initialData: string[] = []) {
        super(name, parent);
    }

    moveTo(newParent: Directory): void {
    }

    remove(): void {
    }

    show(): any {
    }

    push(dataElement: any): void {

    }

    pop(): any {

    }
}