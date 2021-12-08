import {FSBasicNode} from "./FSBasicNode";
import {BasicFile} from "./BasicFile";


export class Directory extends FSBasicNode{
    private files: BasicFile[] = [];
    private subDirs: Directory[] = [];

    constructor(name: string, parent: Directory | null) {
        super(name, parent);
    }

    remove(): void {
    }

    show(): any {
    }

    moveTo(newParent: Directory): void {
    }

    addFile(file: FSBasicNode): void {

    }
}