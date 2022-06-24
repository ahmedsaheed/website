import React, { Component } from "react"
import Dairy from "./api"
import { NextSeo } from "next-seo"
import Summary from "../../component/summary"
import Head from "next/head"
import Layout from "../../component/layout"

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
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>TIL | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>
            <center><h1 class=" text-3xl font-bold">Ahmed's Daily Encyclopedia: Today I Learnt</h1></center> 
                       <hr/>

            <p className="pads mx-auto max-w-3xl space-y-5">A catalog of referenceable notes documented at least thrice a week. I first
                        heard about til from{" "}
                        <a
                            target="_blank"
                            class="text"
                            href="https://aboutmonica.com/"
                            style={{ textDecorationLine: "underline" }}
                        >
                            Monica Powell's
                        </a>{" "}
                        <a
                            target="_blank"
                            class="text"
                            href="https://github.com/readme/guides/private-documentation"
                            style={{ textDecorationLine: "underline" }}
                        >
                            writing on GitHub's Blog
                        </a>
                        . TIL is a way to summarise information learnt in few sentences which can be
                        of great relivence when commited to on a long run. I hacked up this rust cli
                        program which helps me add my til as a gist comment on GitHub. In the
                        nearest future, I would like to create a search utility for this website
                        which would help search through the contents of my til as they increase.</p> 
            <br />
            <Dairy />
        </>
    )
}

export default Layout(til)
