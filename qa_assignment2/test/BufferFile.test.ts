import { Directory } from './../src/Directory';
import { BufferFile } from './../src/BufferFile';

describe('Buffer file', () => {
    const OLD_ENV = process.env;

    beforeAll(() => {
        process.env = {
            ...OLD_ENV,
            MAX_BUF_FILE_SIZE: '2',
        };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    const rootDir = new Directory('root', null);

    test('should be successfully created', () => {
        expect(() => new BufferFile('buffer1', rootDir)).not.toThrowError();
    });

    const filename = 'filename';
    const bf = new BufferFile(filename, rootDir);

    test('should have a proper filename', () => {
        expect(bf.name).toBe(filename);
    });

    test('should have a proper parent', () => {
        expect(bf.parent).toBe(rootDir);
    });

    test('reading data from the empty buffer', () => {
        expect(() => bf.show).toThrowError();
    });

    test('buffer should work like a queue', function() {
        bf.push({ test: 'test' });
        bf.push(['a', 'b', 'c']);

        expect(bf.show().test).toBe('test');
        expect(bf.show().includes('d')).toBe(false);

        bf.push(15);

        expect(bf.show()).toBeLessThan(20);
    });

    test('overflowing the buffer', () => {
        expect(() => {
            bf.push(18);
            bf.push([{}, 'a']);
            bf.push({ 'a': 4 });
        }).toThrowError();
    });
});