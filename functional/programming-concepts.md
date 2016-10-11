# PROGRAMMING CONCEPTS

## LISTS

First, we talked about Lists and how they can be implemented. We discussed how there are two types of List:
* the kind with items in it - A list with items
* and the empty kind - An empty list

Using just these two types of list, we can create a list recursively. We start with an empty list, which we can show as [ ]:
```
[]
```
Then we can prepend a value to this list, creating a list of a value and the empty list:
```
[1, []]
```
As this is also a list, we can recursively build the list by prepending a new value to that:
```
[2, [1, []]]
```
And again:
```
[3, [2, [1, []]]]
```
Now, when we want to loop through the list, we can do it by splitting it into that value, which we call the "head", and the inner list, which we call the "tail".

For example:
```
head     tail
[ 3,  [2, [1, []]]]

         head   tail
      [ 2,    [1, []]]

                   head tail
                [ 1,    []]]
```

We can use recursion to loop through this list by splitting the list into head (value) and tail (remaining list), performing some action on the head, and then calling the same function again and passing it the tail.

### RECURSIVE FUNCTIONS
In each recursive function we have similar characteristics. First, the function will call itself. When it calls itself, the arguments passed must be different in some way. If we call the same function with the same arguments then we can only expect that it will call itself again and again in an infinite loop until we run out of memory. Not good. So with each call, we must pass in a slightly different set of arguments. Typically, we keep passing in a smaller and smaller list until we pass in an empty list.

### CONDITIONS
This brings up the second characteristic. We must have some condition, called the base case, at which we will stop the recursion. For example, we probably want to stop the map function when we get to an empty list. To do this, we add a "guard statement" at the top of our recursive function. It checks one or more of the arguments passed in, and depending on the value(s) of those arguments, decides whether to return immediately, stopping the recursion (loop), or to let the function proceed and recurse again.

### WHAT AM I PASSING INTO MY FUNCTION?
We don't have to pass a function. We could pass a count, for example. And we don't have to use the size of the array as the guard statement. Consider the drop function which takes a number and a list and returns a new list with that number of values dropped from the front of it.

### WHAT AM I EXPECTING TO COME OUT OF MY FUNCTION?
Before writing out the function we should know what we are expecting to get out of it. This will help guide us in the right direction when creating the function.

### FINISHING OUR RECURSION
When the final recursive call returns without recursing again, we have to roll back up all the returns until we return the entire set of recursive calls.

### PRACTICE MAKES PERFECT
Practice writing the following functions from memory. Try variations. Then move on to other list functions. Here are some suggestions to practice. I expect you to play with them in the Ramda REPL, so I've doubled a letter (e.g., mapp instead of map) so they don't conflict with the Ramda functions of the same name. When you test them, you can change back and forth between your function (mapp) and the Ramda equivalent (map) to see if they both work identically. If they do, good job!
