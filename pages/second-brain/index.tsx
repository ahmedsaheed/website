import React, { Component } from "react"
import { NextSeo } from "next-seo"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import Head from "next/head"
import Layout from "../../component/layout"

const markdown = `


This gardens focus not on being a definite source of truth, but rather a source which is constantly evolving as my own knowledge and ideas burgeons.


Throughout the world there are many different gardens that people have
designed. In a Japanese garden, every tree is perfectly pruned, without a
leaf out of place. Nothing is planted without forethought as to the exact
place appropriate to it. There are English gardens that are famous for their
roses and perfect lines of shrubbery. The number of garden types are too
numerous to mention. One thing is true of all gardens. It is joint creation
between man's intention to create a space of tranquility and nature's
ability to comply.


- This garden was inspired by [Aaron Swartz](http://www.aaronsw.com/) and [Jacky Zhao](https://jzhao.xyz/) 

- The notion of digital gardening is to subtly create reexplorable links within your ideas.


## Why keep a second brain isn't one enough?

In a digital garden there is joined personal experience and professional activities,
studies under way and studies planned. A second brain would enhance the process of gathering together what you are doing intellectually and what you are experiencing as a person.
Here you will not be afraid to use your experience and relate it directly to various work in progress.
By serving as a check on repetitious work. It also encourages you to capture ‘fringe-thoughts’: various ideas which may be byproducts of everyday life, snatches of conversation overheard in the street, or, for that matter, dreams. Once noted, these may lead to more systematic thinking, as well as lend intellectual relevance to more directed experience.

>  [I would like you to see this as further reading](http://www.aaronsw.com/weblog/about)

Obviously, one brain is not enough! 
Mode of reasoning and thinking are very difficult to understand, mine happens very disorderly and in a non linear manner which totally
contradict the ways in which ideas and thought are organise in modern times (linearly). 
The digital garden or second brain, approach is quite different from the traditional method of organising ideas and thought. It is a method where ideas are interwovenly connected together by links rather than the use of structure of files and folders.

> [All of my entries and thought](/second-brain/entries)


Please feel free and navigate around, you're highly welcomed.
`
function secondBrain() {
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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Second Brain | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>

            <header className=" pads mx-auto max-w-3xl space-y-5">
                <h1 className="horizontal_dotted_line text-3xl font-bold">
                    Ahmed's Second Brain: A Personal Digital Garden 🪴
                </h1>
                <ReactMarkdown
                    children={markdown}
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                />
            </header>
            <br></br>
        </>
    )
}

export default Layout(secondBrain)
