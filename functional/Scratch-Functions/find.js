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

// 18/11	3:10

const find3 = (num, [x, ...xs]) => {
	if(!x) return undefined

	return x === num 
		? x
		: find3(num, xs)
}

find3(2, [1, 2, 3, 4]) // => 2

// 30/11 4:18

const find5 = (n, [x, ...xs]) => {
  if (!x) return undefined

  return x === n 
    ? x 
    : find5(n, xs)
}

find5(2, [1, 2, 3, 4, 5]) // => 2
find5(89, [1, 2, 3, 4, 5]) // => undefined

// 4/12 2:58

const find6 = (a, [x, ...xs]) => {
  if (!x) return undefined

  return x === a 
    ? x 
    : find6(a, xs)
}

find6('apple', ['orange', 'banana', 'pineapple', 'apple'] // => apple