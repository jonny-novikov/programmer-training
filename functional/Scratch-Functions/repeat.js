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

// 19/11 2:18

const repeat3 = (n, a) => n ? [a, ...repeat3(n - 1, a)] : []

repeat3(4, 'hello') // => ['hello', 'hello', 'hello', 'hello']


// 30/11  4:37

const repeat4 = (n, a) => n ? [a, ...repeat4(n - 1, a)] : []

repeat4(3, 'hello') // => ['hello', 'hello', 'hello']

