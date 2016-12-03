// append function
// appends a value to the end of an array

// a → [a] → [a]

// create the function
// return the array with the value added to the end

const appendd = (a, arr) => {
	return [...arr, a]
}

appendd(5, [1, 2, 3, 4])

// expected [1, 2, 3, 4, 5]

const appen = (a,b) => [...b, a]

appen('blue', ['red', 'green'])

// expect ['red', 'green', 'blue']

// 31/10 1min35

const append1 = (a,b) => [...b, a]

const (4, [1, 2, 3]) // => [1, 2, 3, 4]

// 18/11 1:19

const append2 = (a, arr) => {
	return [...arr, a]
}

append2(5, [1, 2, 3, 4]) // => [1, 2, 3, 4, 5]

//	declare the function append
//	takes in 2 parameters - what you want to append and the existing array
// 	returns a destructured array with the value appended to the end of the array

// 28/11 1:34

const append4 = (a, b) => [...b, a]

append4(3, [1, 2]) // => [1, 2, 3]
append4([3], [1, 2]) // => [1, 2, [3]]
append4(1, []) // => [1]

// 3/12   2:37

const append5 = (a, b) => [...b, a]

append5('hello', ['hi', 'ni hao']) //=> ['hi', 'ni hao', 'hello']

