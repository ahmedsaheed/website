import React  from "react"
import Head from "next/head"
import { date } from "../pages/index"
import { BiRss } from "react-icons/bi"
import SearchArea from "./searchBar"
import {useState} from 'react';
import { greeting } from "./greetings"

function Layout(PageComponent: any, title: string) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <>
                <Head>
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>

                <div className="spacers py-32 mx-auto  px-6 md:px-0">
                    {
                        title != "Musings" ?
                        <nav className="nav mx-auto max-w-4xl space-y-5" style={{paddingBottom: "10px"}}>
                        <div className="">
                        <p className="name px-10" style={{fontSize: "24px"}}>{title}</p>  
                            <div className="Navspace"></div>
                        </div>
                      
                        <div className="right">
                        <SearchArea/>

                        </div>
                    </nav>
                    :
                    null
                    }
                    
                    <main className="mt-12">
                        <PageComponent {...pageProps} />
                    </main>
                    <div className="pt-10 grey-text cent ">
                        <span className=" text-sm">
                            {greeting()}<br/>
                            CC{" "}
                            <a
                                target="_blank"
                                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                style={{ color: "inherit", borderBottom: "1px dotted" }}
                            >
                                 BY-NC-SA 4.0
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
