// contains function - looks to see if array contains a value and will 
// return true or false

// a → [a] → Boolean

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const containz = (num, arr) => {
	if (isEmpty(arr)) return false

	const[x, ...xs] = arr 

	return x === num 
	  ? true 
	  : containz(num, xs)
	 	
}

containz(5, array)

// expected true

// 30/10 2min30

const array = [309, 8970, 23, 4, 890, 345]

const contains1 = (num, [x, ...xs]) => {
  if (!x) return false

  return x === num
    ? true
    : contains1(num, xs)
}


contains1(309, array) // => true

// 18/11 9:04

const contains3 = (a, arr) => {
	if(isEmpty(arr)) return false

	const[x, ...xs] = arr 
	
	return a === x	
		? true 
		: contains3(a, xs)
}

contains3(10, [1, 2, 3, 4, 5, 6]) // => false

//	contains function
//	declare the contains function - takes in 2 arguments
//	write a guard statement - when the function has run through the array
// 	and the value is not found, then return false

//  28/11 3:30

const contains4 = (a, [x, ...xs]) => {
  if(!x) returns false

  return x === a 
    ? true 
    : contains4(a, xs)
}

contains4(1, [1, 2, 3, 4]) // => true
contains4(5, [1, 2, 3, 4]) // => false


// 3/12 1:56

const contains5 = (a, [x, ...xs]) => {
  if (!x) return false

  return x === a 
    ? true 
    : contains5(a, xs)
}

contains4('apple', ['apple', 'orange', 'banana', 'strawberry']) //=> true
