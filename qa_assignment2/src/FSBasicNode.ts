import { Directory } from "./Directory";

export abstract class FSBasicNode {
    public readonly name: string;
    private _parent: Directory | null = null;

    constructor(name: string = `node_${Date.now()}`, parent: Directory | null) {
        if (parent && parent.files.find(f => f.name === name)) {
            throw new Error('Duplication file issue');
        }
        if (parent) {
            parent.files.push(this);
        }
    }

    get parent(): Directory {
        return this._parent;
    }

    moveTo(newParent: Directory): void {
        if (!this.parent && this['files']) {
            throw new Error('Can not move a root folder');
        }

        this.remove();
        newParent.addFile(this);
    }

    abstract show(): any;

    remove(): void {
        if (!this._parent) {
            throw new Error('Can not delete a root element');
        }

        const index = this.parent.files.indexOf(this);
        if (index !== -1) {
            this.parent.files.splice(index, 1);
        }
    }
}