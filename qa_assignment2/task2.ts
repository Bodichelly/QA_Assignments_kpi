import {Directory} from "./src/Directory";
import {BinaryFile} from "./src/BinaryFile";
import {BufferFile} from "./src/BufferFile";
import {LogTextFile} from "./src/LogTextFile";

const rootDir = new Directory('root', null);
const dir1 = new Directory('dir1', null );
const dir2 = new Directory('dir2', null );
const dir3 = new Directory('dir3', null );
rootDir.addFile(dir1);
rootDir.addFile(dir2);
dir2.addFile(dir3);

const binf = new BinaryFile('binf', rootDir, 'rived express highest men did boy. Mistress sensible');
const binf2 = new BinaryFile('binf2', dir1, 'travelling own simplicity you astonished expression');
const binf3 = new BinaryFile('binf3', dir2, 'strument boisterous frequently apartments an');
const binf5 = new BinaryFile('binf5', dir3, 'Mrs door paid led loud sure easy read. Hastily at ');
const binf4 = new BinaryFile('binf4', dir3, 's cordially depending at at. Its strangers who you certainty earnestly resources suffering she. Be an as cor');
const bufff = new BufferFile('bufff', dir1);
bufff.push({ test: 'test' });
bufff.push(['a', 'b', 'c']);
const logf = new LogTextFile('logf', dir2);
logf.push('test2');
logf.push('test3');

rootDir.show(true, 1);