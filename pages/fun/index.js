import React, { Component } from "react"
import { NextSeo } from "next-seo"
import { useState, useRef, useEffect } from "react"
import autoAnimate from "@formkit/auto-animate"
import Footer from "../../component/footer"
import Summary from "../../component/summary"

const Dropdown = ({ title, content }) => {
    const [show, setShow] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = () => setShow(!show)

    return (
        <div ref={parent}>
            <p className="pad dropdown-label" onClick={reveal}>
                {title}
            </p>
            {show && (
                <center>
                    <iframe
                        className=" fun dropdown-content"
                        width="90%"
                        height="992"
                        frameborder="0"
                        style={{ backgroundColor: "white" }}
                        src={content}
                    ></iframe>
                </center>
            )}
        </div>
    )
}

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
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <title>Moi 👨🏾‍🦲 | Ahmed Saheed</title>
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
                                <a class="false" href="/books">
                                    books
                                </a>
                                <a class=" here false" href="#">
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
                                <a class="false" href="/me">
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
                        title="Algorithms"
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
                    <header class="mx-auto max-w-3xl space-y-5">
                        <div class="til page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 ">
                            <Dropdown
                                title="1. Bubble Sort"
                                content="https://observablehq.com/embed/f4b54f268f34af5a?cells=viewof+codeblock%2Cintro%2Cdataset%2Cviewof+size%2Cviewof+b"
                            />
                        </div>
                    </header>
                    <br />
                    <header class="mx-auto max-w-3xl space-y-5">
                        <div class="til page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 ">
                            <Dropdown
                                title="2. Selection Sort"
                                content="https://observablehq.com/embed/4423f3941d92eb5d?cells=intro%2Ccode%2Clastly%2Cgraph%2Cviewof+conf%2Cviewof+reset"
                            />
                        </div>
                    </header>
                    <br />
                    <header class="mx-auto max-w-3xl space-y-5">
                        <div class="til page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 ">
                            <Dropdown
                                title="3. Insertion Sort"
                                content="https://observablehq.com/embed/2ba0d61c2112721f?cells=code%2Cintro%2Csub%2Cvisual%2Cviewof+size"
                            />
                        </div>
                    </header>
                    <br />
                    <header class="mx-auto max-w-3xl space-y-5">
                        <div class="til page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 ">
                            <Dropdown
                                title="4. Merge Sort"
                                content="https://observablehq.com/embed/9cfad59162ff2265?cells=code%2Cintro%2Csub%2Cvisual%2Cviewof+s%2Cviewof+b"
                            />
                        </div>
                    </header>
                    <br />
                </body>
                <Footer />
            </>
        )
    }
}
