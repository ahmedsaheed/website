import "../styles/style.css"
import "../styles/globals.css"

import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import "highlight.js/styles/atom-one-dark-reasonable.css";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
