import { cartesianProduct, cartesianProductGenerator } from './product';

describe('cartesianProduct', () => {
  it('should throw if no array is passed', () => {
    const sut = () => cartesianProduct();
    expect(sut).toThrow(TypeError);
  });

  it('should accept arrays with any type of values', () => {
    const sut = cartesianProduct([1, 2], ['a', 'b', 'c']);
    expect(sut).toEqual([
      [1, 'a'],
      [1, 'b'],
      [1, 'c'],
      [2, 'a'],
      [2, 'b'],
      [2, 'c'],
    ]);
  });

  it('should accept complex arrays', () => {
    const dummy1 = { name: 'Luiz', aMethod: () => 'OK' };
    const dummy2 = Object.create(dummy1);

    const sut = cartesianProduct(['Luiz', dummy1], ['OK', dummy2]);
    expect(sut).toEqual([
      ['Luiz', 'OK'],
      ['Luiz', dummy2],
      [dummy1, 'OK'],
      [dummy1, dummy2],
    ]);
  });

  it('should return correct values', () => {
    let values = [
      ['x', 'y', 'z'],
      [1, 2, 3],
    ];
    let sut = cartesianProduct(...values);
    expect(sut).toEqual([
      ['x', 1],
      ['x', 2],
      ['x', 3],
      ['y', 1],
      ['y', 2],
      ['y', 3],
      ['z', 1],
      ['z', 2],
      ['z', 3],
    ]);

    values = [
      [1, 2, 3],
      [2, 3],
    ];
    sut = cartesianProduct(...values);
    expect(sut).toEqual([
      [1, 2],
      [1, 3],
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 3],
    ]);
    values = [
      ['SM', 'MD', 'LG'],
      ['Red', 'Green'],
      ['Cotton', 'Polyester'],
    ];

    sut = cartesianProduct(...values);
    expect(sut).toEqual([
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
    ]);
  });

  it('should accept multiple arrays', () => {
    const values = [
      [1, 2],
      ['a'],
      ['@', '$', '%', '&'],
      ['+', '-'],
      ['.', '..', '...'],
    ];
    const sut = cartesianProduct(...values);
    expect(sut).toEqual([
      [1, 'a', '@', '+', '.'],
      [1, 'a', '@', '+', '..'],
      [1, 'a', '@', '+', '...'],
      [1, 'a', '@', '-', '.'],
      [1, 'a', '@', '-', '..'],
      [1, 'a', '@', '-', '...'],
      [1, 'a', '$', '+', '.'],
      [1, 'a', '$', '+', '..'],
      [1, 'a', '$', '+', '...'],
      [1, 'a', '$', '-', '.'],
      [1, 'a', '$', '-', '..'],
      [1, 'a', '$', '-', '...'],
      [1, 'a', '%', '+', '.'],
      [1, 'a', '%', '+', '..'],
      [1, 'a', '%', '+', '...'],
      [1, 'a', '%', '-', '.'],
      [1, 'a', '%', '-', '..'],
      [1, 'a', '%', '-', '...'],
      [1, 'a', '&', '+', '.'],
      [1, 'a', '&', '+', '..'],
      [1, 'a', '&', '+', '...'],
      [1, 'a', '&', '-', '.'],
      [1, 'a', '&', '-', '..'],
      [1, 'a', '&', '-', '...'],
      [2, 'a', '@', '+', '.'],
      [2, 'a', '@', '+', '..'],
      [2, 'a', '@', '+', '...'],
      [2, 'a', '@', '-', '.'],
      [2, 'a', '@', '-', '..'],
      [2, 'a', '@', '-', '...'],
      [2, 'a', '$', '+', '.'],
      [2, 'a', '$', '+', '..'],
      [2, 'a', '$', '+', '...'],
      [2, 'a', '$', '-', '.'],
      [2, 'a', '$', '-', '..'],
      [2, 'a', '$', '-', '...'],
      [2, 'a', '%', '+', '.'],
      [2, 'a', '%', '+', '..'],
      [2, 'a', '%', '+', '...'],
      [2, 'a', '%', '-', '.'],
      [2, 'a', '%', '-', '..'],
      [2, 'a', '%', '-', '...'],
      [2, 'a', '&', '+', '.'],
      [2, 'a', '&', '+', '..'],
      [2, 'a', '&', '+', '...'],
      [2, 'a', '&', '-', '.'],
      [2, 'a', '&', '-', '..'],
      [2, 'a', '&', '-', '...'],
    ]);
  });

  it('should accept only one array', () => {
    const values = [['M', 'G', 'GG']];
    const sut = cartesianProduct(...values);
    expect(sut).toEqual([['M'], ['G'], ['GG']]);
  });
});

