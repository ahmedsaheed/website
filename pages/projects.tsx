import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Summary from "../component/summary"
import Head from "next/head"
import Layout from "../component/layout"
import "katex/dist/katex.min.css"

const markdown = `

Here is a collection of notable projects that I've worked on and or currently tinkering.


## Qurancli -- 📖 quranCLI is simple tool to Read, Search and Recite the Quran from your terminal.
![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/quranCLI)   ![alt text](https://api.iconify.design/et:documents.svg?color=%23888888) [Documentation](https://github.com/ahmedsaheed/quranCLI/blob/main/README.md)

A minimal CLI application to read the Quran from the command line.
I created this project as an exercise to implement and learn about command line applications development and multiple platform application packagers like homebrew and scoop.

Built with: ![](https://api.iconify.design/mdi:language-java.svg?color=%23888888) Java  ![](https://api.iconify.design/mdi:language-ruby.svg?color=%23888888)Ruby, [Picocli](https://picocli.info/), [AsciiTable](http://www.vandermeer.de/projects/skb/java/asciitable/) and [JReleaser](https://jreleaser.org/)

---

## Sassy Chatbot -- Reinventing Amazon Alexa with poor algorithm.

![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/sassy-chitchatBot)  ![alt text](https://api.iconify.design/et:documents.svg?color=%23888888) [Documentation](https://github.com/ahmedsaheed/sassy-chitchatBot/blob/main/README.md)

A school project to demostrate understanding of speech recognition and natural language processing with focus on unit and integrated testing. This project was fun filled.
Developed entity recognition and natural language processing algorithms using java from scratch.
Made use of lovely libaries like Wit.ai and TTS. Also learnt to use the Amazon Alexa Skills Kit and IBM Watson.

Built with: ![](https://api.iconify.design/mdi:language-java.svg?color=%23888888)Java ![](https://api.iconify.design/mdi:language-javascript.svg?color=%23888888)Javascript, ![](https://api.iconify.design/simple-icons:googlepodcasts.svg?color=%23888888)GoogleTTS, ![](https://api.iconify.design/simple-icons:googlepodcasts.svg?color=%23888888)GoogleSTT and [WitAI](https://wit.ai/).

---

## Second Brain -- A place where i store ideas interwovenly

![](https://api.iconify.design/iconoir:internet.svg?color=%23888888)[Site](https://www.saheed.codes/) ![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/saheed.codes)

The second brain approach is quite different from the traditional method of organising ideas and thought. It is a method where ideas are interwovenly connected together by links rather than the use of structure of files and folders.

Built with: ![](https://api.iconify.design/mdi:react.svg?color=%23888888)React ![](https://api.iconify.design/simple-icons:obsidian.svg?color=%23888888)Obsidian ![](https://api.iconify.design/mdi:tailwind.svg?color=%23888888)Tailwind ![](https://api.iconify.design/logos:nextjs.svg?color=%23888888)NextJS ![](https://api.iconify.design/ion:logo-vercel.svg?color=%23888888)Vercel

---

## Donation Hub -- A bay which harbours a bunch of donation bodies.

![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/Donation-Hub)  ![alt text](https://api.iconify.design/majesticons:presentation-play-line.svg?color=%23888888) [Demo](https://user-images.githubusercontent.com/87912847/160955953-a64c48c1-d718-4c77-835d-861720846bd8.mov)

A smartphone application that lowers the language barrier which would allow users from different cultural and linguistic background understand and identify the clear outcome of the [sustainable developmental goals of UN](https://sdgs.un.org/) and also make a difference by donating to 30+ donation bodies via the same platform.
This project was my first introduction to mobile development.

Built with: ![](https://api.iconify.design/material-symbols:flutter.svg?color=%23888888)Flutter ![](https://api.iconify.design/mdi:firebase.svg?color=%23888888) Firebase.

---

## Boomerang -- A school project to solidify understanding of PHP and MySQL.

![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/boomerang)

A web application based on php and mysql which was used to rate student understanding on php and mysql.
Learnt to use php dependencies manager like composer, the phpMyAdmin database management tool, regex, validation and sanitization.

Built with: ![](https://api.iconify.design/mdi:language-php.svg?color=%23888888)PHP ![](https://api.iconify.design/simple-icons:mysql.svg?color=%23888888) MySQL.

---


## Libary Box -- A dynamic GitHub gist updater.

![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/Library-box) ![alt text](https://api.iconify.design/et:documents.svg?color=%23888888) [Documentation](https://github.com/ahmedsaheed/Library-boxblob/main/README.md)

Update a pinned github gist to contain latest reads & Current reading from Google Books for people without the GoodRead API key

Built with: ![](https://api.iconify.design/mdi:language-javascript.svg?color=%23888888)JavaScript  ![](https://api.iconify.design/ion:logo-docker.svg?color=%23888888)Docker.

---
## Flight Stat -- Where's my flight?

![alt text](https://api.iconify.design/ph:code-fill.svg?color=%23888888)
[Code](https://github.com/ahmedsaheed/flightstat)  ![alt text](https://api.iconify.design/majesticons:presentation-play-line.svg?color=%23888888)[Demo](https://user-images.githubusercontent.com/87912847/178112007-cf80af94-efc3-429b-b4f6-43f8bc37e1f3.mov)

Very simple flutter application for flight checkup. Developed to solidify my understanding of flutter state management, http request and geolocation mapping.


Built with: ![](https://api.iconify.design/material-symbols:flutter.svg?color=%23888888)Flutter ![](https://api.iconify.design/mdi:google-maps.svg?color=%23888888)Google Maps and API AviationStack API

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
                    title="Projects"
                    content={
                        <>
                            I am persuaded that normal human beings are biologically built for an
                            activity that is aimed towards a goal and that idleness, or aimless work
                            gives rise to suffering and to entropy.
                            <br/>Here's a curation of projects i've worked on.
                        </>
                    }
                />

                <section className="px-10 bookpad">
                    <p className=" liner " style={{ fontSize: "14px" }}>
                        {" "}
                        Here are some tangible onces{" "}
                    </p>
                    <div className="space-y-8">
                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                QuranCLI
                            </h3>

                            <em className="font-fanwood italic ">live</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            A command line app to Read, Search and Recite the Quran from your
                            terminal.
                        </div>

                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                My Neovim!
                            </h3>

                            <em className="font-fanwood italic ">live</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            A Zen like neovim configuration
                        </div>

                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                My Second Brain
                            </h3>

                            <em className="font-fanwood italic ">live</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            A place where i store ideas in an interwoven manner.
                        </div>
                    </div>
                </section>
                <section className="px-10 bookpad">
                    <p className=" liner " style={{ fontSize: "14px" }}>
                        {" "}
                        It once meant alot{" "}
                    </p>
                    <div className="space-y-8">
                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                Donation Hub
                            </h3>

                            <em className="font-fanwood italic ">dead</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            A bay which harbours a bunch of donation bodies.
                        </div>

                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                Sassy Chatbot
                            </h3>

                            <em className="font-fanwood italic ">dead</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            Reinventing Amazon Alexa with poor algorithms.
                        </div>
                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                Boomerang
                            </h3>

                            <em className="font-fanwood italic ">dead</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            A daycare service where kids keep returining
                        </div>
                    </div>
                </section>
                <section className="px-10 bookpad">
                    <p className=" liner " style={{ fontSize: "14px" }}>
                        {" "}
                        Those quick hack due to boredom{" "}
                    </p>
                    <div className="space-y-8">
                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                Libary Box
                            </h3>

                            <em className="font-fanwood italic ">wip</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            Let them know whats on your shelf
                        </div>

                        <div className="flex justify-between items-center">
                            <h3
                                style={{ fontFamily: "14px" }}
                                className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300"
                            >
                                Flight Stat
                            </h3>

                            <em className="font-fanwood italic ">wip</em>
                        </div>

                        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
                            Where's my flight?
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Layout(projects)
