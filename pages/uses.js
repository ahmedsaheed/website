import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Footer from "../component/footer"
import Summary from "../component/summary"
import Head from "next/head"

export default class extends Component {
    render() {
        return (
            <>
                <NextSeo
                    title="Ahmed Saheed Tools"
                    description="Some of Ahmed's Saheed daily tools"
                    canonical="https://saheed.codes/uses"
                    openGraph={{
                        url: "https://saheed.codes/uses",
                        title: "Ahmed Saheed Tools",
                        description: "Some of Ahmed's Saheed daily tools",
                    }}
                />
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <title>Tools 🛠️ | Ahmed Saheed</title>
                    <link href="../styles/hovers.css" rel="stylesheet" />

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
                                <a class="text false" href="/books">
                                    books
                                </a>
                                <a class="text false" href="/fun">
                                fun
                                </a>
                                <a class="text" href="/projects">
                                    projects
                                </a>
                                <a class="text false" href="/TIL">
                                    til
                                </a>
                                <a class="here false" href="#">
                                    tools
                                </a>
                            </div>
                        </div>
                    </nav>
                    <Summary
                        title=" Tools 🛠️"
                        content={
                            <>
                                Indeed, the woes of Software Engineering are not due to lack of
                                tools, or proper management, but largely due to lack of sufficient
                                technical competence.
                            </>
                        }
                    />
                    <br />
                    <br />{" "}
                    <article class="prose mx-auto max-w-3xl pb-10 px-10">
                        <section>
                            <h2 class="text-4xl font-am px-10">Editor & Terminal</h2>
                            <br />
                            <ul>
                                <li>
                                    I have this box which contains almost everything i use, its{" "}
                                    <a
                                        class="text"
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                        href="https://www.jetbrains.com/toolbox-app/"
                                    >
                                        JetBrains Toolbox
                                    </a>
                                    .
                                </li>
                                <li>
                                    I use the{" "}
                                    <a
                                        class="text iframe-link"
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                        href="https://draculatheme.com"
                                    >
                                        Dracula theme{" "}
                                        <iframe
                                            src="https://draculatheme.com"
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                height: "600px",
                                                border: "0px none",
                                            }}
                                        ></iframe>{" "}
                                    </a>{" "}
                                    on all my editors.
                                </li>
                                <li>
                                    I'm mainly use{" "}
                                    <a
                                        class="text iframe-link"
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                        href="https://iterm2.com/"
                                    >
                                        iTerm2{" "}
                                        <iframe
                                            src="https://iterm2.com/"
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                height: "600px",
                                                border: "0px none",
                                            }}
                                        ></iframe>
                                    </a>{" "}
                                    as my terminal.
                                </li>
                                <li>
                                    I use the{" "}
                                    <a
                                        class="text iframe-link"
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                        href="https://yoncetheme.com/"
                                    >
                                        Yonce theme
                                        <iframe
                                            src="https://yoncetheme.com/"
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                height: "600px",
                                                border: "0px none",
                                            }}
                                        ></iframe>
                                    </a>{" "}
                                    for my terminal.
                                </li>
                                <li>
                                    Lastly{" "}
                                    <a
                                        class="text"
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                        href="https://code.visualstudio.com/"
                                    >
                                        VS Code
                                    </a>{" "}
                                    for my anything coding related.
                                </li>
                            </ul>
                        </section>
                    </article>
                    <br />
                    <Footer />
                </body>
            </>
        )
    }
}
