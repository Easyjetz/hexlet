/*У обычных утверждений есть мощная альтернатива: power-assert. 
Эта библиотека добавляет магию в привычный инструмент. */

import assert from 'power-assert';

const array = [1, 2, 3];
const zero = 0;
const two = 2;

assert(array.indexOf(zero) === two);

// AssertionError [ERR_ASSERTION]:   # test.js:7
//
//   assert(array.indexOf(zero) === two)
//          |     |       |     |   |
//          |     |       |     |   2
//          |     -1      0     false
//          [1,2,3]
//
//   [number] two
//   => 2
//   [number] array.indexOf(zero)
//   => -1


