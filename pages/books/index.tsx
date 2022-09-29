import React from "react"
import { NextSeo } from "next-seo"
import Summary from "../../component/summary"
import Head from "next/head"
import Layout from "../../component/layout"
import Books from "./Api"

function books() {
    React.useEffect(() => {
        document.getElementById("upper")!.style.display = "none"
    }, [])
    return (
        <>
            {" "}
            <NextSeo
                title="Ahmed Saheed's Libary"
                description="Ahmed Saheed's Digital Library"
                canonical="https://saheed.codes/books"
                openGraph={{
                    url: "https://saheed.codes/books",
                    title: "Ahmed Saheed Books",
                    description: "Ahmed Saheed's Digital Library",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                <title>Library of  Ahmed Saheed</title>
            </Head>
            <h2 style={{marginLeft: "40px"}} className="post-title">⚘ Library</h2>
            <br />
            <Books />
            <br />
        </>
    )
}
export default Layout(books, "Library")
