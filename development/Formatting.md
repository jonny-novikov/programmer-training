# Formatting Best Practices

**Rule of thumb:** When in Rome, format as the Roman's do. But if you have influence in how the formatting should be done; here is what we think is best practice / the most clean and logical way. 

## General Set Up

- Indent using 2 spaces
- Indent vertically correctly! Opening and closing tags should line up vertically and anything that is nested should be indented again. 
- When in doubt more spaces / empty lines is better then cramped code

## File names

- Name React files/components with pascal case and NO dashes.
- Only name components with the extension JSX; everything else can be JS.
- Everything other file type should be lower case. 

## Arrays

- Can be in one line
- As arrays are index based DO NOT put into alphabetical order

```
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = ['hi', 'hello', 'kia ora']
```

## Objects

- Stack the items and always keep your properties in alphabetical order so they are super easy for anyone to find. 

```
Car = {
  Color: 'Black',
  Make: 'Honda',
  Transmission: 'Manual',
  Type: 'Hatch Back'
}
```

## Imports

- Try to put any imports or listed resources into alphabetical lists. 
- Place module imports at the top of the page and imports from resources you've created blocked together with a line to space them out. 
- If an import has several things it is importing - space them onto their own lines and put them. 

```
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { 
  login, 
  signOut, 
  update 
} from '../../state/actions'
import { getUser } from '../../state/selectors'
```

## Functions

- If you only have one parameter there is no need to put brackets around it.
- If you are creating a function all on one line - there is on need for curly braces or the word return.
- If you are dropping the function down onto multiple lines - you will have to add curly braces and the word return at your return point.

```
const double = num => num * 2

const plusThreeThings = (num1, num2, num3) => {
  return num1 + num2 + num3
}
```

## React Components

- When deconstructing or declaring - add spaces after and before the opening and closing brackets. This makes them easier to read and makes it more obvious that something is beings declared. 

```
const ExampleCompoOne = ({ signOut }) => {
  return <div>
    <button onClick={signOut}>Sign out</button>
    <p>Hello, {user.name}!</p>
  </div>
}
```

- If you are deconstructing more then one item; pass in props then deconstruct inside the function. 
- Stack the items and always keep your props in alphabetical order so they are super easy for anyone to find. 

```
const ExampleCompoTwo = (props) => {
  const { 
    login, 
    signOut, 
    user, 
    username 
  } = props
```

- When writing a react component that needs div's
    - keep the opening div on the same line as the return
    - have the closing bracket inline with the return

```
  return <div>
    <button onClick={signOut}>Sign out</button>
    <p>Hello, {user.name}!</p>
  </div>
}
```

## Comments

- Pad out any brackets or slash and asterixes with spaces for better readability

```
// Space before writing anything 
/* Here too! */
```

- When writing an expect comment, write the: 
    - function you are calling
    - any expected output with a fat arrow 
    - the expected output

```
map(doubleFunc, [1, 2, 3, 4, 5]) // => [2, 4, 6, 8, 10]
```


