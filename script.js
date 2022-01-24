// To import the named exports, surround them in curly brackets.
import math_adiciona, { multiplica as math_multiplica } from './math.js';

console.log(math_adiciona(2,3));

console.log(math_multiplica(3,4));

/*

var models = require('./models')

The code example above using the require statement is CommonJS. CommonJS is another module system that can be used in JavaScript. 

When JavaScript was first created, it didn’t have a module system. Because JavaScript had no module system, developers created their own module systems on top of the language.
*/