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
        console.error("before",this);
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        console.error("after",this);

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
     * Computes the cross product with another vector.
     * @param v - The vector to compute the cross product with.
     * @returns A new vector that is the cross product of this vector and v.
     */
    cross(v: Vec3): Vec3 {
        return new Vec3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    }

    /**
     * Calculates the magnitude (length) of this vector.
     * @returns The magnitude of the vector.
     */
    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}
