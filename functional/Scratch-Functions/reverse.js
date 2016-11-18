//reverse function

/*
create the function
if it takes in an array,it will return an array
if it takes in a string, it will return a string

pass the value into the function
if it is an array
split into head and tail
return


*/

const revers = (a) => {
	if(isEmpty(a)) return []

	const [x, ...xs] = a 

	return typeof(a) === 'string'
	  ? ...revers(a) + x
	  : [...revers(a), xs]
}


// revers('hello')
// revers[1, 2, 3, 4]
// this one does not work!!

// 31/10 15min10

const str = 'hello'
const arr = [1, 2, 3, 4, 5]

const reverse1 = ([x, ...xs]) => {
	if(!xs) return x 

	return typeof(x) === 'string'
	  ? reverse1(xs) + x 
	  : [...reverse1(xs), x]
}

reverse1(str) // => 'olleh'
reverse1(arr) // => [5, 4, 3, 2, 1]

