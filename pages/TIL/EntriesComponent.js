import React, { Component } from "react"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import { format } from "date-fns"

const BookCard = (props) => {
    var dates = props.Date
    var date = dates?.substring(0, 10)
    return (
        <>
            {" "}
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Yomogi&display=swap"
                    rel="stylesheet"
                />
            </head>
            <div class="content__inner" id="tab-1">
                <div class="page">
                    <p>DATE: {format(new Date(date), "MMM do, y")}</p>
                    <br />

                    <ReactMarkdown
                        children={props.content}
                        remarkPlugins={[remarkMath, remarkGfm]}
                        rehypePlugins={[rehypeKatex]}
                    />
                </div>
            </div>
            <br />
        </>
    )
}

export default BookCard
