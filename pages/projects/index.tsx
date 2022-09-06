import React from "react"
import { NextSeo } from "next-seo"
import Summary from "../../component/summary"
import Head from "next/head"
import Layout from "../../component/layout"
import "katex/dist/katex.min.css"
import ReactMarkdown from "react-markdown"

const markdown = ` 

![](/7.jpeg)

[**Leaflet**](/second-brain/leaflet) A minimal distractionless markdown editor designed to quickly navigate between multiple .md files in a directory. It features a clean mathematical typesetting, chemical equation rendering, code blocks highlighting, writing statistics and a speed-reader

`
const markdown2 = ` 
![](/1.jpeg)

[**Algo-AI**](https://algo.saheed.codes/) a web application that uses gpt3 code generation to generate algorithms from plain english.

`

const markdown3 = `
![](/6.jpeg)

[**QuranCLI**](https://github.com/ahmedsaheed/quranCLI) A minimal CLI application to read the Quran from the command line.
I created this project as an exercise to implement and learn about command line applications development and multiple platform application packagers like homebrew and scoop.

`

const markdown4 = `

![](/2.jpeg)

[**Atlas**](https://github.com/ahmedsaheed/sassy-chitchatBot) A school project to demostrate understanding of speech recognition and natural language processing with focus on unit and integrated testing. This project wasn't short of fun.
Developed entity recognition and natural language processing algorithms using java from scratch.
Made use of lovely libaries like Wit.ai and TTS. Also learnt to use the Amazon Alexa Skills Kit and IBM Watson.

`
const markdown5 = `
![](/3.jpeg)

[**Donation Hub**](https://github.com/ahmedsaheed/Donation-Hub) A smartphone application that lowers the language barrier which would allow users from different cultural and linguistic background understand and identify the clear outcome of the [sustainable developmental goals of UN](https://sdgs.un.org/) and also make a difference by donating to 30+ donation bodies via the same platform.
This project was my first introduction to mobile development.

`
const markdown6 = `
![](/4.jpeg)

[**Boomarang**]((https://github.com/ahmedsaheed/boomarang)) A web application based on php and mysql which was used to rate student understanding on php and mysql.
Learnt to use php dependencies manager like composer, the phpMyAdmin database management tool, regex, validation and sanitization.

`

const markdown7 = `
![](/5.jpeg)

[**Second Brain**](https://www.saheed.codes/) The second brain approach is quite different from the traditional method of organising ideas and thought. It is a method where ideas are interwovenly connected together by links rather than the use of structure of files and folders.

`

function projects() {
    return (
        <>
            <NextSeo
                title="Ahmed Saheed's Projects"
                description="Some of Ahmed Saheed's works."
                canonical="https://saheed.codes/projects"
                openGraph={{
                    url: "https://saheed.codes/projects",
                    title: "Ahmed Saheed's Projects",
                    description: "Some of Ahmed Saheed's works.",
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

            <header className=" mx-auto max-w-3xl space-y-5">
                <Summary
                    title=""
                    content={
                        <>
                            I am persuaded that normal human beings are biologically built for an
                            activity that is aimed towards a goal and that idleness, or aimless work
                            gives rise to suffering and to entropy. Here's a curation of projects
                            i've worked on.
                        </>
                    }
                />
                <div className="mx-auto">
                <ReactMarkdown className=" projects pads" children={markdown} />     
                <div className="ruler"></div>
                <ReactMarkdown className="projects pads" children={markdown2} />
                <div className="ruler"></div>
                <ReactMarkdown className="projects pads" children={markdown3} />
                <div className="ruler"></div>
                <ReactMarkdown className="projects pads" children={markdown4} />
                <div className="ruler"></div>
                <ReactMarkdown className="projects pads" children={markdown5} />
                <div className="ruler"></div>
                <ReactMarkdown className="projects pads" children={markdown6} />
                <div className="ruler"></div>
                <ReactMarkdown className="projects pads" children={markdown7} />



                </div>
            </header>
        </>
    )
}

export default Layout(projects, "Projects")
