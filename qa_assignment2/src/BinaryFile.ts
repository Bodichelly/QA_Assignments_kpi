import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";
import {printData} from "./utils";

export class BinaryFile extends FSBasicNode{
    private readonly data: string = "";

    constructor(name: string, parent: Directory | null, data: string = "") {
        super(name, parent);
        this.data = data;
    }

    show(log:boolean = false, treeLevel:number = 0): any {
        if(log){
            printData(this.name ,this.data, '\t'.repeat(treeLevel));
        }
        return this.data;
    }

}