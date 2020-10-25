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

In that case, you can use the combination of the first two arrays right away without having to wait until the end.

For example, the group bellow uses three arrays. The generator may create a product of the first two arrays, then it will combine the result of that combination with the last array. 

It should happen for any number of arrays send. First two are combined, then the result of that will be combined with the next array, until there are no more arrays.


```javascript
const {cartesianProductGenerator} = require('cartesian-product-multiple-arrays');

const productAttributes = [
  ['SM', 'MD', 'LG'],
  ['Red', 'Green'],
  ['Cotton', 'Polyester'],
];

const result = cartesianProductGenerator(...productAttributes);
const firstTwoArrays = result.next().value;
const firstTwoArraysCombinedWithLastArray = result.next().value;

console.log(firstTwoArrays);
/*
[
  [ 'SM', 'Red' ],
  [ 'SM', 'Green' ],
  [ 'MD', 'Red' ],
  [ 'MD', 'Green' ],
  [ 'LG', 'Red' ],
  [ 'LG', 'Green' ]
]
*/

console.log(firstTwoArraysCombinedWithLastArray);
/*
[
  [ 'SM', 'Red', 'Cotton' ],
  [ 'SM', 'Red', 'Polyester' ],
  [ 'SM', 'Green', 'Cotton' ],
  [ 'SM', 'Green', 'Polyester' ],
  [ 'MD', 'Red', 'Cotton' ],
  [ 'MD', 'Red', 'Polyester' ],
  [ 'MD', 'Green', 'Cotton' ],
  [ 'MD', 'Green', 'Polyester' ],
  [ 'LG', 'Red', 'Cotton' ],
  [ 'LG', 'Red', 'Polyester' ],
  [ 'LG', 'Green', 'Cotton' ],
  [ 'LG', 'Green', 'Polyester' ]
]
*/
```  
  
 Instead of using `next().value`, you may just use a `for` loop for simplicity.  
  
 ```javascript
const {cartesianProductGenerator} = require('cartesian-product-multiple-arrays');

const productAttributes = [
  ['SM', 'MD', 'LG'],
  ['Red', 'Green'],
  ['Cotton', 'Polyester'],
];

const result = cartesianProductGenerator(...productAttributes);

for (const product of result) {
  console.log(product);
}

/* 
[
  [ 'SM', 'Red' ],
  [ 'SM', 'Green' ],
  [ 'MD', 'Red' ],
  [ 'MD', 'Green' ],
  [ 'LG', 'Red' ],
  [ 'LG', 'Green' ]
]
[
  [ 'SM', 'Red', 'Cotton' ],
  [ 'SM', 'Red', 'Polyester' ],
  [ 'SM', 'Green', 'Cotton' ],
  [ 'SM', 'Green', 'Polyester' ],
  [ 'MD', 'Red', 'Cotton' ],
  [ 'MD', 'Red', 'Polyester' ],
  [ 'MD', 'Green', 'Cotton' ],
  [ 'MD', 'Green', 'Polyester' ],
  [ 'LG', 'Red', 'Cotton' ],
  [ 'LG', 'Red', 'Polyester' ],
  [ 'LG', 'Green', 'Cotton' ],
  [ 'LG', 'Green', 'Polyester' ]
]
*/
 ```

If you only care about the full result, just get the last value:


```javascript
const {cartesianProductGenerator} = require('cartesian-product-multiple-arrays');

const productAttributes = [
  ['SM', 'MD', 'LG'],
  ['Red', 'Green'],
  ['Cotton', 'Polyester'],
];

const result = cartesianProductGenerator(...productAttributes);
const lastProduct = [...result].slice(-1)[0];

console.log(lastProduct);
/* 
[
  [ 'SM', 'Red', 'Cotton' ],
  [ 'SM', 'Red', 'Polyester' ],
  [ 'SM', 'Green', 'Cotton' ],
  [ 'SM', 'Green', 'Polyester' ],
  [ 'MD', 'Red', 'Cotton' ],
  [ 'MD', 'Red', 'Polyester' ],
  [ 'MD', 'Green', 'Cotton' ],
  [ 'MD', 'Green', 'Polyester' ],
  [ 'LG', 'Red', 'Cotton' ],
  [ 'LG', 'Red', 'Polyester' ],
  [ 'LG', 'Green', 'Cotton' ],
  [ 'LG', 'Green', 'Polyester' ]
]
*/
```



