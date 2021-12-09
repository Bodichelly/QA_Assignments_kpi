import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class BinaryFile extends FSBasicNode{
    private readonly data: string = "";

    constructor(name: string, parent: Directory | null, data: string = "") {
        super(name, parent);
        this.data = data;
    }

    show(): any {
        return this.data;
    }

}