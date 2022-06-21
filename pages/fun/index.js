import React, { Component } from "react"
import { NextSeo } from "next-seo"
import { useState, useRef, useEffect } from "react"
import autoAnimate from "@formkit/auto-animate"
import Footer from "../../component/footer"
import Summary from "../../component/summary"
import Head from "next/head"
import Layout from "../../component/layout"

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

function fun() {
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
                <title>Fun | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>
            <body>
                <Summary
                    title="Algorithms"
                    content={
                        <>
                            In science fiction which was published around the 1920s, "It is always
                            expected that future human beings would have enormous heads because they
                            would have very big brains and they would be very wise. It didn't work
                            that ways, what happened is the human race is building a brain outside
                            its body. That is to say an interlocking electronic network of
                            telephonic, television, radionic communication which is rapidly
                            intelocked with computers, so that you will within a few years be able
                            to plug your brain into a computer".
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
        </>
    )
}

export default Layout(fun)
