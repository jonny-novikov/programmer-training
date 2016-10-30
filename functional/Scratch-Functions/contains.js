// contains function - looks to see if array contains a value and will 
// return true or false

// a → [a] → Boolean

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const containz = (num, arr) => {
	if (isEmpty(arr)) return false

	const[x, ...xs] = arr 

	return x === num 
	  ? true 
	  : containz(num, xs)
	 	
}

containz(5, array)

// expected true

// 30/10 2min30

const array = [309, 8970, 23, 4, 890, 345]

const contains1 = (num, [x, ...xs]) => {
  if (!x) return false

  return x === num
    ? true
    : contains1(num, xs)
}

contains1(309, array) // => true