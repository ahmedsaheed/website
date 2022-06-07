import React, { Component } from "react"
import DiarySession from "./EntriesComponent"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import Dropdown from "../../component/dropDownAnimation"

const MainDiary = (props) => {
    if (!props) {
        return null
    }
    return (
        <div>
            {props &&
                props.entry?.map((entries, i) => {
                    return (
                        <>
                            {" "}
                            <header class="mx-auto max-w-3xl space-y-5">
                                <div class="til page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 ">
                                    <Dropdown
                                        title={
                                            <ReactMarkdown
                                                children={
                                                    entries.created_at?.substring(0, 10) +
                                                    " " +
                                                    entries.body.substring(0, 30) +
                                                    "...."
                                                }
                                                remarkPlugins={[remarkMath, remarkGfm]}
                                                rehypePlugins={[rehypeKatex]}
                                            />
                                        }
                                        content={
                                            <DiarySession
                                                key={i}
                                                title={entries.created_at}
                                                content={entries.body}
                                                Date={entries.created_at}
                                            />
                                        }
                                    />
                                </div>
                            </header>
                            <br />
                        </>
                    )
                })}
        </div>
    )
}

export default MainDiary
