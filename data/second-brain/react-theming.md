# Theming In React

Lately, the use of multiple themes on web and mobile applications has been has risen immersely. While developing my personal website, I struggled with this theming feature.

I had several issues during implementation of the feature, that is why i have decided to write this brief note on react theming.

## prerequisite

I assert you already have a react environment to work with, if not you can easily create one using:

```bash
npx create-next-app@latest
```

or

```bash
npx create-react-app my-app
```

## Implementing the theming

For implementation of the theme, we'd make use of react hook [`useLocalStorage`](https://usehooks.com/useLocalStorage/) which stores the users selected theme in local storage so that it persists through a page refresh.

We'd Also need our theme colors and element specified out in our stylesheet.

And with all these, we're good to go!

To begin, create a `hooks` folder in your root directory. Add a new javascript file in the directory like so `useLocalStorage.js`.

Now in your `useLocalStorage.js` file lets add some code to allow SSR[^1] and SSG[^2] work decently.

```js
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

```

On completion of the hook, we now need to implement a function which makes our theming work.

Implementing this is very fair when done correctly.
To get started let's create a component called `theme.js`. In our `theme.js` file lets implement this function

```js
import { createContext, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { WiDaySunny } from "react-icons/wi"
import { MdOutlineDarkMode } from "react-icons/md"

function mode() {
    const [theme, setTheme] = useLocalStorage("theme", "light")

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.getElementsByTagName("html")[0].classList.add("dark")
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark")
        }
    }, [])

    useEffect(() => {
        if (theme == "dark") {
            document.getElementsByTagName("html")[0].classList.add("dark")

            localStorage.theme = "dark"
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark")

            localStorage.theme = "light"
        }
    }, [theme])

    const toggleDarkMode = () => {
        if (theme == "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", detectKeydown, true)
    }, [])

    const detectKeydown = (e) => {
        if (
            (e.key === "x" && (e.ctrlKey || e.metaKey)) ||
            (e.key === "l" && (e.ctrlKey || e.metaKey))
        ) {
            toggleDarkMode()
        }
    }

    return (
        <button onClick={toggleDarkMode}>
            {theme === "light" ? (
                <WiDaySunny style={{ color: "black" }} />
            ) : (
                <MdOutlineDarkMode style={{ color: "white" }} />
            )}
        </button>
    )
}

export default mode
```

Let's add a touch of fun, we could also switch between themes by using our keyboard buttons, but this obviously wouldn't work for mobile devices. To implement this we'd need to add an extra function in our `theme.js` file which would detect keys pressed.

```js
useEffect(() => {

document.addEventListener("keydown", detectKeydown, true)

}, [])

const detectKeydown = (e) => {
// on pressing ctlr + d or ctlr + l our theme would be switched.
if (e.key === "d" && (e.ctrlKey || e.metaKey) || (e.key === "l" && (e.ctrlKey || e.metaKey) )) {

toggleDarkMode()

}
```

Finally, we'd do some bit of styling work on our css

```css
:root {
    --text-color: #3a333d;
    --background: #fff;
}

.light {
    --text-color: #3a333d;
    --background: #fff;
}

.dark {
    --text-color: #bbbbbb;
    --background: #000;
}
```

And with all this set up, you should have a theme working fine on your react app.

---

[^1]:
    [Server Side Rendering: A method of rendering pages which generates the HTML on the server for the all page but only **on the first load**](https://medium.com/jspoint/a-beginners-guide-to-react-server-side-rendering-ssr-bf3853841d55)

    [^2]: [Static Site Generation a.k.a. SSG is pre-rendering your React app into HTML at build time.](https://dev.to/anshuman_bhardwaj/what-the-heck-is-ssg-static-site-generation-explained-with-nextjs-5cja).
