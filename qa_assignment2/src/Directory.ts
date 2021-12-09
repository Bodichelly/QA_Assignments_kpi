import {FSBasicNode} from "./FSBasicNode";


export class Directory extends FSBasicNode{
    public readonly files: FSBasicNode[] = [];

    constructor(name: string, parent: Directory | null) {
        super(name, parent);
    }

    show(): any {
        return [...this.files]
    }

    addFile(file: FSBasicNode): void {
        if(!file || !file.name) {
            throw new Error('File issue');
        }
        if (this.files.length + 1 > Number(process.env.DIR_MAX_ELEMS)) {
            throw new Error('Directory file limit reached');
        }

        file.moveTo(this);
        this.files.push(file)
    }
}