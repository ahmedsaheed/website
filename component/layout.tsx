import React  from "react"
import Head from "next/head"
import { date } from "../pages/index"
import Theme from "./theme"
import { BiRss } from "react-icons/bi"
import Example from "./test"
import {useState} from 'react';

function Layout(PageComponent: any) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <>
                <Head>
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>

                <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
                    <nav className="nav mx-auto max-w-3xl space-y-5">
                        <div className="">
                            <a className="cd hover-underline-animation" href="/">
                                cd ..
                            </a>
                            <div className="Navspace"></div>
                        </div>
                      
                        <div className="right">
                        <Example/>
                            <a className="themeButton">
                                <Theme />
                            </a>
                        </div>
                    </nav>
                    <main className="mt-12">
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
