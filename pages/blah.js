import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Footer from "../component/footer"
import Summary from "../component/summary"

export default class extends Component {
    render() {
        return (
            <>
                <NextSeo
                    title="Backyard"
                    description="Vestibule to Ahmed Saheed's brain datasets"
                    canonical="https://saheed.codes/blog"
                    openGraph={{
                        url: "https://saheed.codes/blog",
                        title: "Ahmed Saheed",
                        description: "Vestibule to Ahmed Saheed brain datasets",
                    }}
                />
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <title>Backyard 🌼 | Ahmed Saheed </title>
                    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                </head>

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
                                <a class="text false" href="/books">
                                    books
                                </a>
                                <a class="text false" href="/fun">
                                    algos
                                </a>
                                <a class="text text-am-green-light" href="/projects">
                                    projects
                                </a>
                                <a class="text false" href="/TIL">
                                    til
                                </a>
                                <a class="text false" href="/uses">
                                    tools
                                </a>
                                <a class="text false" href="/me">
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
                        title="Backyard 🌼"
                        content={
                            <>
                                Throughout the world there are many different gardens that people
                                have designed. In a Japanese garden, every tree is perfectly pruned,
                                without a leaf out of place. Nothing is planted without forethought
                                as to the exact place appropriate to it.There are English gardens
                                that are famous for their roses and perfect lines of shrubbery. The
                                number of garden types are too numerous to mention. One thing is
                                true of all gardens. It is joint creation between man's intention to
                                create a space of tranquility and nature's ability to comply. 💭🍄
                                WELCOME TO MY GARDEN 🪵🧺
                            </>
                        }
                    />
                    <main class="m-10 px-10 space-y-20">
                        <section class="grid grid-cols-1 md:grid-cols-2 md:gap-28 xl:gap-56 space-y-28 md:space-y-0">
                            <div class="col-span-1 space-y-10">
                                <div class="flex justify-between items-center">
                                    <h2 class="text-4xl font-am">Projects</h2>
                                    <div class="text arrow-link flex items-center space-x-1">
                                        <a class="text-sm" href="/projects">
                                            <span>all projects</span>
                                        </a>
                                        <div class="arrow transition-all duration-300">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-10">
                                    <a class="content-card block" href="/projects/war-room">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                Donation Hub
                                            </div>
                                            <div class="text-xs">Completed</div>
                                        </div>
                                        <div class="text-sm">
                                            An App which habours many donation bodies
                                        </div>
                                    </a>
                                    <a class="content-card block" href="/projects/poke">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                Boomerang
                                            </div>
                                            <div class="text-xs">Completed</div>
                                        </div>
                                        <div class="text-sm">Child care webapp</div>
                                    </a>
                                    <a class="content-card block" href="/projects/stx-me">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                This Garden
                                            </div>
                                            <div class="text-xs">In Progress</div>
                                        </div>
                                        <div class="text-sm">Retouch on my personal webpage</div>
                                    </a>
                                    <a class="content-card block" href="/projects/gme">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                Naija Jobs
                                            </div>
                                            <div class="text-xs">In Progress</div>
                                        </div>
                                        <div class="text-sm">
                                            Flutter app to help Nigerians find jobs
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-span-1 space-y-10">
                                <div class="flex justify-between items-center">
                                    <h2 class="text-4xl font-am">Books</h2>
                                    <div class="text arrow-link flex items-center space-x-1">
                                        <a class="text-sm" href="/books">
                                            <span>Library</span>
                                        </a>
                                        <div class="arrow transition-all duration-300">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-10">
                                    <a class="content-card block" href="/books">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                Man Search For Meaning
                                            </div>
                                            <div class="text-xs">Viktor Frankl</div>
                                        </div>
                                        <div class="text-sm">
                                            An enduring work of survival literature
                                        </div>
                                    </a>
                                    <a class="content-card block" href="/books">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                Normal People
                                            </div>
                                            <div class="text-xs">Sally Roony</div>
                                        </div>
                                        <div class="text-sm">Subtle</div>
                                    </a>
                                    <a class="content-card block" href="/books">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                The Death Of Ivan Ilyich & Other stories
                                            </div>
                                            <div class="text-xs">Leo Tolstoy</div>
                                        </div>
                                        <div class="text-sm">
                                            There was no death instead there was light.
                                        </div>
                                    </a>
                                    <a class="content-card block" href="/books">
                                        <div class="flex justify-between items-center">
                                            <div class="text text-lg font-medium mb-1 font-am">
                                                MK Gandhi An AutoBiography
                                            </div>
                                            <div class="text-xs">MK Gandhi</div>
                                        </div>
                                        <div class="text-sm">Absolute teaching of non-violence</div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </body>
            </>
        )
    }
}
