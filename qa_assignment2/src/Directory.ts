import {FSBasicNode} from "./FSBasicNode";


export class Directory extends FSBasicNode{
    public readonly files: FSBasicNode[] = [];
    public readonly subDirs: Directory[] = [];

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