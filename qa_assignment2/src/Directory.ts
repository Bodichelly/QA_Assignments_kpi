import {FSBasicNode} from "./FSBasicNode";


export class Directory extends FSBasicNode{
    public readonly files: FSBasicNode[] = [];

    constructor(name: string, parent: Directory | null) {
        super(name, parent, true);
    }

    show(): any {
        return [...this.files]
    }

    moveTo(newParent: Directory): void {
        if (!this.parent && this.files.length) {
            throw new Error('Can not move a root folder');
        }
        if(this.parent){
            this.remove();
        }
        newParent.addFile(this);
    }

    addFile(file: FSBasicNode): void {
        if(!file || !file.name) {
            throw new Error('File issue');
        }
        if (this.files.length + 1 > Number(process.env.DIR_MAX_ELEMS)) {
            throw new Error('Directory file limit reached');
        }

        file.setParent(this);
        this.files.push(file)
    }
}