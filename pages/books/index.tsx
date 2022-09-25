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
            <p className="name" style={{  paddingLeft: "30px", paddingBottom: "7px", paddingTop: "15px", fontSize: "2em" }}>
            <p style={{display: "inline"}}>⚘</p> Library

                        
                    </p>
            <br />
            <Books />
            <br />
        </>
    )
}
export default Layout(books, "Library")
