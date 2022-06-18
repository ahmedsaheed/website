import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Footer from "../../component/footer"
import Summary from "../../component/summary"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import Head from "next/head"

const markdown = `

##  Ahmed's Second Brain: Kinda A Personal Digital Garden 




This gardens focus not on being a definite source of truth, but rather a source which is constantly evolving as my own knowledge grows and changes

1. This garden was inspired by [Jacky Zhao](https://jzhao.xyz/) and [Anthony Morris](https://anthonymorris.dev/)

2. The notion of digital gardening is to subtly create reexplorable links within your ideas.


## Why keep a second brain isn't one enough?

>  [I would like you to see this as further reading](https://jzhao.xyz/posts/networked-thought/)

Obviously, one brain is not enough! My ideas are like winds, I feel them, sometimes grasp them, and sometime it just blows away.
Man way reasoning and thinking are very difficult to understand, mine happens very disorderly and in a non linear manner which totally
contradict the ways in which ideas and thought are organise in modern times (linearly). 
The digital garden or second brain, approach is quite different from the traditional method of organising ideas and thought. It is a method where ideas are interwovenly connected together by links rather than the use of structure of files and folders.
## Do you want to keep a second brain?

I really urge you to keep a second brain as one isn't enough, and it's fun to nurture it and watch its growth. If you want to there are a few ways to do it below.
- [Quartz 3.2](https://quartz.jzhao.xyz/)

- [Obsidian](https://obsidian.md/)

## Some routes around the garden

- [Stuff i've worked on and some i'm still tinkering](/projects)

- [Do you like books? Checkout my library ](/books)

- [See what i learnt today](/TIL)

- [All of my  garden seeds can be found here](/second-brain/entries)

- Use ⌘ + k to toggle within themes.

- You can search for things in the garden just by typing ⌘ + k


`
export default class extends Component {
    render() {
        return (
            <>
                <NextSeo
                    title="Ahmed Saheed's TIL"
                    description="Ahmed Saheed's second brain'"
                    canonical="https://saheed.codes/second-brain"
                    openGraph={{
                        url: "https://saheed.codes/second-brain",
                        title: "Ahmed Saheed's second brain",
                        description: "A place to document things i find interesting",
                    }}
                />
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <title>Second Brain | Ahmed Saheed</title>
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
                                <a class="here false" href="#">
                                    garden
                                </a>
                                <a class="false" href="/books">
                                    books
                                </a>
                                <a class="false" href="/fun">
                                    algos
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

                                <a class="text false" href="/rss/feed.xml">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-rss"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <Summary
                        title="Digital Garden"
                        content={
                            <>
                                Throughout the world there are many different gardens that people
                                have designed. In a Japanese garden, every tree is perfectly pruned,
                                without a leaf out of place. Nothing is planted without forethought
                                as to the exact place appropriate to it.There are English gardens
                                that are famous for their roses and perfect lines of shrubbery. The
                                number of garden types are too numerous to mention. One thing is
                                true of all gardens. It is joint creation between man's intention to
                                create a space of tranquility and nature's ability to comply.
                                WELCOME TO MY GARDEN.
                            </>
                        }
                    />
                    <br />
                    <br />

                    <header class="pads mx-auto max-w-3xl space-y-5">
                        <ReactMarkdown
                            children={markdown}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex]}
                        />
                    </header>

                    <br />
                    <br />
                    <br />
                    <br />
                    <Footer />
                </body>
            </>
        )
    }
}
