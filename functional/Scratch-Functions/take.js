// take function
// returns the first n elements in an array

// declare the array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// build the function

const taake = (num, arr) => {

// make up a guard statment

	if (num === 0) {
		return []
	}

// separate the head and tail so function can run through the array

	const [x, ...xs] = arr 

/* 
  pass the array through the function. 
  At each iteration, num is reduced by 1. Condition is met
  and empty array is returned to signal end of loop*/
	
	return [x, ...taake(num-1, xs )]
}

taake(3, array)

// taake(3, array) -> [1, 2, 3] expected result

const array = ['mike', 'jo', 'ximing', 'anne', 'maya', 'howard', 'joan', 'eric', 'raphael']

const takee = (num, [x, ...xs]) => {
	if(num === 0) {
		return []
	}

	return [x, ...takee(num-1, xs)]

}

takee (5, array)

// take function. Takes a number and returns that number of elements
// from the start of an array
// Number → [a] → [a]

const color = ['red', 'blue', 'green', 'black', 'orange', 'yellow']

const tak = (num, arr) => {
	if(num === 0) return []

	const [x, ...xs] = arr 

	return [x, ...tak(num-1, xs)]
}

//tak(4, color) => ['red', 'blue', 'green', 'black']

tak(4, color)

// 30/10 2min45

const names = ['mike', 'jo', 'ximing', 'al', 'rob']

const take1 = (num, [x, ...xs]) => {
  if (num === 0) return []

  return [x, ...take1(num - 1, xs)]  
}

take1(3, names) // => ['mike', 'jo', 'ximing']

// 19/11	4:31

const take3 = (n, [x, ...xs]) => {
	if (n === 0) return []

	return typeof(x) === 'string'
		? x + take3(n - 1, xs)
		: [x, ...take3(n - 1, xs)]
}

take3(3, 'michael') // => 'mic'

// 30/11  3:20

const take4 = (n, [x, ...xs]) => {
  if (!x) return []

  return typeof(x) === 'string'
    ? x + take4(n - 1, xs)
    : [x, ...take4(n - 1, xs)]
}

take4(4, [1, 2, 4, 5, 6, 7, 8 ]) // => [1, 2, 4, 5]