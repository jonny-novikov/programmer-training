/*
join function

Takes in a separator and an array and returns a string

*/

const array = [1,2,3,4,5,6]

const joint = (s, [x, ...xs]) => {
	if(!x) return []

	return x + s + joint(s, xs)
}

//expected joint('|', array) => "1|2|3|4|5|6|"

joint('|', array)