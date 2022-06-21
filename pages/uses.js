import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Footer from "../component/footer"
import Summary from "../component/summary"
import Head from "next/head"
import Layout from "../component/layout"

function uses() {
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
            <Summary
                title=" Tools 🛠️"
                content={
                    <>
                        Indeed, the woes of Software Engineering are not due to lack of tools, or
                        proper management, but largely due to lack of sufficient technical
                        competence.
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
        </>
    )
}

export default Layout(uses)
