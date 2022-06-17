import "../styles/style.css"
import "../styles/blog.css"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import Theme from "../component/theme"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
            <a className="zero">
                <Theme />
            </a>
        </>
    )
}
