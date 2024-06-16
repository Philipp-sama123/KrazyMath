"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec3 = void 0;
/**
 * A class representing a 3D vector.
 */
class Vec3 {
    /**
     * Creates an instance of Vec3.
     * @param x - The x component.
     * @param y - The y component.
     * @param z - The z component.
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Adds another vector to this vector.
     * @param v - The vector to add.
     * @returns This vector after addition.
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    /**
     * Subtracts another vector from this vector.
     * @param v - The vector to subtract.
     * @returns This vector after subtraction.
     */
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    /**
     * Multiplies this vector by a scalar.
     * @param scalar - The scalar to multiply by.
     * @returns This vector after multiplication.
     */
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    /**
     * Normalizes this vector.
     * @returns This vector after normalization.
     */
    normalize() {
        const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        if (length > 0) {
            this.x /= length;
            this.y /= length;
            this.z /= length;
        }
        return this;
    }
    /**
     * Computes the dot product with another vector.
     * @param v - The vector to compute the dot product with.
     * @returns The dot product.
     */
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    /**
     * Computes the cross product with another vector.
     * @param v - The vector to compute the cross product with.
     * @returns A new vector that is the cross product of this vector and v.
     */
    cross(v) {
        return new Vec3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
}
exports.Vec3 = Vec3;
