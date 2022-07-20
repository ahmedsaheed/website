import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Summary from "../component/summary"
import Head from "next/head"
import Layout from "../component/layout"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"

const markdown = `

Here is a collection of notable projects that I've worked on and or currently tinkering. Some turned out successfully, while others *meh*.

## Qurancli -- 📖 quranCLI is simple tool to Read, Search and Recite the Quran from your terminal.
[GitHub](https://github.com/ahmedsaheed/quranCLI), [Documentation](https://github.com/ahmedsaheed/quranCLI/blob/main/README.md)

A minimal CLI application to read the Quran from the command line.
I created this project as an exercise to implement and learn about command line applications development and multiple platform application packagers like homebrew and scoop.

Built with: Java, [Picocli](https://picocli.info/), [AsciiTable](http://www.vandermeer.de/projects/skb/java/asciitable/), Ruby and [JReleaser](https://jreleaser.org/)


## Donation Hub -- A bay which harbours a bunch of donation bodies.

[GitHub](https://github.com/ahmedsaheed/Donation-Hub), [Demo](https://user-images.githubusercontent.com/87912847/160955953-a64c48c1-d718-4c77-835d-861720846bd8.mov)

A smartphone application that lowers the language barrier which would allow users from different cultural and linguistic background understand and identify the clear outcome of the [sustainable developmental goals of UN](https://sdgs.un.org/) and also make a difference by donating to 30+ donation bodies via the same platform.
This project was my first introduction to mobile development.

Built with: Flutter, Firebase.

## Boomerang -- A school project to solidify understanding of PHP and MySQL.

[GitHub](https://github.com/ahmedsaheed/boomerang)

A web application based on php and mysql which was used to rate student understanding on php and mysql.
Learnt to use php dependencies manager like composer, the phpMyAdmin database management tool, regex, validation and sanitization.

## Second Brain -- A place where i store ideas interwovenly

[Site](https://www.saheed.codes/), [GitHub](https://github.com/ahmedsaheed/saheed.codes)

The second brain approach is quite different from the traditional method of organising ideas and thought. It is a method where ideas are interwovenly connected together by links rather than the use of structure of files and folders.

Built with: React, Obsidian, Javascript, Tailwind, Typescript, NextJS, Vercel


## Sassy Chatbot -- Reinventing Amazon Alexa with poor algorithm.
[GitHub](https://github.com/ahmedsaheed/sassy-chitchatBot)

A school project to demostrate understanding of speech recognition and natural language processing with focus on unit and integrated testing. This project was fun filled.
Developed entity recognition and natural language processing algorithms using java from scratch.
Made use of lovely libaries like Wit.ai and TTS. Also learnt to use the Amazon Alexa Skills Kit and IBM Watson.

Built with: Java, JSP, [WitAI](https://wit.ai/), Javascript, GoogleTTS, GoogleSTT.

## Libary Box -- A dynamic GitHub gist updater.

[GitHub](https://github.com/ahmedsaheed/Library-box)

Update a pinned github gist to contain latest reads & Current reading from Google Books for people without the GoodRead API key

Built with: JavaScript, Docker.

## Flight Stat 
[GitHub](https://github.com/ahmedsaheed/flightstat)

Very simple flutter application for flight checkup. Developed to solidify my understanding of flutter state management, http request and geolocation mapping.


Built with: Flutter, AviationStack API and Google Maps API

`

function projects() {
    return (
        <>
            <NextSeo
                title="Ahmed Saheed's Projects"
                description="Some of Ahmed Saheed's work, both good & ...."
                canonical="https://saheed.codes/projects"
                openGraph={{
                    url: "https://saheed.codes/projects",
                    title: "Ahmed Saheed's Projects",
                    description: "Some of Ahmed Saheed's work, both good & ....",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>Projects | Ahmed Saheed</title>
                <link href="../styles/hovers.css" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>

            <header className="vertical_dotted_line pads mx-auto max-w-3xl space-y-5">
                <h1 className="horizontal_dotted_line text-3xl font-bold">
                    Ahmed's Projects: A Curation of Personal Projects
                </h1>
                <ReactMarkdown
                    className="project"
                    children={markdown}
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                />
            </header>
        </>
    )
}

export default Layout(projects)
