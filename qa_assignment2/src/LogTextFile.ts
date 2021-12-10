import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";
import {printData} from "./utils";

export class LogTextFile  extends FSBasicNode{
    private data: string = "";

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

    push(dataElement: string): void {
        if(dataElement){
            this.data += `${dataElement}\n`;
        }
    }
}