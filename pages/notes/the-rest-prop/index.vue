<template>
  <main class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-indigo-lightest">
    <div class="flex flex-col max-w-sm">
      <p class="mt-2"><span class="font-mono">...rest</span> is everything from the object you got minus what you destructured before it.</p>
      <p class="mt-2">let's say you're making an SPA that has  user profiles. on login, the API returns a <span class="font-mono">user</span> object. you may want to split it into what's editable by the user and separate out the <span class="font-mono">id</span>, which cannot be modified by the front-end.</p>
      <pre class="mt-2">
        const user = {
          id: 1,
          name: 'Peter',
          email: 'peter@email.com'
        }

        //userDetails is an equivalent of rest
        const {
          id: userId,
          ...userDetails
        } = user
      </pre>
      <p>this gives us:</p>
      <pre>
        console.log(userId)
        // 1
        console.log(userDetails)
        // {name: 'Peter', email: 'peter@email.com'}
      </pre>
    </div>
  </main>
</template>
