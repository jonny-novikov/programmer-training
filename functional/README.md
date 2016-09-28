# Functional programming

While a lot of this will be review, we need to go in depth on how these ideas are expressed in JavaScript. You will know this stuff inside-out and outside-in by the time we are finished.

## Paradigms

- [Imperative:](https://en.wikipedia.org/wiki/Imperative_programming)
Paradigm of programming that uses explicit commands and statements to define the sequence in which a program should be run. 
- [Declarative:](https://en.wikipedia.org/wiki/Declarative_programming) Paradigm of programming that describes the structure and elements without controlling their flow.
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming) (FP): Paradigm of programming that treats computation as evaluation of mathematical functions and avoids changing state and mutability.  
- [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP): Paradigm of programming based on the concept of 'objects' which may contain data and procedures known as methods. Can use classes to create objects.
- [Classical programming](https://en.wikipedia.org/wiki/Class-based_programming): Uses classes/constructors to create objects 
- [Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming): Inherits from other objects. Known as classless object orientated programming. 

## Functional concepts
 
- Immutability 
- Referential transparencey and the substitution principle
- Pure functions
- First class functions
- Higher order functions
- Currying and partial application
- Recursion and tail recursion
- Memoization
- Lexical closures
- Lazy evaluation
- Garbage collection
- Decomposition of complex tasks

## Functional tools

We'll be using the [Ramda](http://ramdajs.com/0.21.0/index.html) library to practice creating our functions. Ramda, like Lodash, is a collection of functions that have been created to be used in our code and then compiled into vanilla JavaScript. To use Ramda when creating an app we can add the Ramda npm module: To install: 'npm i ramda'. You will then have to import each function you want to use individual into your files.

- [compose](http://ramdajs.com/0.19.1/docs/#compose)
- [concat](http://ramdajs.com/0.19.1/docs/#concat) 
- [contains](http://ramdajs.com/0.19.1/docs/#contains) 
- [curry](http://ramdajs.com/0.19.1/docs/#curry) 
- [drop](http://ramdajs.com/0.19.1/docs/#drop) 
- [filter](http://ramdajs.com/0.19.1/docs/#filter) 
- [find](http://ramdajs.com/0.19.1/docs/#find) 
- [flatten](http://ramdajs.com/0.19.1/docs/#flatten
- [head](http://ramdajs.com/0.19.1/docs/#head) 
- [lens](http://ramdajs.com/0.19.1/docs/#lens) 
- [lift](http://ramdajs.com/0.19.1/docs/#lift
- [map](http://ramdajs.com/0.19.1/docs/#map) 
- [memoize](http://ramdajs.com/0.19.1/docs/#memoize) 
- [merge](http://ramdajs.com/0.19.1/docs/#merge) 
- [omit](http://ramdajs.com/0.19.1/docs/#omit) 
- [partial](http://ramdajs.com/0.19.1/docs/#partial) 
- [pick](http://ramdajs.com/0.19.1/docs/#pick) 
- [range](http://ramdajs.com/0.19.1/docs/#range) 
- [reduce](http://ramdajs.com/0.19.1/docs/#reduce) 
- [remove](http://ramdajs.com/docs/#remove)
- [repeat](http://ramdajs.com/docs/#repeat)
- [reverse](http://ramdajs.com/docs/#reverse)
- [reject](http://ramdajs.com/0.19.1/docs/#reject) 
- [scan](http://ramdajs.com/0.19.1/docs/#scan) 
- [sort](http://ramdajs.com/0.19.1/docs/#sort) 
- [split](http://ramdajs.com/0.19.1/docs/#split) 
- [tail](http://ramdajs.com/0.19.1/docs/#tail) 
- [take](http://ramdajs.com/0.19.1/docs/#take) 
- [tap](http://ramdajs.com/0.19.1/docs/#tap) 
- [zip](http://ramdajs.com/0.19.1/docs/#zip) 

## JavaScript

There is a great reference on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

- Variables and scope
- Variable hoisting
- var, const, and let
- Closures
- Deep freeze
- Named functions
- Anonymous functions
- Fat arrow functions
- Loops and conditionals
- The ternary operator
- [Operator precendence](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- Types and dynamic typing
- Pass by reference/pass by value
- Infinity, NaN, undefined, and null
- Parsing and type checking
- Object
- Booleans and boolean algebra (AND, OR, etc.)
- Symbols
- Math
- Dates and times (an ugly mess&mdash;use moment.js)
- Regular expressions
- JSON
- Promises (callbacks)
- Control flow
- Errors and error handling
- Generator functions
- Export and import (modules)
- The `this` keyword
- The `new` keyword
- Unary operators and arithmetic operators
- Increment and decrement
- Equality operators
- Assignment operators
- Default parameters
- Rest parameters
- Spread operator
- Destructuring
- Linting [JavaScript](http://eslint.org/) and [JSON](http://jsonlint.com/)
