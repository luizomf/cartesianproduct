"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianProductGenerator = exports.cartesianProduct = void 0;
function cartesianProduct(...arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays)) {
        throw new TypeError('Please, send an array.');
    }
    const [arrayA, arrayB, ...restOfArrays] = arrayOfArrays;
    const finalProduct = calculateCartesianProduct(arrayA, arrayB);
    if (restOfArrays.length) {
        return cartesianProduct(finalProduct, ...restOfArrays);
    }
    return finalProduct;
}
exports.cartesianProduct = cartesianProduct;
function* cartesianProductGenerator(...arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays)) {
        throw new TypeError('Please, send an array.');
    }
    const [arrayA, arrayB, ...restOfArrays] = arrayOfArrays;
    const finalProduct = calculateCartesianProduct(arrayA, arrayB);
    yield finalProduct;
    if (restOfArrays.length) {
        yield* cartesianProductGenerator(finalProduct, ...restOfArrays);
    }
}
exports.cartesianProductGenerator = cartesianProductGenerator;
function calculateCartesianProduct(arrayA, arrayB) {
    const finalProduct = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (!arrayB) {
            finalProduct.push([arrayA[i]]);
            continue;
        }
        for (let j = 0; j < arrayB.length; j++) {
            if (Array.isArray(arrayA[i])) {
                finalProduct.push([...arrayA[i], arrayB[j]]);
            }
            else {
                finalProduct.push([arrayA[i], arrayB[j]]);
            }
        }
    }
    return finalProduct;
}
