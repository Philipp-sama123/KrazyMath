import { Vec3 } from './Vec3';

export class Mat4 {
    elements: number[];


    /**
     * Creates an instance of Mat4.
     * @param elements - Optional array of 16 numbers to initialize the matrix.
     */
    constructor(elements?: number[]) {
        this.elements = elements || [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }

    /**
     * Creates a new Mat4 from an array of numbers.
     * @param array - The array of numbers (length must be 16).
     * @returns A new Mat4 instance.
     */
    static fromArray(array: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): Mat4 {
        return new Mat4([...array]);
    }

    /**
     * Converts the Mat4 instance to an array of numbers.
     * @returns An array of numbers representing the matrix.
     */
    toArray(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] {
        return this.elements as [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
    }

    /**
     * Clones the current matrix.
     * @returns A new Mat4 instance that is a copy of the current one.
     */
    clone(): Mat4 {
        return new Mat4([...this.elements]);
    }

    /**
     * Checks if two matrices are equal.
     * @param mat - The other matrix to compare with.
     * @returns True if the matrices are equal, false otherwise.
     */
    equals(mat: Mat4): boolean {
        return this.elements.every((value, index) => value === mat.elements[index]);
    }

    /**
        * Multiplies two matrices.
        * @param a - The first matrix.
        * @param b - The second matrix.
        * @returns A new Mat4 instance that is the result of the multiplication.
        */
    static multiply(a: Mat4, b: Mat4): Mat4 {
        const ae = a.elements;
        const be = b.elements;
        const te = new Float32Array(16);

        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                te[row * 4 + col] =
                    ae[row * 4 + 0] * be[0 * 4 + col] +
                    ae[row * 4 + 1] * be[1 * 4 + col] +
                    ae[row * 4 + 2] * be[2 * 4 + col] +
                    ae[row * 4 + 3] * be[3 * 4 + col];
            }
        }

        return new Mat4(Array.from(te));
    }
    /**
     * Transposes the current matrix.
     * @returns A new Mat4 instance that is the transposed matrix.
     */
    transpose(): Mat4 {
        const te = this.elements;
        return new Mat4([
            te[0], te[4], te[8], te[12],
            te[1], te[5], te[9], te[13],
            te[2], te[6], te[10], te[14],
            te[3], te[7], te[11], te[15],
        ]);
    }

    /**
     * Calculates the inverse of the matrix.
     * @returns A new Mat4 instance that is the inverse of this matrix.
     */
    inverse(): Mat4 {
        const m = this.elements;
        const inv = new Float32Array(16);
        let det;

        inv[0] = m[5] * m[10] * m[15] - 
                 m[5] * m[11] * m[14] - 
                 m[9] * m[6] * m[15] + 
                 m[9] * m[7] * m[14] +
                 m[13] * m[6] * m[11] - 
                 m[13] * m[7] * m[10];

        inv[4] = -m[4] * m[10] * m[15] + 
                  m[4] * m[11] * m[14] + 
                  m[8] * m[6] * m[15] - 
                  m[8] * m[7] * m[14] - 
                  m[12] * m[6] * m[11] + 
                  m[12] * m[7] * m[10];

        inv[8] = m[4] * m[9] * m[15] - 
                 m[4] * m[11] * m[13] - 
                 m[8] * m[5] * m[15] + 
                 m[8] * m[7] * m[13] + 
                 m[12] * m[5] * m[11] - 
                 m[12] * m[7] * m[9];

        inv[12] = -m[4] * m[9] * m[14] + 
                   m[4] * m[10] * m[13] +
                   m[8] * m[5] * m[14] - 
                   m[8] * m[6] * m[13] - 
                   m[12] * m[5] * m[10] + 
                   m[12] * m[6] * m[9];

        inv[1] = -m[1] * m[10] * m[15] + 
                  m[1] * m[11] * m[14] + 
                  m[9] * m[2] * m[15] - 
                  m[9] * m[3] * m[14] - 
                  m[13] * m[2] * m[11] + 
                  m[13] * m[3] * m[10];

        inv[5] = m[0] * m[10] * m[15] - 
                 m[0] * m[11] * m[14] - 
                 m[8] * m[2] * m[15] + 
                 m[8] * m[3] * m[14] + 
                 m[12] * m[2] * m[11] - 
                 m[12] * m[3] * m[10];

        inv[9] = -m[0] * m[9] * m[15] + 
                  m[0] * m[11] * m[13] + 
                  m[8] * m[1] * m[15] - 
                  m[8] * m[3] * m[13] - 
                  m[12] * m[1] * m[11] + 
                  m[12] * m[3] * m[9];

        inv[13] = m[0] * m[9] * m[14] - 
                  m[0] * m[10] * m[13] - 
                  m[8] * m[1] * m[14] + 
                  m[8] * m[2] * m[13] + 
                  m[12] * m[1] * m[10] - 
                  m[12] * m[2] * m[9];

        inv[2] = m[1] * m[6] * m[15] - 
                 m[1] * m[7] * m[14] - 
                 m[5] * m[2] * m[15] + 
                 m[5] * m[3] * m[14] + 
                 m[13] * m[2] * m[7] - 
                 m[13] * m[3] * m[6];

        inv[6] = -m[0] * m[6] * m[15] + 
                  m[0] * m[7] * m[14] + 
                  m[4] * m[2] * m[15] - 
                  m[4] * m[3] * m[14] - 
                  m[12] * m[2] * m[7] + 
                  m[12] * m[3] * m[6];

        inv[10] = m[0] * m[5] * m[15] - 
                  m[0] * m[7] * m[13] - 
                  m[4] * m[1] * m[15] + 
                  m[4] * m[3] * m[13] + 
                  m[12] * m[1] * m[7] - 
                  m[12] * m[3] * m[5];

        inv[14] = -m[0] * m[5] * m[14] + 
                   m[0] * m[6] * m[13] + 
                   m[4] * m[1] * m[14] - 
                   m[4] * m[2] * m[13] - 
                   m[12] * m[1] * m[6] + 
                   m[12] * m[2] * m[5];

        inv[3] = -m[1] * m[6] * m[11] + 
                  m[1] * m[7] * m[10] + 
                  m[5] * m[2] * m[11] - 
                  m[5] * m[3] * m[10] - 
                  m[9] * m[2] * m[7] + 
                  m[9] * m[3] * m[6];

        inv[7] = m[0] * m[6] * m[11] - 
                 m[0] * m[7] * m[10] - 
                 m[4] * m[2] * m[11] + 
                 m[4] * m[3] * m[10] + 
                 m[8] * m[2] * m[7] - 
                 m[8] * m[3] * m[6];

        inv[11] = -m[0] * m[5] * m[11] + 
                   m[0] * m[7] * m[9] + 
                   m[4] * m[1] * m[11] - 
                   m[4] * m[3] * m[9] - 
                   m[8] * m[1] * m[7] + 
                   m[8] * m[3] * m[5];

        inv[15] = m[0] * m[5] * m[10] - 
                  m[0] * m[6] * m[9] - 
                  m[4] * m[1] * m[10] + 
                  m[4] * m[2] * m[9] + 
                  m[8] * m[1] * m[6] - 
                  m[8] * m[2] * m[5];

        det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];

