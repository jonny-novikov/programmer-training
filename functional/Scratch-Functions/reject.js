// reject function
// take an array and applies a condition
// if the condition is true, then the value is rejected
// the return array comes back with those values missing.

// declare the const to go into the function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumber = n => n % 2 === 1

// declare the function

const rejec = (func, arr) => {

// write a guard statement so the loop / recursion stops when it is met

	if (isEmpty(arr)) {
		return []
	}

// declare the head and tail of the array using spread

	const [x, ...xs] = arr

// write what you want to return as a ternary
// return the function, if the condition is true, move onto the next value
// if false, value goes into the array and function is called again

	return func(x)
	 ? rejec(func, xs)
	 : [x, ...rejec(func, xs)]
}

// expected [2,4,6,8,10]

// call the function

rejec(oddNumber, array)

//big number reject function

const array = [1, 12, 5, 23, 55, 6, 4, 3, 18]
const bigNumber = n => n < 5

const rejec = (func, arr) => {
  if (isEmpty(arr)) {
    return []
  }
  
  const [x, ...xs] = arr
  
  return func(x)
   ?rejec(func, xs)
   :[x, ...rejec(func, xs)]
}

rejec(bigNumber, array)

// expected [12, 5, 23, 55, 6, 18]


// Filterable f => (a → Boolean) → f a → f a

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isEven = n => n % 2 === 1

const rejeck = (func, arr) => {
  if (isEmpty(arr)) return []
  
  const [x, ...xs] = arr
  
  return func(x)
    ? rejeck(func, xs)
    : [x, ...rejeck(func, xs)]
}

// expected [2, 4, 6, 8, 10]

rejeck(isEven, array)