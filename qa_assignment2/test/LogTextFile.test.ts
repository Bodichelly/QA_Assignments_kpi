import { Directory } from './../src/Directory';
import { LogTextFile } from './../src/LogTextFile';

describe('Log text file', () => {
    const rootDir = new Directory('root', null);

    test('should be successfully created', () => {
        expect(() => new LogTextFile('file1', rootDir)).not.toThrowError();
    });

    const filename = 'filename';
    const ltf = new LogTextFile(filename, rootDir);

    test('should have a proper filename', () => {
        expect(ltf.name).toBe(filename);
    });

    test('should have a proper parent', () => {
        expect(ltf.parent).toBe(rootDir);
    });

    test('should have a proper default content', () => {
        expect(ltf.show()).toBe('');
    });

    test('should append content to the end of the file', () => {
        ltf.push('a');
        expect(ltf.show()).toBe('a\n');
        ltf.push('b');
        expect(ltf.show()).toBe('a\nb\n');
    });
});