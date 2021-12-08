import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class BufferFile extends FSBasicNode{
    private data: string[] = [];
    private MAX_BUF_FILE_SIZE = 10;

    constructor(name: string, parent: Directory | null, initialData: string[] = [], maxBufferFileSize: number) {
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

    pop(): any {

    }
}