//map function

const array = [1,2,3,5,6,7,8,9,10]
const plus10 = n => n + 10

const maap = (func, arr) => {
	if(isEmpty(arr)) return []

	const [x, ...xs] = arr 

	return [x, ...maap(func, xs)]
}

maap(plus10, array)

//expected [11,12,13,14,15,16,17,18,19,20]

// filter function

const array = [5,13,8,22,6,45,18,4]
const smallNum = n => n < 10

const filterr = (func, arr) => {
	if(isEmpty(arr)) return []

	const [x, ...xs] = arr 

	return func(x)
	 ? [x, ...filterr(func, xs)]
	 : filterr(func, xs)
}

filterr(smallNum, array)

//expected [5,8,6,4]

//reject function

const array = [3, 5, 18, 39, 2, 55, 64, 4, 11]
const odds = n => n % 2 ===0

const rejec = (func, arr) => {
	if (isEmpty(arr)) return []

	const [x, ...xs] = arr 

	return func(x)
	 ? rejec(func, xs)
	 : [x, ...rejec(func, xs)]
}

rejec(odds, array)

//expected [3,5,39,55,11]

//drop function

const array = ['a','b','c','d','e','f','g','h','i']

const dropp = (num, arr) => {
	if (num === 0) return arr 

	const [x, ...xs] = arr 

	return [...dropp(num - 1, xs)]
}

dropp (4, array)

//expected ['e','f','g','h','i']

//find function

const array = ['apple','orange','pear','pineapple','mango','banana']

const findd = (fruit, arr) => {
	if (isEmpty(arr)) = return undefined

	const [x, ...xs] = arr 

	return x === fruit
	 ? x 
	 : findd(fruit, xs)
}

findd('mango', array)

//expected findd('mango', array)

//contains function

const array = ['black','red','orange','brown','yellow','green','pink']

const contain = (color, [x, ...xs]) => {
	if (isEmpty(arr)) return false

	// const [x, ...xs] = arr 
	
	return x === color 
	 ? true 
	 : contain(color, xs)
}

contain('brown',array)

//expect true

// take function

const array = [1,2,3,4,5,6,7,8,9,10]

const tak = (num, arr) => {
	if (num === 0) return []

	const [x, ...xs] = arr 
	
	return [x, ...tak(num - 1, xs)]	

}

tak(5, array)

//expect [1,2,3,4,5]

//slice function
