// math.js

/*
With a default export, we exported only a single value (our "adiciona" function) from our math.js module.
*/

/*
When using a default export, you can rename your import if you'd like to. In our script.js file, we can import our add function and call it addition (or any other name).
*/

export default function adiciona(a, b) 
{
  return a+b;
}

/*
On the other hand, named exports are used to export multiple values from a module.
*/

export function multiplica(a, b)
{
  return a*b;
}


