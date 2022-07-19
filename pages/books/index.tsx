import React, { Component } from "react"
import Book from "./api"
import { NextSeo } from "next-seo"
import Summary from "../../component/summary"
import Head from "next/head"
import Layout from "../../component/layout"

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
                <title>Books 📚 | Ahmed Saheed</title>
            </Head>
            <Summary
                title="Books 📚"
                content={
                    <>
                        In science fiction which was published around the 1920s, "It is always
                        expected that future human beings would have enormous heads because they
                        would have very big brains and they would be very wise. It didn't work that
                        ways, what happened is the human race is building a brain outside its body.
                        That is to say an interlocking electronic network of telephonic, television,
                        radionic communication which is rapidly intelocked with computers, so that
                        you will within a few years be able to plug your brain into a computer".{" "}
                        <br /> These are all the books i've currently read, this list is updated
                        dynamically whenever I complete a new book. Kinda my virtual shelf...
                    </>
                }
            />
            <br />
            <Book />
            <br />
        </>
    )
}
export default Layout(books)
