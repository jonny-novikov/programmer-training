// map function

// declare const to be passed into map function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubler = n => n * 2

// write map function

function maap (func, arr) {

// include guard statement

	if (isEmpty(arr)) { 
		return []
	}

// declare head and tail of the array

	const x = head(arr)
	const xs = tail(arr)

/* 
	return an array with the new values. Head is passed into the function
	the maap function is then called with the function and the tail which
	loops until the guard statement is met
*/

	return [func(x), ...maap(func, xs)]

// spread used which returns single array

}

// expected [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

maap(doubler, array)

// map function - square of a value

// declare the const to be passed into the function
// write what you expect the result to be
// declare the function using const - not a named function but immutable
// include a guard statement
// declare the head and tail of the array using spread
// return the new array by passing the head into the function
// loop through by calling the map function in the return statment
// call the map function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const square = n => n * n

const mapp = (func, arr) => {
	if (isEmpty(arr)) {
		return []
	}

	const [x, ...xs] = arr

	return [func(x), ...mapp(func, xs)]
}

// expected [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

mapp(square, array)

// tripler function - take values from an array and triples them.
// returns a new array
// declare the const to pass into function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tripler = n => n * 3

// build the function

const mapper = (func, arr) => {

// add a guard statement

	if (isEmpty(arr)) {
		return []
	}

// create head and tail of the array

	create [x, ...xs] = arr 

/*
  return new array by passing head into function and then recursively
  calling the map function and passing the tail into it until guard
  statement is met
*/

	return [func(x), ...mapper(func, xs)]
}

// call the function

mapper(tripler, array)

// expected [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// 30/10 3min30

const array = [1, 2, 3, 4, 5]
const fourTimes = n => n * 4

const map1 = (func, [x, ...xs]) => {
  if (!x) return []

  return [func(x), ...map1(func, xs)]
}

map1(fourTimes, array)

// expected => [4, 8, 12, 16, 20]


