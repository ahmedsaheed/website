import React, { Component } from "react"
import Book from "./api"
import { NextSeo } from "next-seo"
import Footer from "../../component/footer"
import Summary from "../../component/summary"
import Head from "next/head"

export default class extends Component {
    render() {
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
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                    <title>Books 📚 | Ahmed Saheed</title>
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
                                <a class="here false" href="/books">
                                    books
                                </a>
                                <a class="false" href="/fun">
                                fun
                                </a>
                                <a class="text-am-green-light" href="/projects">
                                    projects
                                </a>
                                <a class="false" href="/TIL">
                                    til
                                </a>
                                <a class="false" href="/uses">
                                    tools
                                </a>
                            </div>
                        </div>
                    </nav>
                    <Summary
                        title="Books 📚"
                        content={
                            <>
                                In science fiction which was published around the 1920s, "It is
                                always expected that future human beings would have enormous heads
                                because they would have very big brains and they would be very wise.
                                It didn't work that ways, what happened is the human race is
                                building a brain outside its body. That is to say an interlocking
                                electronic network of telephonic, television, radionic communication
                                which is rapidly intelocked with computers, so that you will within
                                a few years be able to plug your brain into a computer". <br />{" "}
                                These are all the books i've currently read, this list is updated
                                dynamically whenever I complete a new book. Kinda my virtual
                                shelf...
                            </>
                        }
                    />
                    <br />
                    <center>
                        <Book />
                    </center>
                    <br />

                    <Footer />
                </body>
            </>
        )
    }
}
