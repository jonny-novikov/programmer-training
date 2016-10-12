# Thinking through functions

When you first start creating functions it can be really challenging. We know what we want to do but we haven't learnt the skills to be able to think through how to create functions. 

## Before writing the function

* What are we trying to achieve?
* What will be the inputs passed into the function?
* What will be output from the function?

## Guard Statement

* What is my base case (recursive functions)?
* What is my guard statement?  
* Why is it stopping our function from recursing?
* What is being measured to stop the function?
    * Is an array being recursed through?
    * Is a number becoming smaller?
    * Has a condition been met / not been met?

## Function Body

* Do we need a head and/or tail?
* What are we trying to achieve with this function? Break down the steps. Pseudo code at first until you feel comfortable with how the function works.
* Is each step doing what we expect it to be doing? Console.log if you need to.
* How do we need to handle the arguments that we've passed in?

## What are we expecting to return?

* When will the function stop recursing and why?
* What will it return at the different stages it goes through?
    * What are you expecting it to return? Write it before writing the function.
    * When the guard statement is tripped what will be returned?
    * When a condition is/is not met, what will be returned?  

## Troubleshooting

* Read through the function backwards
* Rubber Ducky to yourself, an inanimate object or a person
* Pseudo code the steps. Think through the steps slowly. Console.log() each step. Are you getting what you expect?
* Check the ramda docs - does your function work the same way as the ramda one?
* Check against the ramda function - do you get the same outputs with the same inputs as the function you've made? 
