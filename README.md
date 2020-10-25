# Cartesian Product of multiple arrays
Simple function to find the cartesian product of multiple arrays. It's super easy to use.

## Example 1 (JavaScript):
Using JavaScript / Node.js and separate arrays.

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

## Example 2 (TypeScript):
Using TypeScript / Node.js and separate arrays.

```TypeScript
import { cartesianProduct } from 'cartesian-product-multiple-arrays';

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

## Example 3 (Only one two-dimensional array):
It's simpler to create one two-dimensional containing all arrays.

```javascript
const { cartesianProduct } = require('cartesian-product-multiple-arrays');

const productAttributes = [
  ['SM', 'MD', 'LG'],
  ['Red', 'Green'],
  ['Cotton', 'Polyester'],
];

const result = cartesianProduct(...productAttributes);
console.log(result);

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

## Example 4 (Generator*):
For a large number os arrays and possible combinations, the best option is to use a generator for async code.

```javascript
const {
  cartesianProductGenerator,
} = require('cartesian-product-multiple-arrays');

const productAttributes = [
  ['SM', 'MD', 'LG'],
  ['Red', 'Green'],
  ['Cotton', 'Polyester'],
];

const result = cartesianProductGenerator(...productAttributes);
console.log(result.next().value);

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



