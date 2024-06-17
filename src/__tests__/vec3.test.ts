import { Vec3 } from "../Vec3";

describe('Vec3 Class Tests', () => {
    const v1 = new Vec3(1, 2, 3);
    const v2 = new Vec3(4, 5, 6);

    describe('Basic Operations', () => {

        test('Addition', () => {
            let testingVec = v1.clone();
            const result = testingVec.add(v2);
            expect(result).toEqual(new Vec3(5, 7, 9));
        });

        test('Subtraction', () => {
            let testingVec = v1.clone();
            const result = testingVec.subtract(v2);
            expect(result).toEqual(new Vec3(-3, -3, -3));
        });

        test('Scalar Multiplication', () => {
            const scalar = 2;
            let testingVec = v1.clone();
            const result = testingVec.multiplyScalar(scalar);
            expect(result).toEqual(new Vec3(2, 4, 6));
        });

        test('Magnitude', () => {
            let testingVec = v1.clone();
            const result = testingVec.magnitude();
            expect(result).toBeCloseTo(Math.sqrt(1 + 4 + 9), 5);
        });

        test('Dot Product', () => {
            let testingVec = v1.clone();
            const result = testingVec.dot(v2);
            expect(result).toBe(1 * 4 + 2 * 5 + 3 * 6);
        });

        test('Normalization', () => {
            let testingVec = v1.clone();
            const result = testingVec.normalize();
            const magnitude = v1.magnitude();
            const expected = new Vec3(1 / magnitude, 2 / magnitude, 3 / magnitude);
            expect(result.x).toBeCloseTo(expected.x);
            expect(result.y).toBeCloseTo(expected.y);
            expect(result.z).toBeCloseTo(expected.z);
        });

        test('Cross Product', () => {
            const v3 = new Vec3(1, 0, 0);
            const v4 = new Vec3(0, 1, 0);
            const result = v3.cross(v4);
            expect(result).toEqual(new Vec3(0, 0, 1));
        });

        test('Angle Between Vectors', () => {
            const v3 = new Vec3(1, 0, 0);
            const v4 = new Vec3(0, 1, 0);
            const result = v3.angleTo(v4);
            expect(result).toBeCloseTo(Math.PI / 2);
        });

        test('Linear Interpolation (Lerp)', () => {
            const result = v1.lerp(v2, 0.5);
            expect(result).toEqual(new Vec3(2.5, 3.5, 4.5));
        });

        test('Convert to and from Array', () => {
            const array = [1, 2, 3] as [number, number, number];
            const vecFromArray = Vec3.fromArray(array);
            expect(vecFromArray).toEqual(v1);
            const arrayFromVec = vecFromArray.toArray();
            expect(arrayFromVec).toEqual(array);
        });
    });

    describe('Edge Cases', () => {

        test('Zero Vector', () => {
            const zeroVec = new Vec3(0, 0, 0);
            expect(zeroVec.multiplyScalar(2)).toEqual(zeroVec);
        });
    });

    describe('Utility Methods', () => {

        test('Clone Method', () => {
            const v1Clone = v1.clone();
            expect(v1Clone).toEqual(new Vec3(1, 2, 3));
            expect(v1 === v1Clone).toBe(false); // Ensure they are not the same instance
        });

        test('Equality Check', () => {
            const v3 = new Vec3(1, 2, 3);
            const v4 = new Vec3(4, 5, 6);
            expect(v1.equals(v3)).toBe(true);
            expect(v1.equals(v4)).toBe(false);
        });
    });
});
