/**
 * A class representing a 3D vector.
 */
export class Vec3 {
    x: number;
    y: number;
    z: number;

    /**
     * Creates an instance of Vec3.
     * @param x - The x component. Default is 0.
     * @param y - The y component. Default is 0.
     * @param z - The z component. Default is 0.
     */
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Adds another vector to this vector.
     * @param v - The vector to add.
     * @returns This vector after addition.
     */
    add(v: Vec3): Vec3 {
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
    subtract(v: Vec3): Vec3 {
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
    multiplyScalar(scalar: number): Vec3 {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }

    /**
     * Normalizes this vector.
     * @returns This vector after normalization.
     */
    normalize(): Vec3 {
        const length = this.magnitude();
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
    dot(v: Vec3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    /**
     * Calculates the cross product of this vector with another vector.
     * @param {Vec3} other - The other vector.
     * @returns {Vec3} The cross product vector.
     */
    cross(other: Vec3): Vec3 {
        return new Vec3(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x
        );
    }

    /**
     * Calculates the magnitude (length) of this vector.
     * @returns The magnitude of the vector.
     */
    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Calculates the angle between this vector and another vector.
     * @param {Vec3} other - The other vector.
     * @returns {number} The angle in radians.
     */
    angleTo(other: Vec3): number {
        const dotProduct = this.dot(other);
        const magnitudes = this.magnitude() * other.magnitude();
        if (magnitudes === 0) return 0;
        return Math.acos(dotProduct / magnitudes);
    }

    /**
     * Linearly interpolates between this vector and another vector.
     * @param {Vec3} other - The other vector.
     * @param {number} t - The interpolation factor (0 <= t <= 1).
     * @returns {Vec3} The interpolated vector.
     */
    lerp(other: Vec3, t: number): Vec3 {
        return new Vec3(
            this.x + (other.x - this.x) * t,
            this.y + (other.y - this.y) * t,
            this.z + (other.z - this.z) * t
        );
    }

    /**
     * Creates a Vec3 instance from an array of numbers.
     * @param {number[]} array - The array containing x, y, and z values.
     * @returns {Vec3} A new Vec3 instance.
     */
    static fromArray(array: [number, number, number]): Vec3 {
        return new Vec3(array[0], array[1], array[2]);
    }

    /**
     * Converts this vector to an array.
     * @returns {number[]} An array containing the x, y, and z values.
     */
    toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    /**
     * Creates a new Vec3 instance with the same x, y, and z values.
     * @returns {Vec3} A new Vec3 instance that is a clone of the current instance.
     */
    clone(): Vec3 {
        return new Vec3(this.x, this.y, this.z);
    }

    /**
     * Checks if another Vec3 instance has the same x, y, and z values.
     * @param {Vec3} other - The other Vec3 instance to compare.
     * @returns {boolean} True if the vectors are equal, otherwise false.
     */
    equals(other: Vec3): boolean {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }
}
