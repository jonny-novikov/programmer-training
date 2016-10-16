//filter function

//declare const to be passed into filter function
//write the expected result
//create the filter function
//write guard statement
//declare the head and tail on the array
//return the new array recursively.
//use a ternary statement - true or false to filter the array
//call the function

const array = [1,2,3,4,5,6,7,8,9,10]
const isEven = v => v % 2 ===0

function filta (func, arr) {
	if(isEmpty(arr)){
		return []
	}

	const x = head(arr)
	const xs = tail(arr)

	return func(x) //condition
	? [func(x), ...filta(func, xs)] //true
	: filta(func, xs) //false

}

//expected [2,4,6,8,10]

filta(isEven, array)
