import { Mat4 } from '../Mat4';
import { Vec3 } from '../Vec3';

describe('Mat4 Class Tests', () => {
    test('Example Test', () => {
        const identity = Mat4.identity();
        const v = new Vec3(1, 2, 3);
        const result = identity.transformPoint(v);
        expect(result).toEqual(new Vec3(1, 2, 3)); // Replace with actual expected result
    });

    test('Matrix multiplication', () => {
        const matA = new Mat4([
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]);
        const matB = new Mat4([
            17, 18, 19, 20,
            21, 22, 23, 24,
            25, 26, 27, 28,
            29, 30, 31, 32
        ]);
        const result = Mat4.multiply(matA, matB);
        expect(result.elements).toEqual([
            250, 260, 270, 280,
            618, 644, 670, 696,
            986, 1028, 1070, 1112,
            1354, 1412, 1470, 1528
        ]);
    });
});
