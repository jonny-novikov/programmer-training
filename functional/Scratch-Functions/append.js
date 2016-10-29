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