// head function
// takes an array and returns the first value

const array = [1, 2, 3, 4, 5]

const heed = (arr) => {

	const [x, ...xs] = arr 

	return [x]
}

heed(array)

// expected [1]

const a = ['car', 'bus', 'train' ,'boat']

const headd = ([x]) => [x]

// don't need the tail as only want the head of the array

headd(a)

// expected ['car']

// 19/11	2:04

const head3 = ([x, ...xs]) => [x]

head3([1, 2, 3, 4]) // => [1]

// 30/11 3:20

const head4 = ([x, ...xs]) => x ? x : undefined

head4(['fi', 'fo', 'fum']) // => 'fi'
head4([]) // => undefined