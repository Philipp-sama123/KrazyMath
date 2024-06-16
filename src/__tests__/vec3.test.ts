import { Vec3 } from "../Vec3";

describe('Vec3 Class Tests', () => {
    const v1 = new Vec3(1, 2, 3);
    const v2 = new Vec3(4, 5, 6);

    test('Basic Operations: Addition', () => {
        const result = new Vec3().add(v1).add(v2);
        expect(result).toEqual(new Vec3(5, 7, 9));
      //  expect(v1).toEqual(new Vec3(1, 2, 3)); // Ensure immutability
    });

    test('Basic Operations: Subtraction', () => {
        const result = v1.subtract(v2);
        expect(result).toEqual(new Vec3(-3, -3, -3));
        expect(v1).toEqual(new Vec3(1, 2, 3)); // Ensure immutability
    });

    test('Basic Operations: Scalar Multiplication', () => {
        const scalar = 2;
        const result = v1.multiplyScalar(scalar);
        expect(result).toEqual(new Vec3(2, 4, 6));
    //   expect(v1).toEqual(new Vec3(1, 2, 3)); // Ensure immutability
    });

    test('Basic Operations: Magnitude', () => {
        const result = v1.magnitude();
        expect(result).toBeCloseTo(Math.sqrt(1 + 4 + 9), 5);
    });

    test('Basic Operations: Dot Product', () => {
        const result = v1.dot(v2);
        expect(result).toBe(1 * 4 + 2 * 5 + 3 * 6);
    });

    test('Edge Cases: Zero Vector', () => {
        const zeroVec = new Vec3(0, 0, 0);
        expect(zeroVec.multiplyScalar(2)).toEqual(zeroVec);
    });
});
