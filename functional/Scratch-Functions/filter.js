// filter function

// declare const to be passed into filter function
// write the expected result
// create the filter function
// write guard statement
// declare the head and tail on the array
// return the new array recursively.
// use a ternary statement - true or false to filter the array
// call the function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isEven = v => v % 2 ===0

function filta (func, arr) {
	if (isEmpty(arr)){
		return []
	}

	const x = head(arr)
	const xs = tail(arr)

	return func(x) // condition
	? [func(x), ...filta(func, xs)] // true
	: filta(func, xs) // false

}

//expected [2, 4, 6, 8, 10]

filta(isEven, array)


// filter function for taking out odd numbers

/* 
	declare const to go into functions
	write out expected result
	write out function
	is a guard statement needed? Include that
	declare the head and tail of the array
	what are you going to return - pass the head into the function
  loop it recursively by passing the tail into the filter function
  until finished - empty array / guard statement met
  use a ternary to find out if condition is true or false
  call the function
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddOneOut = n => n % 2 ===1

const filta = (func, arr) => {
	if (isEmpty(arr)) {
		return []
	}

	const [x, ...xs] = arr

	return func (x)
	? [func(x), ...filta(func, xs)]
	: filta(func, xs)
}

// expected [1, 3, 5, 7, 9]

filta(oddOneOut, array)

// filter divisible by 3

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const div3 = n => n % 3 === 0

const filt = (func, arr) => {
	if (isEmpty(arr)) {
		return []
	}

	const [x, ...xs] = arr 

	return func(x)
	  ? [x, ...filt(func, xs)]
	  : filt(func, xs)
}

// expected [3, 6, 9]

 filt(div3, array)

// 30/10 4min 40

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const moreThan5 = n => n > 5

const filter1 = (func, [x, ...xs]) => {
  if (!x) return []

  return func(x)
    ? [x, ...filter1(func, xs)]
    : filter1(func, xs)  
}

filter1(moreThan5, array)

// expected filter1(moreThan5, array) => [6, 7, 8, 9, 10]


// 18/11 	4:52

const numbers = [23, 45, 34, 56, 67, 46, 79]
const oddOnes = n => n % 2 === 1

const filter3 = (func, [x, ...xs]) => {
	if(!x) return []

	return func(x)
    ? [x, ...filter3(func, xs)]
    : filter3(func, xs)
}

filter3(oddOnes, numbers) // => [23, 45, 67, 79]

// 30/11  5:44

const arr = [2, 6, 89, 109, 74, 79]
const odds = n => n % 2 === 1

const filter4 = (f, [x, ...xs]) => {
  if (!x) return []

  return f(x)
    ? [x, ...filter4(f, xs)]
    : filter(f, xs)
}

filter4(odds, arr) // => [89, 109, 79]