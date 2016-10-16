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

	return [func(x), ...maap(func, xs)]

}

//expected [2,4,6,8,10,12,14,16,18,20]

maap(doubler, array)