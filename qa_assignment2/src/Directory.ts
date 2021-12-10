import {FSBasicNode} from "./FSBasicNode";
import {printData} from "./utils";

export class Directory extends FSBasicNode{
    public readonly files: FSBasicNode[] = [];

    constructor(name: string, parent: Directory | null) {
        super(name, parent, true);
    }

    show(log:boolean = false, treeLevel:number = 0): any {
        if(log){
            console.log('|'+'-------'.repeat(treeLevel)+'| '+this.name+' /start');
            this.files.forEach(el=> el.show(true, treeLevel+1));
            console.log('|'+'-------'.repeat(treeLevel)+'| '+this.name+' /end');
        }
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