describe('cartesianProductGenerator (GENERATOR)*', () => {
  it('should throw if no array is passed', () => {
    const sut = () => cartesianProductGenerator().next().value;
    expect(sut).toThrow(TypeError);
  });

  it('should accept arrays with any type of values (GENERATOR)', () => {
    const sut = cartesianProductGenerator([1, 2], ['a', 'b', 'c']);
    expect(sut.next().value).toEqual([
      [1, 'a'],
      [1, 'b'],
      [1, 'c'],
      [2, 'a'],
      [2, 'b'],
      [2, 'c'],
    ]);
  });

  it('should accept complex arrays (GENERATOR)', () => {
    const dummy1 = { name: 'Luiz', aMethod: () => 'OK' };
    const dummy2 = Object.create(dummy1);

    const sut = cartesianProductGenerator(['Luiz', dummy1], ['OK', dummy2]);
    expect(sut.next().value).toEqual([
      ['Luiz', 'OK'],
      ['Luiz', dummy2],
      [dummy1, 'OK'],
      [dummy1, dummy2],
    ]);
  });

  it('should return correct values (GENERATOR)', () => {
    let values = [
      ['x', 'y', 'z'],
      [1, 2, 3],
    ];
    let sut = cartesianProductGenerator(...values);
    expect(sut.next().value).toEqual([
      ['x', 1],
      ['x', 2],
      ['x', 3],
      ['y', 1],
      ['y', 2],
      ['y', 3],
      ['z', 1],
      ['z', 2],
      ['z', 3],
    ]);

    values = [
      [1, 2, 3],
      [2, 3],
    ];
    sut = cartesianProductGenerator(...values);
    expect(sut.next().value).toEqual([
      [1, 2],
      [1, 3],
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 3],
    ]);

    values = [
      ['SM', 'MD', 'LG'],
      ['Red', 'Green'],
      ['Cotton', 'Polyester'],
    ];

    sut = cartesianProductGenerator(...values);

    expect([...sut].slice(-1)[0]).toEqual([
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
    ]);
  });

  it('should accept multiple arrays', () => {
    const values = [
      [1, 2],
      ['a'],
      ['@', '$', '%', '&'],
      ['+', '-'],
      ['.', '..', '...'],
    ];
    const sut = cartesianProductGenerator(...values);
    expect([...sut].slice(-1)[0]).toEqual([
      [1, 'a', '@', '+', '.'],
      [1, 'a', '@', '+', '..'],
      [1, 'a', '@', '+', '...'],
      [1, 'a', '@', '-', '.'],
      [1, 'a', '@', '-', '..'],
      [1, 'a', '@', '-', '...'],
      [1, 'a', '$', '+', '.'],
      [1, 'a', '$', '+', '..'],
      [1, 'a', '$', '+', '...'],
      [1, 'a', '$', '-', '.'],
      [1, 'a', '$', '-', '..'],
      [1, 'a', '$', '-', '...'],
      [1, 'a', '%', '+', '.'],
      [1, 'a', '%', '+', '..'],
      [1, 'a', '%', '+', '...'],
      [1, 'a', '%', '-', '.'],
      [1, 'a', '%', '-', '..'],
      [1, 'a', '%', '-', '...'],
      [1, 'a', '&', '+', '.'],
      [1, 'a', '&', '+', '..'],
      [1, 'a', '&', '+', '...'],
      [1, 'a', '&', '-', '.'],
      [1, 'a', '&', '-', '..'],
      [1, 'a', '&', '-', '...'],
      [2, 'a', '@', '+', '.'],
      [2, 'a', '@', '+', '..'],
      [2, 'a', '@', '+', '...'],
      [2, 'a', '@', '-', '.'],
      [2, 'a', '@', '-', '..'],
      [2, 'a', '@', '-', '...'],
      [2, 'a', '$', '+', '.'],
      [2, 'a', '$', '+', '..'],
      [2, 'a', '$', '+', '...'],
      [2, 'a', '$', '-', '.'],
      [2, 'a', '$', '-', '..'],
      [2, 'a', '$', '-', '...'],
      [2, 'a', '%', '+', '.'],
      [2, 'a', '%', '+', '..'],
      [2, 'a', '%', '+', '...'],
      [2, 'a', '%', '-', '.'],
      [2, 'a', '%', '-', '..'],
      [2, 'a', '%', '-', '...'],
      [2, 'a', '&', '+', '.'],
      [2, 'a', '&', '+', '..'],
      [2, 'a', '&', '+', '...'],
      [2, 'a', '&', '-', '.'],
      [2, 'a', '&', '-', '..'],
      [2, 'a', '&', '-', '...'],
    ]);
  });

  it('should accept only one array', () => {
    const values = [['M', 'G', 'GG']];
    const sut = cartesianProductGenerator(...values);
    expect(sut.next().value).toEqual([['M'], ['G'], ['GG']]);
  });
});
