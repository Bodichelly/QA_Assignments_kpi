import {FSBasicNode} from "./FSBasicNode";
import {Directory} from "./Directory";

export class BufferFile extends FSBasicNode{
    private data: string[] = [];

    constructor(name: string, parent: Directory | null, initialData: string[] = []) {
        super(name, parent);
        if(initialData) {
            initialData.forEach(el=>this.push(el));
        }
    }

    show(): any {
        return this.data;
    }

    push(dataElement: any): void {
        if (this.data.length + 1 > Number(process.env.MAX_BUF_FILE_SIZE)) {
            throw new Error('Buffer files limit reached');
        }

        try {
            const serializedData = JSON.stringify(dataElement);
            this.data.push(serializedData);
        } catch (error) {
            throw new Error('Data validation issue');
        }
    }

    pop(): any {
        if (!this.data.length) {
            throw new Error('The buffer is empty');
        }
        return JSON.parse(this.data.shift() || '');;
    }
}