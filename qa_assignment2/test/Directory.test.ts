import { Directory } from './../src/Directory';
import {BufferFile} from "../src/BufferFile";

describe('Directory', () => {
    const OLD_ENV = process.env;

    beforeAll(() => {
        process.env = {
            ...OLD_ENV,
            DIR_MAX_ELEMS: '2',
        };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    const rootDir = new Directory('root', null);

    test('should be successfully created', () => {
        expect(() => new Directory('tmp1', rootDir)).not.toThrowError();
    });

    const dirname = 'dirname';
    const dir = new Directory(dirname, rootDir);

    test('contains proper items', () => {
        expect(rootDir.show()[0].name).toEqual(dir.name);
    });

    test('should have a proper dirname', () => {
        expect(dir.name).toBe(dirname);
    });

    test('should have a proper parent', () => {
        expect(dir.parent).toBe(rootDir);
    });

    test('should have a proper default files', () => {
        expect(dir.show().length).toBe(0);
    });

    test('moving the root directory', () => {
        expect(() => {
            const newDir = new Directory('new_dir', null);
            const tmpDir = new Directory('tmp_dir', null);
            newDir.addFile(tmpDir);
            newDir.moveTo(dir);
        }).toThrowError();
    });

    test('moving the nested directory', () => {
        expect(() => {
            const newDir = new Directory('new_dir', null);
            const tmpDir1 = new Directory('tmp_dir1', newDir);
            const tmpDir2 = new Directory('tmp_dir2', null);
            tmpDir1.moveTo(tmpDir2);
        }).not.toThrowError();
    });
    test('adding file with issue', () => {
        expect(() => {
            const newDir = new Directory('new_dir', null);
            newDir.addFile(null);
        }).toThrowError();
    });
    test('overflowing the directory', () => {
        expect(() => {
            dir.addFile(new Directory('dir1', null));
            dir.addFile(new Directory('dir2', null));
            dir.addFile(new Directory('dir3', null));
        }).toThrowError();
    });
});