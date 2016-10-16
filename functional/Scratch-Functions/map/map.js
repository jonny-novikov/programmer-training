//map function

//declare const to be passed into map function
const array = [1,2,3,4,5,6,7,8,9,10]
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

/*return an array with the new values. Head is passed into the function
the maap function is then called with the function and the tail which
loops until the guard statement is met*/
	return [func(x), ...maap(func, xs)]

//spread used which returns single array

}

//expected [2,4,6,8,10,12,14,16,18,20]

maap(doubler, array)

// map function - square of a value

//declare the const to be passed into the function
//write what you expect the result to be
//declare the function using const - not a named function but immutable
//include a guard statement
//declare the head and tail of the array using spread
//return the new array by passing the head into the function
//loop through by calling the map function in the return statment
//call the map function

const array = [1,2,3,4,5,6,7,8,9,10]
const square = n => n * n

const mapp = (func, arr) => {
	if (isEmpty(arr)) {
		return []
	}

	const [x, ...xs] = arr

	return [func(x), ...mapp(func, xs)]
}

//expected [1,4,9,16,25,36,49,64,81,100]

mapp(square, array)