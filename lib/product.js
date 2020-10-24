"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianProduct = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
function cartesianProduct(...arrayOfArrays) {
    const finalProduct = [];
    const [arrayA, arrayB, ...restOfArrays] = arrayOfArrays;
    if (!arrayB)
        throw new Error('Please, send at least two arrays');
    for (const valueOfArrayA of arrayA) {
        for (const valueOfArrayB of arrayB) {
            finalProduct.push([valueOfArrayA, valueOfArrayB]);
        }
    }
    const flatFinalProduct = finalProduct.map((item) => {
        return item.flat(5);
    });
    if (restOfArrays.length) {
        return cartesianProduct(flatFinalProduct, restOfArrays);
    }
    return flatFinalProduct;
}
exports.cartesianProduct = cartesianProduct;
