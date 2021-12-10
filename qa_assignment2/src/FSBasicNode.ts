import { Directory } from "./Directory";

export abstract class FSBasicNode {
    public readonly name: string;
    public readonly isDir: boolean = false;
    private _parent: Directory | null = null;

    constructor(
        name: string = `node_${Date.now()}`,
        parent: Directory | null,
        isDir: boolean = false
    ) {
        if (parent && parent.files.find(f => f.name === name)) {
            throw new Error('Duplication file issue');
        }
        this.isDir = isDir;
        this.name = name;
        if (parent) {
            parent.files.push(this);
            this._parent = parent;
        }
    }

    get parent(): Directory | null {
        return this._parent;
    }

    setParent(newParent: Directory): void {
        this._parent = newParent;
    }

    moveTo(newParent: Directory): void {
        if (this.parent) {
            this.remove();
        }
        newParent.addFile(this);
    }

    show(log:boolean = false, treeLevel:number = 0): any {}

    remove(): void {
        if (!this._parent) {
            throw new Error('Can not delete a root element');
        }

        const index = this._parent.files.indexOf(this);
        if (index !== -1) {
            this._parent.files.splice(index, 1);
        }
    }
}