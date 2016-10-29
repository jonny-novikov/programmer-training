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