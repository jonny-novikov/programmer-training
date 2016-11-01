# Functional programming

While a lot of this will be actually be review (It won't feel like it looking at the crazy list/names), we need to go in depth on how these ideas are expressed in JavaScript. You will know this stuff inside-out and outside-in by the time we are finished.

## Programming Paradigms

- [Imperative:](https://en.wikipedia.org/wiki/Imperative_programming) Paradigm of programming that uses explicit commands and statements to define the sequence in which a program should be run.
- [Declarative:](https://en.wikipedia.org/wiki/Declarative_programming) Paradigm of programming that describes the structure and elements without controlling their flow. 
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming) (FP): Paradigm of programming that treats computation as evaluation of mathematical functions and avoids changing state and mutability.  
- [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP): Paradigm of programming based on the concept of 'objects' which may contain data and procedures known as methods. Can use classes to create objects.
- [Classical programming](https://en.wikipedia.org/wiki/Class-based_programming): Uses classes/constructors to create objects 
- [Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming): Inherits from other objects. Known as classless object orientated programming. 

## Functional concepts
 
- **Immutability:** Unable to be changed. 5
- **Referential transparency and the substitution principle:** 1
- **Pure functions:** A pure function is a function where the return value is only determined by its input values, without observable side effects. 4
- **First class functions:** A function can be treated like a variable. For example, it can be stored in a const/let, passed into a function as an argument, you can return a function from a function. 4
- **Higher order functions:** 4
- **Currying and partial application:** 1
- **Recursion and tail recursion:** 1
- **Memoization:** 1
- **Lexical closures:** 1
- **Lazy evaluation:** 1
- **Garbage collection:** 1
- **Decomposition of complex tasks:** 1

## Functional tools

We'll be using the [Ramda](http://ramdajs.com/0.21.0/index.html) library to practice creating our functions. Ramda, like Lodash, is a collection of functions that have been created to be used in our code and then compiled into vanilla JavaScript. To use Ramda when creating an app we can add the Ramda npm module: To install: 'npm i ramda'. You will then have to import each function you want to use individual into your files.

- [compose](http://ramdajs.com/0.19.1/docs/#compose) 2
- [concat](http://ramdajs.com/0.19.1/docs/#concat) 4
- [contains](http://ramdajs.com/0.19.1/docs/#contains) 2
- [curry](http://ramdajs.com/0.19.1/docs/#curry) 1
- [drop](http://ramdajs.com/0.19.1/docs/#drop) 1
- [filter](http://ramdajs.com/0.19.1/docs/#filter) 2
- [find](http://ramdajs.com/0.19.1/docs/#find) 1
- [flatten](http://ramdajs.com/0.19.1/docs/#flatten) 1
- [head](http://ramdajs.com/0.19.1/docs/#head) 1
- [lens](http://ramdajs.com/0.19.1/docs/#lens) 1
- [lift](http://ramdajs.com/0.19.1/docs/#lift) 1
- [map](http://ramdajs.com/0.19.1/docs/#map) 4
- [memoize](http://ramdajs.com/0.19.1/docs/#memoize) 1
- [merge](http://ramdajs.com/0.19.1/docs/#merge) 2
- [omit](http://ramdajs.com/0.19.1/docs/#omit) 2
- [partial](http://ramdajs.com/0.19.1/docs/#partial) 1
- [pick](http://ramdajs.com/0.19.1/docs/#pick) 1
- [range](http://ramdajs.com/0.19.1/docs/#range) 1 
- [reduce](http://ramdajs.com/0.19.1/docs/#reduce) 3
- [remove](http://ramdajs.com/docs/#remove) 1
- [repeat](http://ramdajs.com/docs/#repeat) 2
- [reverse](http://ramdajs.com/docs/#reverse) 4
- [reject](http://ramdajs.com/0.19.1/docs/#reject) 2
- [scan](http://ramdajs.com/0.19.1/docs/#scan) 2
- [sort](http://ramdajs.com/0.19.1/docs/#sort) 4
- [split](http://ramdajs.com/0.19.1/docs/#split) 4 
- [tail](http://ramdajs.com/0.19.1/docs/#tail) 1
- [take](http://ramdajs.com/0.19.1/docs/#take) 1
- [tap](http://ramdajs.com/0.19.1/docs/#tap) 1
- [zip](http://ramdajs.com/0.19.1/docs/#zip) 1

## JavaScript

There is a great reference on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

- Variables and scope 5
- Variable hoisting 1
- var, const, and let 4
- Closures 1
- Deep freeze 1
- Named functions 6
- Anonymous functions 4
- Fat arrow functions 4
- Loops and conditionals 5
- The ternary operator 3
- [Operator precendence](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 1
- Types and dynamic typing 1
- Pass by reference/pass by value 2
- Infinity, NaN, undefined, and null 5
- Parsing and type checking 4
- Object 5
- Booleans and boolean algebra (AND, OR, etc.) 6
- Symbols 2
- Math 4
- Dates and times (an ugly mess&mdash;use moment.js) 2
- Regular expressions 3
- JSON 3
- Promises (callbacks) 3
- Control flow 1
- Errors and error handling 4
- Generator functions 4
- Export and import (modules)
- The `this` keyword 4
- The `new` keyword 1
- Unary operators and arithmetic operators 5
- Increment and decrement 6
- Equality operators 5
- Assignment operators 1
- Default parameters 2
- Rest parameters 2
- Spread operator 2
- Destructuring 2
- Linting [JavaScript](http://eslint.org/) and [JSON](http://jsonlint.com/) 6
