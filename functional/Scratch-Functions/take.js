//take function
// returns the first n elements in an array

// declare the array

const array = [1,2,3,4,5,6,7,8,9,10]

//build the function

const taake = (num, arr) => {
// make up a guard statment
	if (num === 0) {
		return []
	}
// separate the head and tail so function can run through the array
	const [x, ...xs] = arr 

/* pass the array through the function. 
At each iteration, num is reduced by 1. Condition is met
and empty array is returned to signal end of loop*/
	
	return [x, ...taake(num-1, xs )]
}

taake (3, array)

// taake(3, array) -> [1,2,3] expected result