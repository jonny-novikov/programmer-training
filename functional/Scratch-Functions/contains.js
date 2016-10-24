//contains function - looks to see if array contains a value and will 
//return true or false

//a → [a] → Boolean

const array = [1,2,3,4,5,6,7,8,9,10]

const containz = (num, arr) => {
	if(isEmpty(arr)) return false

	const[x, ...xs] = arr 

	return x === num 
	 ? true 
	 : containz(num, xs)
	 	
}

containz(5, array)

//expected true