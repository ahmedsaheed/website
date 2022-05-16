import "../styles/style.css"
import "../styles/blog.css"
import "../styles/hovers.css"
import LoginButton from "../src/component/login.js"
import LogoutButton from "../src/component/logout"
import { useEffect } from "react"
// import {gapi} from "gapi-script"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}