import React, { Component } from "react"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"

const BookCard = (props: any) => {
    var dates = props.Date
    var date = dates?.substring(0, 10)
    return (
        <>
            
            <div className="content__inner" id="tab-1">
                <div className="page">
                    <p>DATE: {date}</p>
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
