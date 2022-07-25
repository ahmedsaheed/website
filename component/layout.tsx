import React from "react"
import Head from "next/head"
import { date } from "../pages/index"
import Theme from "./theme"
import { BiRss } from "react-icons/bi"
import SearchBar from "./search"
function Layout(PageComponent: any) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <>
                <Head>
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>

                <div className="">
                    <nav className="nav mx-auto max-w-3xl space-y-5">
                        <div className="">
                            <a className="cd hover-underline-animation" href="/">
                                cd ..
                            </a>
                        </div>
                        <div className="right">
                            <a className="hover-underline-animation" href="/second-brain">
                                garden
                            </a>
                            <a className="hover-underline-animation" href="/books">
                                books
                            </a>
                            <a className="hover-underline-animation" href="/fun">
                                fun
                            </a>
                            <a className="hover-underline-animation" href="/projects">
                                projects
                            </a>
                            <a className="hover-underline-animation" href="/TIL">
                                til
                            </a>
                            <a className="" href="/rss/feed.xml" target="_blank">
                                <BiRss />
                            </a>
                            <a className="">
                                <Theme />
                            </a>
                        </div>
                    </nav>
                    <main>
                        <PageComponent {...pageProps} />
                    </main>
                    <div className="pt-10 grey-text cent ">
                        <span className=" text-sm">
                            <a
                                target="_blank"
                                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                style={{ color: "inherit", borderBottom: "1px dotted" }}
                            >
                                CC BY-NC-SA 4.0
                            </a>{" "}
                            2021-{date.getFullYear()} © Ahmed Saheed
                        </span>
                    </div>
                    <br/>
                </div>
            </>
        )
    }

    return PageComponentWithLayout
}

export default Layout
