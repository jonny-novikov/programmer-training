// find function looks for a value in an array and returns
// it if it is there, otherwise returns undefined

// (a → Boolean) → [a] → a | undefined

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const findd = (num, arr) => {
	if (isEmpty(arr)) return undefined

	const [x, ...xs] = arr 
	
	return x === num 
	  ? x 
	  : findd(num, xs)	
}

findd(23, array)

// expect => undefined

// 30/10 7min45

const array = [309, 8970, 23, 4, 890, 345]

const find1 = (num, [x, ...xs]) => {
  if (!x) return undefined
  
  return x === num
    ? x
    : find1(num, xs)
}

find1(23, array) // => 23