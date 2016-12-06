# JavaScript Assessment 1.1

## Foundational Concepts

- [X] What are the differences between functional and object orientated programming? 

  In functional programming, functions are kept separate from the data so they never change. They only have one purpose which is to perform their function. They are immutable.

  In object oriented programming, objects are used to manipulate the data as the object itself can hold data and a function / behaviour (called a method). Classes can create further objects resulting in inheritance of properties / values from other objects further up the chain.

- [X] Functional and object orientated. Which is better and why? 

  Depends on who you speak to. Functional programming is cleaner and is considered pure due to the lack of side effects which may occur due to inheritance seen in OOP (Object Oriented Programming).

  OOP is considered easier to follow and more efficient due to the 'factory' nature of classes to produce objects automatically

- [X] Explain what recursion is and how it works.

  Recursion is when a function calls itself within a function. This enables the function loop and run until an end point (defined by a guard statement) is met signifying the end of the loop.

- [X] You're creating a function. What is the thought process that you take in order to create it. Write a minimum of 200 words. 

  Creating a function.

  The first thing is to try and work out exactly what the function is trying to acheive.

  You consider 
    1.what the starting point is, whether it is a list or a string
    2.what the end point is or what you are going to return

  The think about what you are going to pass into this function (list, string, number, function)

  Call the function with some test data and write down what the expected result should be.

  Then create the function.

  If you need to pass a function into the new function, define it first.
  Define the function with the parameters you are going to pass into it. If it is an array, does it need to be destructed.
  Create a guard statement if needed - when is the loop going to end, how do you stop recursing through the array to avoid getting stuck in an infinite loop (use an empty array [])
  
  Ask yourself, what are you returning and create the logic around that. Is the function dealing with strings and lists. If so, return typeof and then use a ternary to differentiate between the two.

  If returning an array using recursion, remember to use the spread operator to flatten out the array so you don't end up with arrays within arrays.

  Call the function using your test arguments to see if it returns what you are expecting.

  If so, see if you can refactor it in a more concise manner.


- [X] Explain the difference between mutable and immutable. Which is better and why?


- [ ] What situation would you build a function mutably? 
- [ ] Explain SPREAD and REST operators.
- [ ] Explain var, let and const and best practice with using each.
- [ ] Name 3 different ways that you could create a guard statement and why they would stop your function.


## Exercise Practice

### Build a Map function using ES6

How concise can you be? Flex those newly formed ES6 skills and show off just how tight your coding has become! 

Create a Map function that is: 

- [X] A one line function and under 100 characters (Excludes calling your function - do that on another line)

const m = (f, [x, ...xs]) => x ? [f(x), ...m(f, xs)] : []

const d = n => n * 2

m(d, [1, 2, 3, 4]) // => [2, 4, 6, 8]


### Building a swear bot

You've created your own version of Slack for coders called 'Hack'. People are using it and it's great! Yay, congrats :) But wait! Oh dear - your users are a bunch of foul mouthed sailors! This is supposed to be family friendly G rated. We better make a swear bot to keep everyone in check.

Create a recursive function that can: 

- [ ] Take an unspecified number of arguments
- [ ] Will take an array
- [ ] Has a store of naughty words to check against 
- [ ] Will return a an array with all of the naughty words removed 


### Build a palindrome checker

Oh no! Everything I can't tell my front from my back! Let's make life easier for people by creating a function  that checks whether a word is a palindrome or not. What is a palindrome? A word or phrase that is the same both backward and forward. For example:

- kayak
- stressed desserts
- Taco Cat
- Not now wonton.
- A Car, a man, a maraca.

Create a function that: 

- [ ] Takes a string
- [ ] Checks the string to see if it's a palindrome
- [ ] Returns true or false
- [ ] Should be able to take all of the palindromes above, exactly how they have been written, and return true for all of them
