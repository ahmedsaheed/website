import  React  from "react"

const Summary = ({ title  , content }) => {
    return (
        <header className="mx-auto max-w-3xl space-y-5">
            <h1 className="text-3xl font-am px-10">
                {title}
            </h1>
            <div
                className="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full"
                data-theme="business"
            >
                <p
                    className="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
                >
                    {content}
                </p>
            </div>
        </header>
    )
}

export default Summary
