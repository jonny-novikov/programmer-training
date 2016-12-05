/*
join function
Takes in a separator and an array and returns a string
*/

const array = [1, 2, 3, 4, 5, 6]

const joint = (s, [x, ...xs]) => {
	
  return (xs === [])
    ? x
    : x + s + joint(s, xs)
}

// expected joint('|', array) => "1|2|3|4|5|6|"

joint('|', array)

// not good as the separator still appends to the end

// 31/10 12min50

const array = [1, 2, 3, 4, 5, 6]

const join1 = (s, [x, ...xs]) => {
	if (isEmpty(xs)) return (x)

	return x + s + join1(s, xs)	
}

join1('|', array) // => "1|2|3|4|5|6"

// charles example

const array = [1, 2, 3, 4, 5, 6]

const joint = (s, [x, ...xs]) => (isEmpty(xs)) 
  ? x 
  : x + s + joint(s, xs)

joint('|', array) // => "1|2|3|4|5|6"

// 30/11  4:50

const join5 = (s, [x, ...xs]) => {
  if (isEmpty(xs)) return x 

  return x + s + join5(s, xs)
}

join5('+', 'hello') // => 'h+e+l+l+o'

//  4/12  3:20

const join6 = (s, [x, ...xs]) => {
  if(isEmpty(xs)) return x 

  return x + s + join6(s, xs)
}

join6('+', 'join') // => 'j+o+i+n'


