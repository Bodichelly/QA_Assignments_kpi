import { Directory } from "./Directory";

export abstract class FSBasicNode {
    public readonly name: string;
    private parent: Directory | null = null;

    constructor(name: string, parent: Directory | null) {
        //constructor
    }

    abstract moveTo(newParent: Directory): void;

    abstract show(): any;

    abstract remove(): void;
}