// drop function
 
// number -> array -> array

// declare the array

const array = [1, 2, 3, 4, 5, 6]

// create the function

const drp = (num, arr) => {

/* 
  include a guard statment - with each loop, the number
  decreases by 1 until 0. That is the end of the loop
*/

  if (num===0) {
    return arr
  }
  
// create the tail for the function to iterate through

  const xs = tail(arr)
  
  const out = [drp(num-1, xs)]
  console.log(out)
  return out
  
}

drp(3, array)

// drp(3, array) expected result [4, 5, 6]

// take first 4 elements from our fruit list

const fruit = ('banana', 'apple', 'pear', 'orange', 'grapes', 'apricot', 'pineapple', 'nectarine', 'mango')

const droop = (num, [x, ...xs]) => {
	if(num === 0) {
		return arr 
	}

return [droop(num-1, xs)]

}

droop(4, fruit)	

// 30/10 13min55

const names = ['mike', 'jo', 'ximing', 'john', 'jos', 'alex', 'nic']

const drop1 = (num, arr) => {
  if (num === 0) return arr

  const xs = tail(arr)  

  return [...drop1(num - 1, xs)]  
}

drop1(3, names) // => ['john', 'jos', 'alex', 'nic']

//  19/11 14:04

const drop4 = (n, arr) => {
  if(n === 0) return arr

  const xs = tail(arr)

  return typeof(xs) === 'string'
    ? drop4(n - 1, xs)
    : [...drop4(n - 1, xs)]
}

drop4(3, 'michael') // => 'hael'


//  30/11 13:30

const drop5 = (n, a) => {
  if (n === 0) return a 

  const xs = tail(a)

  return typeof(a) === 'string'
    ? drop5(n - 1, xs)
    : [...drop5(n - 1, xs)]
}

drop5(2, 'michael') // => 'chael'
drop5(2, [1, 2, 3, 4, 5]) // => [3, 4, 5]

// 4/11 5:20

const drop6 = (n, [x, ...xs]) => {
  if (n === 1) return xs

  return typeof(xs) === 'string'
    ? drop6(n - 1, xs)
    : [...drop6(n -1, xs)]
}

drop6(5, 'superman') // => 'man'


