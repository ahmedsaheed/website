import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Summary from "../../component/summary"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import Head from "next/head"
import Layout from "../../component/layout"

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

- Use ⌘ + d to toggle within themes.

- You can search for things in the garden just by typing ⌘ + k


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
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>Second Brain | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>

            <Summary
                title="Digital Garden"
                content={
                    <>
                        Throughout the world there are many different gardens that people have
                        designed. In a Japanese garden, every tree is perfectly pruned, without a
                        leaf out of place. Nothing is planted without forethought as to the exact
                        place appropriate to it.There are English gardens that are famous for their
                        roses and perfect lines of shrubbery. The number of garden types are too
                        numerous to mention. One thing is true of all gardens. It is joint creation
                        between man's intention to create a space of tranquility and nature's
                        ability to comply. WELCOME TO MY GARDEN.
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
        </>
    )
}

export default Layout(secondBrain)
