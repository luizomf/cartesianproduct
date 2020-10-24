"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianProduct = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
function cartesianProduct(...arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays)) {
        throw new TypeError('Please, send an array.');
    }
    const finalProduct = [];
    const [arrayA, arrayB, ...restOfArrays] = arrayOfArrays;
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
    if (restOfArrays.length) {
        return cartesianProduct(finalProduct, ...restOfArrays);
    }
    return finalProduct;
}
exports.cartesianProduct = cartesianProduct;
