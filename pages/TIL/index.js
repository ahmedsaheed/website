import React, { Component } from "react"
import Dairy from "./api"
import { NextSeo } from "next-seo"
import Footer from "../../component/footer"
import Summary from "../../component/summary"
import Head from "next/head"

export default class extends Component {
    render() {
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
                <body>
                    <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10">
                        <div
                            class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between"
                            data-theme="business"
                            style={{ fontfamily: "ui-serif" }}
                        >
                            <a class="text" href="/">
                                AHMED
                            </a>
                            <div class="space-x-4 flex items-center hover:text-blue-600">
                                <a class="false" href="/second-brain">
                                    garden
                                </a>
                                <a class="false" href="/books">
                                    books
                                </a>
                                <a class="false" href="/fun">
                                fun
                                </a>
                                <a class="text-am-green-light" href="/projects">
                                    projects
                                </a>
                                <a class=" here false" href="#">
                                    til
                                </a>
                                <a class="false" href="/uses">
                                    tools
                                </a>
                            </div>
                        </div>
                    </nav>
                    <Summary
                        title="Daily Encyclopedia: Today I Learnt"
                        content={
                            <>
                                A catalog of referenceable notes documented at least thrice a week.
                                I first heard about til from{" "}
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
                                . TIL is a way to summarise information learnt in few sentences
                                which can be of great relivence when commited to on a long run. I
                                hacked up this rust cli program which helps me add my til as a gist
                                comment on GitHub. In the nearest future, I would like to create a
                                search mechanism for this website which would help search through
                                the contents of my til as they increase.
                            </>
                        }
                    />
                    <br />
                    <Dairy />
                    <Footer />
                </body>
            </>
        )
    }
}
