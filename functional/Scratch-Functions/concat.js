// concat function

// takes in 2 arguments which must be the same type
// concatenates them together

// strings return strings, arrays return arrays

const conkat = (a,b) => typeof(a) === "string" ? a + b : [...a, ...b]

conkat([1, 2, 3, 4],[5, 6, 7, 8])

// expected [1,2,3,4,5,6,7,8]

conkat('red', 'rum')

// expected 'redrum'

// expanded format

const concate = (a, b) => {
	return typeof(a) === "string"
	  ? a + b 
	  : [...a, ...b]
}

concate('hello', 'there')

// 18/11	2:41

const concat3 = (a, b) => {
	return typeof(a) === 'string'
		? a + b 
		: [...a, ...b]
}

concat3('fish', 'chips') // => 'fishchips'
concat3([1, 2, 3], [4, 5, 6]) // => [1, 2, 3, 4, 5, 6]

//	Concat function
//	Declare the concat function
//	Takes in 2 parameters
// 	return written as a ternary statement
//	checks if the first value is a string - if so, the returns the 2 arguments 
//	as a concatenated string
//	if not as string, then it returns the 2 values concatenated in a single array 
// 	by destructuring them before putting them together.


// 28/11 3:24

const concat4 = (a, b) => typeof(a) === 'string' ? a + b : [...a, ...b]

concat4('hello', 'there') // => 'hellothere'
concat4([1, 2], [3, 4]) // => [1, 2, 3, 4]

// 3/12 2:19

const concat5 = (a, b) => typeof(a) === 'string' ? a + b : [...a, ...b]

concat5(['orange', 'banana'], ['strawberry', 'mango']) //=> ['orange', 'banana', 'strawberry', 'mango']


