import { Directory } from "./Directory";

export abstract class FSBasicNode {
    public readonly name: string;
    private _parent: Directory | null = null;

    constructor(name: string, parent: Directory | null) {
        //constructor
    }

    get parent(): Directory {
        return this._parent;
    }

    abstract moveTo(newParent: Directory): void;

    abstract show(): any;

    abstract remove(): void;
}