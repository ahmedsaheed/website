# react-weblibrary

Another react hook for loading scripts from the web

```js
import { useWebLibrary } from 'react-weblibrary'

function MyComponent() {
   // Expect the script from https://example.com/someLibrary to define `window.$`.
   // If the global exists (e.g. because the script is already requested in <head>), the script will not be requested again.
   const [someLibrary, status] = useWebLibrary('$', 'https://example.com/someLibrary')

   if (!someLibrary) {
      return status === 'try' ? 'Still loading...' : 'Something went wrong.'
   }

   someLibrary.someFunction()
}
```
