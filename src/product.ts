/* eslint-disable @typescript-eslint/no-explicit-any */
export function cartesianProduct(...arrayOfArrays: any[][]): any[][] | never {
  const finalProduct = [];
  const [arrayA, arrayB, ...restOfArrays] = arrayOfArrays;

  if (!arrayB) throw new Error('Please, send at least two arrays');

  for (const valueOfArrayA of arrayA) {
    for (const valueOfArrayB of arrayB) {
      finalProduct.push([valueOfArrayA, valueOfArrayB]);
    }
  }

  const flatFinalProduct = finalProduct.map((item) => {
    return item.flat(5);
  });

  if (restOfArrays.length) {
    return cartesianProduct(flatFinalProduct, ...restOfArrays);
  }

  return flatFinalProduct;
}

const sizes = ['SM', 'MD', 'LG'];
const colors = ['Red', 'Green'];
const material = ['Cotton', 'Polyester'];

console.log(cartesianProduct(sizes, colors, material));
