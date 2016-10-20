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


//filter function for taking out odd numbers

/* declare const to go into functions
write out expected result
write out function
is a guard statement needed? Include that
declare the head and tail of the array
what are you going to return - pass the head into the function
loop it recursively by passing the tail into the filter function
until finished - empty array / guard statement met
use a ternary to find out if condition is true or false
call the function*/

const array = [1,2,3,4,5,6,7,8,9,10]
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

// expected [1,3,5,7,9]

filta(oddOneOut, array)

//filter divisible by 3

const array = [1,2,3,4,5,6,7,8,9]
const div3 = n => n % 3 === 0

const filt = (func, arr) => {
	if (isEmpty(arr)) {
		return []
	}

	const [x, ...xs] = arr 

	return func(x)
	?[x, ...filt(func, xs)]
	:filt(func, xs)
}

//expected [3,6,9]
 filt(div3, array)

