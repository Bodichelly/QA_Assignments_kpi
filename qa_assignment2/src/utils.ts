export function printData(name:string = '', data:any, shiftStr:string = ''):any {
    if(name){
        console.log("+++++++".repeat(shiftStr.length)+' FILENAME: '+name+'\n');
    }
    console.log(shiftStr+'\t', JSON.stringify(data, null, 2).replace(/\n\r?/g, `\n ${shiftStr+'\t'}`));
    console.log('\n');
}