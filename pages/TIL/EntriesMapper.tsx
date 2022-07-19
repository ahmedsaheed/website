import React, { Component } from "react"
import DiarySession from "./EntriesComponent"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import Dropdown from "../../component/dropDownAnimation"
import { format } from "date-fns"

const MainDiary = (props: any) => {
    if (!props) {
        return null
    }
    return (
        <div>
            {props &&
                //@ts-ignore
                props.entry?.map((entries, i) => {
                    return (
                        <>
                            {" "}
                            <header className="mx-auto max-w-3xl space-y-5">
                                <div className="til page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 ">
                                    <Dropdown
                                        date={format(new Date(entries.created_at), "MMM do, y")}
                                        title={
                                            <ReactMarkdown
                                                children={entries.body.substring(0, 40) + "...."}
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
