import { Directory } from './../src/Directory';
import { BinaryFile } from './../src/BinaryFile';

describe('Extras', () => {
    const rootDir = new Directory('root', null);

    test('remove file', () => {
        const bf = new BinaryFile('file1', rootDir);
        expect(rootDir.show().length).toBe(1);

        bf.remove();
        expect(rootDir.files.length).toBe(0);
    });

    test('duplicate file', () => {
        const filename = 'filename';

        expect(() => {
            new BinaryFile(filename, rootDir);
            new BinaryFile(filename, rootDir);
        }).toThrowError();
    });

    test('file movement', () => {
        const newDir = new Directory('dir', null );
        rootDir.addFile(newDir);

        const bf = new BinaryFile('file2', rootDir);
        expect(rootDir.show().includes(bf)).toBeTruthy();

        bf.moveTo(newDir);
        expect(newDir.show().includes(bf)).toBeTruthy();
    });
});