import React from "react"
import { NextSeo } from "next-seo"
import { currentDayName } from "../component/date"
import { greeting } from "../component/greetings"
import Head from "next/head"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import Location from "../component/getLocation"
import Theme from "../component/theme"

const date = new Date()
const markdown = `
- [Second Brain](/second-brain)
- [Today i learnt](/TIL)
- [Projects ](/projects)
- [Books](/books)
- [Uses](/uses)
- [Feed](/rss/feed.xml)

`
export default function Home() {
    return (
        <>
            <NextSeo
                title="Ahmed Saheed"
                description="Vestibule to my brain datasets"
                canonical="https://saheed.codes/"
                openGraph={{
                    url: "https://saheed.codes/",
                    title: "Ahmed Saheed",
                    description: "Vestibule to my brain datasets",
                }}
            />
            <Head>
                <title class>Ahmed Saheed</title>
                <link rel="stylesheet" href="./style.css" />
                <link rel="icon" type="image/png" href="/icon.png" />
            </Head>
            <body>
                <div className="spacer mx-auto max-w-3xl space-y-5">
                    <div class="mx-auto max-w-2xl">
                        <br></br>
                        <h2 class="name third text-stone-100 font-hammersmith mb-4">
                            Ahmed Saheed
                            <a className="moveRight">
                                <Theme />
                            </a>{" "}
                        </h2>
                        <p class="text-stone-500">
                            {greeting() + "\n Hope you're having a great " + currentDayName()}
                        </p>
                    </div>

                    <article>
                        <p class="second">
                            I assert you're a sailor of the web. You've come all the way from{" "}
                            <Location /> a very lovely place, you must be tired from your journey ?
                            By the way, welcome to my digital garden.
                        </p>
                        <p className="third">
                            You finally made it to my space on the web. I’m Ahmed! I spend a lot of
                            time building and tinkering with things I find lovely.
                        </p>
                        <p className="third">
                            This vestibule door opens onto my so fine and maybe unfine datasets of
                            my brain. More like a library where i store valuable peice of computer
                            related information. Currently, i am engaged in{" "}
                            <a target="_blank" href="https://griffith.ie">
                                college
                            </a>{" "}
                            activities while doing some side projects and contributing to open
                            source. Also i am having a great time being lost in{" "}
                            <a href="/second-brain/tolstoy">Tolstoy's</a> Literature alongside
                            puzzling human existence. Please feel free and navigate around, you're
                            highly welcomed.
                        </p>

                        <p className="third">
                            Find me on{" "}
                            <a target="_blank" href="https://github.com/ahmedsaheed">
                                GitHub
                            </a>{" "}
                            and{" "}
                            <a target="_blank" href="https://twitter.com/helloahmed_">
                                Twitter
                            </a>
                            .
                        </p>

                        <h2 class="third text-stone-100 font-hammersmith mb-4">
                            Routes around the garden
                        </h2>

                        <ReactMarkdown
                            className="third grey-text"
                            children={markdown}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex]}
                        />

                        <br></br>
                        <div class="third grey-text mt-10 mb-6 prose m-auto opacity-50 flex">
                            <span class="text-sm">
                                <a
                                    target="_blank"
                                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                    style={{ color: "inherit", borderBottom: "1px dotted" }}
                                >
                                    CC BY-NC-SA 4.0
                                </a>{" "}
                                2021-{date.getFullYear()} © Ahmed Saheed
                            </span>
                        </div>
                    </article>
                </div>
            </body>
        </>
    )
}