        if (det === 0) {
            throw new Error("Matrix is singular and cannot be inverted.");
        }

        det = 1.0 / det;

        for (let i = 0; i < 16; i++) {
            inv[i] = inv[i] * det;
        }

        return new Mat4(Array.from(inv));
    }

    /**
     * Calculates the determinant of the current matrix.
     * @returns The determinant of the matrix.
     */
    determinant(): number {
        const m = this.elements;
        return (
            m[0] * m[5] * m[10] * m[15] -
            m[0] * m[5] * m[11] * m[14] -
            m[0] * m[9] * m[6] * m[15] +
            m[0] * m[9] * m[7] * m[14] +
            m[0] * m[13] * m[6] * m[11] -
            m[0] * m[13] * m[7] * m[10] -
            m[4] * m[1] * m[10] * m[15] +
            m[4] * m[1] * m[11] * m[14] +
            m[4] * m[9] * m[2] * m[15] -
            m[4] * m[9] * m[3] * m[14] -
            m[4] * m[13] * m[2] * m[11] +
            m[4] * m[13] * m[3] * m[10] +
            m[8] * m[1] * m[6] * m[15] -
            m[8] * m[1] * m[7] * m[14] -
            m[8] * m[5] * m[2] * m[15] +
            m[8] * m[5] * m[3] * m[14] +
            m[8] * m[13] * m[2] * m[7] -
            m[8] * m[13] * m[3] * m[6] -
            m[12] * m[1] * m[6] * m[11] +
            m[12] * m[1] * m[7] * m[10] +
            m[12] * m[5] * m[2] * m[11] -
            m[12] * m[5] * m[3] * m[10] -
            m[12] * m[9] * m[2] * m[7] +
            m[12] * m[9] * m[3] * m[6]
        );
    }

    /**
     * Creates a translation matrix.
     * @param v - The vector representing the translation.
     * @returns A new Mat4 instance representing the translation matrix.
     */
    static translation(v: Vec3): Mat4 {
        return new Mat4([
            1, 0, 0, v.x,
            0, 1, 0, v.y,
            0, 0, 1, v.z,
            0, 0, 0, 1
        ]);
            // or
            // 1, 0, 0,0,
            // 0, 1, 0, 0,
            // 0, 0, 1,0,
            // v.x, v.y,  v.z, 1
    }

    /**
     * Creates a rotation matrix around the X axis.
     * @param angle - The angle in radians.
     * @returns A new Mat4 instance representing the rotation matrix.
     */
    static rotationX(angle: number): Mat4 {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return new Mat4([
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1
        ]);
    }

    /**
     * Creates a rotation matrix around the Y axis.
     * @param angle - The angle in radians.
     * @returns A new Mat4 instance representing the rotation matrix.
     */
    static rotationY(angle: number): Mat4 {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return new Mat4([
            c, 0, s, 0,
            0, 1, 0, 0,
            -s, 0, c, 0,
            0, 0, 0, 1
        ]);
    }

    /**
     * Creates a rotation matrix around the Z axis.
     * @param angle - The angle in radians.
     * @returns A new Mat4 instance representing the rotation matrix.
     */
    static rotationZ(angle: number): Mat4 {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return new Mat4([
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    /**
     * Creates a scaling matrix.
     * @param v - The vector representing the scaling factors.
     * @returns A new Mat4 instance representing the scaling matrix.
     */
    static scaling(v: Vec3): Mat4 {
        return new Mat4([
            v.x, 0, 0, 0,
            0, v.y, 0, 0,
            0, 0, v.z, 0,
            0, 0, 0, 1
        ]);
    }

    /**
     * Transforms a point by the current matrix.
     * @param v - The point to be transformed.
     * @returns A new Vec3 instance representing the transformed point.
     */
    transformPoint(v: Vec3): Vec3 {
        const x = this.elements[0] * v.x + this.elements[4] * v.y + this.elements[8] * v.z + this.elements[12];
        const y = this.elements[1] * v.x + this.elements[5] * v.y + this.elements[9] * v.z + this.elements[13];
        const z = this.elements[2] * v.x + this.elements[6] * v.y + this.elements[10] * v.z + this.elements[14];
        return new Vec3(x, y, z);
    }
}
