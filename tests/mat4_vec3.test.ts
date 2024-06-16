import { Mat4 } from "../src/Mat4";
import { Vec3 } from "../src/Vec3";
// describe('Mat4', () => {
//     let mat: Mat4;

//     beforeEach(() => {
//         mat = new Mat4();
//     });

//     test('Identity matrix', () => {
//         const identity = Mat4.identity();
//         const expectedElements = [
//             1, 0, 0, 0,
//             0, 1, 0, 0,
//             0, 0, 1, 0,
//             0, 0, 0, 1,
//         ];

//         expect(identity.elements).toEqual(expectedElements);
//     });

//     test('Matrix multiplication', () => {
//         const matA = new Mat4([
//             1, 2, 3, 4,
//             5, 6, 7, 8,
//             9, 10, 11, 12,
//             13, 14, 15, 16,
//         ]);

//         const matB = new Mat4([
//             17, 18, 19, 20,
//             21, 22, 23, 24,
//             25, 26, 27, 28,
//             29, 30, 31, 32,
//         ]);

//         const result = Mat4.multiply(matA, matB);
//         const expectedElements = [
//             250, 260, 270, 280,
//             618, 644, 670, 696,
//             986, 1028, 1070, 1112,
//             1354, 1412, 1470, 1528,
//         ];

//         expect(result.elements).toEqual(expectedElements);
//     });

//     test('Matrix inversion', () => {
//         const matA = new Mat4([
//             4, 0, 0, 0,
//             0, 7, 0, 0,
//             0, 0, 2, 0,
//             0, 0, 0, 1,
//         ]);

//         const invMatA = matA.invert();
//         const expectedElements = [
//             0.25, 0, 0, 0,
//             0, 0.14285714285714285, 0, 0,
//             0, 0, 0.5, 0,
//             0, 0, 0, 1,
//         ];

//         expect(invMatA.elements).toEqual(expectedElements);
//     });

//     test('Matrix transposition', () => {
//         const matA = new Mat4([
//             1, 2, 3, 4,
//             5, 6, 7, 8,
//             9, 10, 11, 12,
//             13, 14, 15, 16,
//         ]);

//         const transposedMat = matA.transpose();
//         const expectedElements = [
//             1, 5, 9, 13,
//             2, 6, 10, 14,
//             3, 7, 11, 15,
//             4, 8, 12, 16,
//         ];

//         expect(transposedMat.elements).toEqual(expectedElements);
//     });

//     // Add more tests for other matrix operations as needed
// });

// describe('Vec3', () => {
//     let vec: Vec3;

//     beforeEach(() => {
//         vec = new Vec3(1, 2, 3);
//     });

//     test('Vector addition', () => {
//         const anotherVec = new Vec3(4, 5, 6);
//         vec.add(anotherVec);
//         expect(vec).toEqual({ x: 5, y: 7, z: 9 });
//     });

//     test('Vector subtraction', () => {
//         const anotherVec = new Vec3(4, 5, 6);
//         vec.subtract(anotherVec);
//         expect(vec).toEqual({ x: -3, y: -3, z: -3 });
//     });

//     test('Vector multiplication by scalar', () => {
//         const scalar = 2;
//         vec.multiplyScalar(scalar);
//         expect(vec).toEqual({ x: 2, y: 4, z: 6 });
//     });

//     test('Vector normalization', () => {
//         vec.normalize();
//         const magnitude = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
//         expect(magnitude).toBeCloseTo(1);
//     });

//     test('Vector dot product', () => {
//         const anotherVec = new Vec3(4, 5, 6);
//         const dotProduct = vec.dot(anotherVec);
//         expect(dotProduct).toEqual(32); // 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
//     });

//     test('Vector cross product', () => {
//         const anotherVec = new Vec3(4, 5, 6);
//         const crossProduct = vec.cross(anotherVec);
//         expect(crossProduct).toEqual({ x: -3, y: 6, z: -3 });
//     });

//     // Add more tests for other vector operations as needed
// });

// describe('Mat4', () => {
//     test('Identity matrix', () => {
//         const identity = Mat4.identity();
//         expect(identity.elements).toEqual([
//             1, 0, 0, 0,
//             0, 1, 0, 0,
//             0, 0, 1, 0,
//             0, 0, 0, 1,
//         ]);
//     });

//     test('Matrix multiplication', () => {
//         const matA = new Mat4([
//             1, 2, 3, 4,
//             5, 6, 7, 8,
//             9, 10, 11, 12,
//             13, 14, 15, 16,
//         ]);

//         const matB = new Mat4([
//             17, 18, 19, 20,
//             21, 22, 23, 24,
//             25, 26, 27, 28,
//             29, 30, 31, 32,
//         ]);

//         const result = Mat4.multiply(matA, matB);
//         expect(result.elements).toEqual([
//             250, 260, 270, 280,
//             618, 644, 670, 696,
//             986, 1028, 1070, 1112,
//             1354, 1412, 1470, 1528,
//         ]);
//     });

//     // Add more tests for other matrix operations as needed
// });

describe('Vec3', () => {
    test('Vector addition', () => {
        const vec = new Vec3(1, 2, 3);
        vec.add(new Vec3(4, 5, 6));
        expect(vec).toEqual({ x: 5, y: 7, z: 9 });
    });

    test('Vector multiplication by scalar', () => {
        const vec = new Vec3(1, 2, 3);
        vec.multiplyScalar(2);
        expect(vec).toEqual({ x: 2, y: 4, z: 6 });
    });

    // Add more tests for other vector operations as needed
});
