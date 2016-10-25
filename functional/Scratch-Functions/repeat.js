// repeat function

const repet = (num, word) => {
	if(num === 0) return []

	return [word, ...repet(num - 1, word)]
}

repet(5, "hi")