import { Mat4 } from "../Mat4";
import { Vec3 } from "../Vec3";

describe('Mat4 Class Tests', () => {
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

    describe('Basic Operations', () => {

        test('Matrix Multiplication', () => {
            const result = Mat4.multiply(matA, matB);
            const expected = new Mat4([
                250, 260, 270, 280,
                618, 644, 670, 696,
                986, 1028, 1070, 1112,
                1354, 1412, 1470, 1528
            ]);
            expect(result.elements).toEqual(expected.elements);
        });

        test('Transpose', () => {
            const result = matA.transpose();
            const expected = new Mat4([
                1, 5, 9, 13,
                2, 6, 10, 14,
                3, 7, 11, 15,
                4, 8, 12, 16
            ]);
            expect(result.elements).toEqual(expected.elements);
        });

        test('Inverse', () => {
            const mat = new Mat4([
                1, 2, 3, 0,
                0, 1, 4, 0,
                0, 0, 1, 0,
                1, 0, 0, 1
            ]);

            const result = mat.inverse();
            const expected = new Mat4([
                1, -2, 5, 0,
                0, 1, -4, 0,
                0, 0, 1, 0,
                -1, 2, -5, 1
            ]);

            // Expect each element to be close due to floating-point precision
            result.elements.forEach((value, index) => {
                expect(value).toBeCloseTo(expected.elements[index], 5);
            });
        });
        test('Determinant', () => {
            const result = matA.determinant();
            const expected = 0; // The determinant of this particular matrix is 0
            expect(result).toBeCloseTo(expected, 5);
        });
    });

    describe('Transformations', () => {

        test('Translation', () => {
            const translation = Mat4.translation(new Vec3(1, 2, 3));
            const expected = new Mat4([
                1, 0, 0, 1,
                0, 1, 0, 2,
                0, 0, 1, 3,
                0, 0, 0, 1
            ]);
            expect(translation.elements).toEqual(expected.elements);
        });

        test('Rotation', () => {
            const rotation = Mat4.rotationX(Math.PI / 4);
            const expected = new Mat4([
                1, 0, 0, 0,
                0, Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0,
                0, Math.sin(Math.PI / 4), Math.cos(Math.PI / 4), 0,
                0, 0, 0, 1
            ]);
            rotation.elements.forEach((value, index) => {
                expect(value).toBeCloseTo(expected.elements[index], 5);
            });
        });

        test('Scaling', () => {
            const scaling = Mat4.scaling(new Vec3(2, 3, 4));
            const expected = new Mat4([
                2, 0, 0, 0,
                0, 3, 0, 0,
                0, 0, 4, 0,
                0, 0, 0, 1
            ]);
            expect(scaling.elements).toEqual(expected.elements);
        });

        test('Transform Point', () => {
            const point = new Vec3(1, 1, 1);
            let transform = Mat4.translation(new Vec3(1, 2, 3));
            const result = transform.transformPoint(point);
            const expected = new Vec3(2, 3, 4);
            expect(result).toEqual(expected);
        });
    });

    describe('Utility Methods', () => {

        test('Clone Method', () => {
            const matAClone = matA.clone();
            expect(matAClone).toEqual(matA);
            expect(matA === matAClone).toBe(false); // Ensure they are not the same instance
        });

        test('Equality Check', () => {
            const matBClone = matB.clone();
            expect(matA.equals(matB)).toBe(false);
            expect(matB.equals(matBClone)).toBe(true);
        });

        test('Convert to and from Array', () => {
            const array = [
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 10, 11, 12,
                13, 14, 15, 16
            ] as [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
            const matFromArray = Mat4.fromArray(array);
            expect(matFromArray.elements).toEqual(matA.elements);
            const arrayFromMat = matFromArray.toArray();
            expect(arrayFromMat).toEqual(array);
        });
    });
      // New test for transformPoint method
      describe('transformPoint Method', () => {
        test('Transforms a point using the matrix', () => {
            const point = new Vec3(1, 1, 1);
            const matrix = new Mat4([
                2, 0, 0, 1,
                0, 2, 0, 2,
                0, 0, 2, 3,
                0, 0, 0, 1
            ]);
            const result = matrix.transformPoint(point);
            const expected = new Vec3(3, 4, 5);
            expect(result.equals(expected)).toBe(true);
        });

        test('Transforms a point with translation matrix', () => {
            const point = new Vec3(1, 1, 1);
            const translationMatrix = Mat4.translation(new Vec3(5, -3, 2));
            const result = translationMatrix.transformPoint(point);
            const expected = new Vec3(6, -2, 3);
            expect(result.equals(expected)).toBe(true);
        });

        test('Transforms a point with identity matrix', () => {
            const point = new Vec3(1, 2, 3);
            let identityMatrix = new Mat4([
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ]);
            const result = identityMatrix.transformPoint(point);
            expect(result.equals(point)).toBe(true);
        });

        test('Transforms a point with scaling matrix', () => {
            const point = new Vec3(1, 1, 1);
            const scalingMatrix = new Mat4([
                2, 0, 0, 0,
                0, 3, 0, 0,
                0, 0, 4, 0,
                0, 0, 0, 1
            ]);
            const result = scalingMatrix.transformPoint(point);
            const expected = new Vec3(2, 3, 4);
            expect(result.equals(expected)).toBe(true);
        });
    });
});
