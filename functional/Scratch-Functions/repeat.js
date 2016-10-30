// repeat function

const repet = (num, word) => {
	if(num === 0) return []

	return [word, ...repet(num - 1, word)]
}

repet(5, "hi")

// expected ['hi', 'hi', 'hi', 'hi', 'hi']

// 30/10 5min10

const repeat1 = (num, a) => {
  if (num === 0) return []
  
  return [a, ...repeat1(num - 1, a)]
}


repeat1(5, 'fish') // => ['fish', 'fish', 'fish', 'fish', 'fish',]