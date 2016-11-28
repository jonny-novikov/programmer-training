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
 
- **Immutability:** Unable to be changed.
- **Referential transparency and the substitution principle:** 
- **Pure functions:** A pure function is a function where the return value is only determined by its input values, without observable side effects. 
- **First class functions:** A function can be treated like a variable. For example, it can be stored in a const/let, passed into a function as an argument, you can return a function from a function.
- **Higher order functions:** a function that does at least one of the following: takes one or more functions as arguments (i.e., procedural parameters), returns a function as its result.
- **Currying and partial application:** the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument. Currying is related to, but not the same as, partial application. [Comparison article on Medium](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.t6a71zy61) 
- **Recursion and tail recursion:** A recursive function is a function that calls itself. In a tail recursive function the function will calculate the recursive part last and not use any stake space; hence it is more similar to a loop.
- **Memoization:** an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
- **Lexical closures:** A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.
- **Lazy evaluation:** , lazy evaluation, or call-by-need is an evaluation strategy which delays the evaluation of an expression until its value is needed (non-strict evaluation) and which also avoids repeated evaluations (sharing).
- **Garbage collection:** garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program.
- **Decomposition of complex tasks:** Decomposition is when we break a problem down into smaller parts to make it easier to tackle. It is also useful re-using code and problem solving complex tasks by breaking them down into more manageable chunks.  

## Functional tools

We'll be using the [Ramda](http://ramdajs.com/0.21.0/index.html) library to practice creating our functions. Ramda, like Lodash, is a collection of functions that have been created to be used in our code and then compiled into vanilla JavaScript. To use Ramda when creating an app we can add the Ramda npm module: To install: 'npm i ramda'. You will then have to import each function you want to use individual into your files.

28/11/2016 (1 means I have not looked at them yet)

1 - [compose](http://ramdajs.com/0.19.1/docs/#compose)
8 - [concat](http://ramdajs.com/0.19.1/docs/#concat) 
8 - [contains](http://ramdajs.com/0.19.1/docs/#contains) 
1 - [curry](http://ramdajs.com/0.19.1/docs/#curry) 
4 - [drop](http://ramdajs.com/0.19.1/docs/#drop) 
9 - [filter](http://ramdajs.com/0.19.1/docs/#filter) 
7 - [find](http://ramdajs.com/0.19.1/docs/#find) 
3 - [flatten](http://ramdajs.com/0.19.1/docs/#flatten)
8 - [head](http://ramdajs.com/0.19.1/docs/#head) 
1 - [lens](http://ramdajs.com/0.19.1/docs/#lens) 
1 - [lift](http://ramdajs.com/0.19.1/docs/#lift)
9 - [map](http://ramdajs.com/0.19.1/docs/#map) 
1 - [memoize](http://ramdajs.com/0.19.1/docs/#memoize) 
1 - [merge](http://ramdajs.com/0.19.1/docs/#merge) 
1 - [omit](http://ramdajs.com/0.19.1/docs/#omit) 
1 - [partial](http://ramdajs.com/0.19.1/docs/#partial) 
1 - [pick](http://ramdajs.com/0.19.1/docs/#pick) 
1 - [range](http://ramdajs.com/0.19.1/docs/#range) 
1 - [reduce](http://ramdajs.com/0.19.1/docs/#reduce) 
1 - [remove](http://ramdajs.com/docs/#remove)
6 - [repeat](http://ramdajs.com/docs/#repeat)
7 - [reverse](http://ramdajs.com/docs/#reverse)
1 - [reject](http://ramdajs.com/0.19.1/docs/#reject) 
1 - [scan](http://ramdajs.com/0.19.1/docs/#scan) 
1 - [sort](http://ramdajs.com/0.19.1/docs/#sort) 
1 - [split](http://ramdajs.com/0.19.1/docs/#split) 
8 - [tail](http://ramdajs.com/0.19.1/docs/#tail) 
6 - [take](http://ramdajs.com/0.19.1/docs/#take) 
1 - [tap](http://ramdajs.com/0.19.1/docs/#tap) 
1 - [zip](http://ramdajs.com/0.19.1/docs/#zip) 

## JavaScript

There is a great reference on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

3 - Variables and scope
3 - Variable hoisting
7 - var, const, and let
2 - Closures
2 - Deep freeze
3 - Named functions
3 - Anonymous functions
4 - Fat arrow functions
4 - Loops and conditionals
6 - The ternary operator
7 - [Operator precendence](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
2 - Types and dynamic typing
1 - Pass by reference/pass by value
2 - Infinity, NaN, undefined, and null
2 - Parsing and type checking
4 - Object
3 - Booleans and boolean algebra (AND, OR, etc.)
4 - Symbols
5 - Math
2 - Dates and times (an ugly mess&mdash;use moment.js)
2 - Regular expressions
3 - JSON
3 - Promises (callbacks)
2 - Control flow
1 - Errors and error handling
2 - Generator functions
3 - Export and import (modules)
4 - The `this` keyword
2 - The `new` keyword
2 - Unary operators and arithmetic operators
5 - Increment and decrement
6 - Equality operators
2 - Assignment operators
2 - Default parameters
5 - Rest parameters
7 - Spread operator
6 - Destructuring
4 - Linting [JavaScript](http://eslint.org/) and [JSON](http://jsonlint.com/)
