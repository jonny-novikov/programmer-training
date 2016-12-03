// chain

//chain maps a function over a list and concatenates the results.

const duplicate = n => [n, n]

const chain1 = (f, [x, ...xs]) => x ? [x, ...f(x), ...chain1(f, xs)] : []

chain1(duplicate, [1, 2, 3, 4]) // => [1, 1, 2, 2, 3, 3, 4, 4]