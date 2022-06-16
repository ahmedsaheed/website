import "../styles/style.css"
import "../styles/blog.css"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>

            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )
}
