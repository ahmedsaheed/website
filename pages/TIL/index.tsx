import React, { Component } from "react"
import Dairy from "./api"
import { NextSeo } from "next-seo"
import Head from "next/head"
import Layout from "../../component/layout"
import Summary from "../../component/summary"

function til() {
    return (
        <>
            <NextSeo
                title="Ahmed Saheed's TIL"
                description="A place to document 'Today I Learnt'"
                canonical="https://saheed.codes/me"
                openGraph={{
                    url: "https://saheed.codes/me",
                    title: "Ahmed Saheed's TIL",
                    description: "A place to document 'Today I Learnt'",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>TIL | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>
            <header className="mx-auto max-w-3xl space-y-5">
            <Summary
                title="Today I Learnt" 
                content={
                    <>
                        A catalog of referenceable notes documented at least thrice a week. I initially
                    heard about TIL from{" "}
                    <a target="_blank" href="https://aboutmonica.com/">
                        Monica Powell's
                    </a>{" "}
                    <a
                        target="_blank"
                        href="https://github.com/readme/guides/private-documentation"
                    >
                        writing on GitHub's Blog
                    </a>
                    . TIL is a way to summarise information learnt in few sentences which can be of
                    great relivence when commited to on a long run. I hacked up a cli application
                    which helps me add my til as a gist comment on GitHub. In the nearest future, I
                    would like to create a search utility for this website which would help search
                    through the contents of my til as they increase.
                
                        
                    </>
                }
            />

                <br />
                <Dairy />
            </header>
        </>
    )
}

export default Layout(til)
