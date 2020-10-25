/* eslint-disable @typescript-eslint/no-explicit-any */
export function cartesianProduct(...arrayOfArrays: any[][]): any[][] | never {
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

/* eslint-disable @typescript-eslint/no-explicit-any */
export function* cartesianProductGenerator(
  ...arrayOfArrays: any[][]
): Generator<any[][] | never> {
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

function calculateCartesianProduct(arrayA: any[], arrayB: any[]): any[][] {
  const finalProduct = [];

  for (let i = 0; i < arrayA.length; i++) {
    if (!arrayB) {
      finalProduct.push([arrayA[i]]);
      continue;
    }

    for (let j = 0; j < arrayB.length; j++) {
      if (Array.isArray(arrayA[i])) {
        finalProduct.push([...arrayA[i], arrayB[j]]);
      } else {
        finalProduct.push([arrayA[i], arrayB[j]]);
      }
    }
  }

  return finalProduct;
}
