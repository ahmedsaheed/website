import { React } from "react"

const Summary = ({ title, content }) => {
    return (
        <header class="mx-auto max-w-3xl space-y-5">
            <h1 class="text-3xl font-am px-10" style={{ fontfamily: "ui-serif" }}>
                {title}
            </h1>
            <div
                class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full"
                data-theme="business"
            >
                <p
                    class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
                >
                    {content}
                </p>
            </div>
        </header>
    )
}

export default Summary
