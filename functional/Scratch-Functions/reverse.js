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
	 : [...reverse(a), xs]
}


// revers('hello')
// revers[1, 2, 3, 4]


