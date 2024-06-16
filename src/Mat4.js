"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mat4 = void 0;
/**
 * A class representing a 4x4 matrix.
 */
class Mat4 {
    /**
     * Creates an instance of Mat4.
     * @param elements - Optional array of 16 numbers to initialize the matrix.
     */
    constructor(elements) {
        this.elements = elements || [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    }
    /**
     * Multiplies this matrix by another 4x4 matrix.
     * @param m - The matrix to multiply by.
     * @returns This matrix after multiplication.
     */
    multiply(m) {
        const a = this.elements;
        const b = m.elements;
        const result = new Array(16).fill(0);
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                for (let k = 0; k < 4; k++) {
                    result[row * 4 + col] += a[row * 4 + k] * b[k * 4 + col];
                }
            }
        }
        this.elements = result;
        return this;
    }
    /**
     * Transposes this matrix.
     * @returns This matrix after transposition.
     */
    transpose() {
        const m = this.elements;
        this.elements = [
            m[0], m[4], m[8], m[12],
            m[1], m[5], m[9], m[13],
            m[2], m[6], m[10], m[14],
            m[3], m[7], m[11], m[15]
        ];
        return this;
    }
    /**
     * Inverts this matrix.
     * @returns This matrix after inversion.
     * @throws Will throw an error if the matrix is not invertible.
     */
    invert() {
        const m = this.elements;
        const inv = new Array(16).fill(0);
        let det = 0;
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
            throw new Error("Matrix is not invertible.");
        }
        det = 1.0 / det;
        for (let i = 0; i < 16; i++) {
            inv[i] = inv[i] * det;
        }
        this.elements = inv;
        return this;
    }
    /**
     * Creates an identity matrix.
     * @returns A new identity matrix.
     */
    static identity() {
        return new Mat4();
    }
    /**
     * Creates a translation matrix.
     * @param x - The x component of the translation.
     * @param y - The y component of the translation.
     * @param z - The z component of the translation.
     * @returns A new translation matrix.
     */
    static translation(x, y, z) {
        return new Mat4([
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        ]);
    }
    /**
     * Creates a rotation matrix around the X-axis.
     * @param angle - The angle in radians.
     * @returns A new rotation matrix.
     */
    static rotationX(angle) {
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
     * Creates a rotation matrix around the Y-axis.
     * @param angle - The angle in radians.
     * @returns A new rotation matrix.
     */
    static rotationY(angle) {
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
     * Creates a rotation matrix around the Z-axis.
     * @param angle - The angle in radians.
     * @returns A new rotation matrix.
     */
    static rotationZ(angle) {
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
     * @param x - The scaling factor in the x direction.
     * @param y - The scaling factor in the y direction.
     * @param z - The scaling factor in the z direction.
     * @returns A new scaling matrix.
     */
    static scaling(x, y, z) {
        return new Mat4([
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        ]);
    }
    /**
     * Multiplies two matrices.
     * @param a - The first matrix.
     * @param b - The second matrix.
     * @returns A new matrix that is the product of a and b.
     */
    static multiply(a, b) {
        const ae = a.elements;
        const be = b.elements;
        const te = new Array(16);
        const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
        const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
        const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
        const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
        const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
        const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
        const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
        const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
        return new Mat4(te);
    }
    /**
     * Creates a perspective projection matrix.
     * @param fov - The field of view in radians.
     * @param aspect - The aspect ratio.
     * @param near - The near clipping plane.
     * @param far - The far clipping plane.
     * @returns A new perspective projection matrix.
     */
    static perspective(fov, aspect, near, far) {
        const tanHalfFovy = Math.tan(fov / 2);
        const rangeInv = 1 / (near - far);
        return new Mat4([
            1 / (aspect * tanHalfFovy), 0, 0, 0,
            0, 1 / tanHalfFovy, 0, 0,
            0, 0, (near + far) * rangeInv, 2 * near * far * rangeInv,
            0, 0, -1, 0
        ]);
    }
    /**
     * Creates an orthographic projection matrix.
     * @param left - The left plane.
     * @param right - The right plane.
     * @param bottom - The bottom plane.
     * @param top - The top plane.
     * @param near - The near clipping plane.
     * @param far - The far clipping plane.
     * @returns A new orthographic projection matrix.
     */
    static orthographic(left, right, bottom, top, near, far) {
        const lr = 1 / (left - right);
        const bt = 1 / (bottom - top);
        const nf = 1 / (near - far);
        return new Mat4([
            -2 * lr, 0, 0, (left + right) * lr,
            0, -2 * bt, 0, (top + bottom) * bt,
            0, 0, 2 * nf, (far + near) * nf,
            0, 0, 0, 1
        ]);
    }
    /**
     * Creates a lookAt matrix.
     * @param eye - The position of the eye.
     * @param center - The position to look at.
     * @param up - The up vector.
     * @returns A new lookAt matrix.
     */
    static lookAt(eye, center, up) {
        const f = center.subtract(eye).normalize();
        const s = f.cross(up.normalize());
        const u = s.cross(f);
        return new Mat4([
            s.x, u.x, -f.x, 0,
            s.y, u.y, -f.y, 0,
            s.z, u.z, -f.z, 0,
            -s.dot(eye), -u.dot(eye), f.dot(eye), 1
        ]);
    }
}
exports.Mat4 = Mat4;
