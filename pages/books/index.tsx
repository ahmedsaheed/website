import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Summary from "../../component/summary"
import Head from "next/head"
import Layout from "../../component/layout"
import Books from "./Api"


function books() {
    return (
        <>
            {" "}
            <NextSeo
                title="Ahmed Saheed's Libary"
                description="Ahmed Saheed's Digital Library"
                canonical="https://saheed.codes/books"
                openGraph={{
                    url: "https://saheed.codes/books",
                    title: "Ahmed Saheed Books",
                    description: "Ahmed Saheed's Digital Library",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                <title>Books | Ahmed Saheed</title>
            </Head>
            <Summary
                title="Books"
                content={
                    <>
                        In science fiction which was published around the 1920s, "It is always
                        expected that future human beings would have enormous heads because they
                        would have very big brains and they would be very wise. It didn't work that
                        ways, what happened is the human race is building a brain outside its body.
                        That is to say an interlocking electronic network of telephonic, television,
                        radionic communication which is rapidly intelocked with computers, so that
                        you will within a few years be able to plug your brain into a computer".{" "}
                       These are all the books i've currently read, this list is updated
                        dynamically whenever I complete a new book. A list of my read essays can be found on <a target="_blank" href="https://curius.app/ahmed-saheed">Curius 
                            </a>{" "} <svg   style={{ display: "inline" }} width="16" height="16" viewBox="0 0 126 123" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25.2" y="22.05" width="100.8" height="100.8" rx="20" fill="#FEE533"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M80.8 8H20C13.3726 8 8 13.3726 8 20V80.8C8 87.4274 13.3726 92.8 20 92.8H80.8C87.4274 92.8 92.8 87.4274 92.8 80.8V20C92.8 13.3726 87.4274 8 80.8 8ZM20 0C8.95431 0 0 8.9543 0 20V80.8C0 91.8457 8.9543 100.8 20 100.8H80.8C91.8457 100.8 100.8 91.8457 100.8 80.8V20C100.8 8.95431 91.8457 0 80.8 0H20Z" fill="black"></path></svg>
                    </>
                }
            />
            <br />
           
             <Books />
           

            <br />
        </>
    )
}
export default Layout(books)
