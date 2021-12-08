import { Directory } from './../src/Directory';
import { BinaryFile } from './../src/BinaryFile';

describe('Binary file', () => {
    const rootDir = new Directory( 'root', null);

    test('should be successfully created', () => {
        expect(() => new BinaryFile('file1', rootDir)).not.toThrowError();
    });

    describe('default file', () => {
        const bf = new BinaryFile('file1', rootDir);

        test('should have a proper default content', () => {
            expect(bf.show()).toBe('');
        });

        test('should have a proper parent', () => {
            expect(bf.parent).toBe(rootDir);
        });
    });

    describe('named and filled file', () => {
        const content = 'lorem ipsum dolor sit amet...';
        const filename = 'file3';
        const bf = new BinaryFile(filename, rootDir, content);

        test('should have a proper filename', () => {
            expect(bf.name).toBe(filename);
        });

        test('should have a proper content', () => {
            expect(bf.show()).toBe(content);
        });
    });
});