# KracyMath

KracyMath is a lightweight library for 3D vector and matrix operations.

## Installation

```sh

Usage
Vec3

# todo
npm install KracyMath

import { Vec3 } from 'KracyMath/dist/Vec3';

const v1 = new Vec3(1, 2, 3);
const v2 = new Vec3(4, 5, 6);
const result = v1.add(v2);
console.log(result); // Vec3 { x: 5, y: 7, z: 9 }



Mat4
import { Mat4 } from 'KracyMath/dist/Mat4';

const m1 = Mat4.identity();
const m2 = Mat4.translation(1, 2, 3);
const mResult = Mat4.multiply(m1, m2);
console.log(mResult);



### 3. **Code Quality**
Use tools to ensure code quality and consistency.

#### Install ESLint:
```sh
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
