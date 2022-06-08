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
---

title: 🪴 Quartz 3.2

---

Host your second brain and [digital garden](https://jzhao.xyz/posts/networked-thought) for free. Quartz features

1. Extremely fast full-text search by pressing 

2. Customizable and hackable design based on Hugo

3. Automatically generated backlinks, link previews, and local graph

4. Built-in [[notes/CJK + Latex Support (测试) | CJK + Latex Support]]

5. Support for both Markdown Links and Wikilinks

## Get Started

> 📚 [Setup your own digital garden using Quartz](notes/setup.md)

Not convinced yet? Look at some [community digital gardens](notes/showcase.md) built with Quartz, or read about [why I made Quartz](notes/philosophy.md) to begin with.

## Content Lists

If you prefer browsing the contents of this site through a list instead of a graph, you can find content lists here too:

- [All Notes](/notes)

- [Setup-related Notes](/tags/setup)

## Troubleshooting

- 🚧 [Troubleshooting and FAQ](notes/troubleshooting.md)

- 🐛 [Submit an Issue](https://github.com/jackyzha0/quartz/issues)

- 👀 [Discord Community](https://discord.gg/cRFFHYye7t)[]()`
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
                    <title>2nd Brain | Ahmed Saheed</title>
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
                                <a class="here false" href="#">
                                    me
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
                                In science fiction which was published around the 1920s, "It is
                                always expected that future human beings would have enormous heads
                                because they would have very big brains and they would be very wise.
                                It didn't work that ways, what happened is the human race is
                                building a brain outside its body. That is to say an interlocking
                                electronic network of telephonic, television, radionic communication
                                which is rapidly intelocked with computers, so that you will within
                                a few years be able to plug your brain into a computer".
                            </>
                        }
                    />
                    <br />
                    <br />
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
                </body>
                <Footer />
            </>
        )
    }
}
