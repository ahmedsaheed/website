import React from "react"
import DiarySession from "./EntriesComponent"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import Dropdown from "../../component/dropDownAnimation"
import { format } from "date-fns"
import Loader from "../../component/loader"

const MainDiary = (props: any) => {
    if (!props) {
        return <Loader />
    }
    return (
        <div className="pads">
            {props &&
                //@ts-ignore
                props.entry?.map((entries, i) => {
                    return (
                        <>
                            {" "}
                            <header className="mx-auto max-w-3xl ">
                                <div
                                    style={{ backgroundColor: "#292a2c" }}
                                    className=" til page-summary"
                                >
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
