// drop function
 
// number -> array -> array

//declare the array
const array = [1,2,3,4,5,6]

// create the function
const drp = (num, arr) => {
/* include a guard statment - with each loop, the number
decreases by 1 until 0. That is the end of the loop*/
  if (num===0) {
    return arr
  }
  
//create the tail for the function to iterate through
  const xs = tail(arr)
  
  const out = [drp(num-1, xs)]
  
  console.log(out)
  
  return out
  
}

drp(3, array)
//drp(3, array) expected result [4,5,6]
