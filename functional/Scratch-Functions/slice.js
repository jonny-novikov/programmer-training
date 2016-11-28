/*
	Number → Number → [a] → [a]
  Number → Number → String → String

  Returns the elements of the given list or string 
  (or object with a slice method) from fromIndex 
  (inclusive) to toIndex (exclusive).
*/


const slice1 = (n, e, arr) => {
 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 if (e === 0) return []
  if (n === 0) return arr 

  const [x, ...xs] = arr 
  
  return [...slice1(n - 1, e - 1, xs)]

}

slice(2, 6, arr)