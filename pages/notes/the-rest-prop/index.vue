...rest - what is this thing? a mystery prop? a framework variable?

...rest is everything from the object you got minus what you destructured before it.

here's an example.

let's say you're making an SPA that has  user profiles. on login, the API returns a `user` object. you may want to split it into what's editable by the user and separate out the `id`, which cannot be modified by the front-end.

const user = {
 id: 1,
 name: 'Peter',
 surname: 'Pan',
 email: 'peter@email.com'
}

// `userDetails` is an equivalent of `rest`
const {
  id: userId,
  ...userDetails
} = user

this gives us:
console.log(userId) // 1
console.log(userDetails) // {surname: 'Pan', email: 'peter@email.com'}