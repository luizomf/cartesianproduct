# Cartesian Product of multiple arrays
Simple function to find the cartesian product of multiple arrays. It's super easy to use.

## Example:

```javascript
const { cartesianProduct } = require('cartesian-product-multiple-arrays');

const sizes = ['SM', 'MD', 'LG'];
const colors = ['Red', 'Green'];
const material = ['Cotton', 'Polyester'];

console.log(cartesianProduct(sizes, colors, material));

/*
[
  ['SM', 'Red', 'Cotton'],
  ['SM', 'Red', 'Polyester'],
  ['SM', 'Green', 'Cotton'],
  ['SM', 'Green', 'Polyester'],
  ['MD', 'Red', 'Cotton'],
  ['MD', 'Red', 'Polyester'],
  ['MD', 'Green', 'Cotton'],
  ['MD', 'Green', 'Polyester'],
  ['LG', 'Red', 'Cotton'],
  ['LG', 'Red', 'Polyester'],
  ['LG', 'Green', 'Cotton'],
  ['LG', 'Green', 'Polyester'],
]
*/
```

