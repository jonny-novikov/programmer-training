// find function looks for a value in an array and returns
// it if it is there, otherwise returns undefined

//(a → Boolean) → [a] → a | undefined

const array = [1,2,3,4,5,6,7,8,9,10]

const findd = (num, arr) => {
	if(isEmpty(arr)) return undefined

	const [x, ...xs] = arr 
	
	return x === num 
	 ? x 
	 : findd(num, xs)	
}

findd(23, array)

//expect => undefined