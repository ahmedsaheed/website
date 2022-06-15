import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"
import Layout from "../../component/layout"
import Summary from "../../component/summary"
import Footer from "../../component/footer"
import { markdownToHtml } from "../../lib/mdToHtml"
import { getContentBySlug, getAllContent } from "../../lib/api"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"

import Head from "next/head"

export type BrainEntry = {
    slug: string
    content: string
    backlinks: string[]
}

function SecondBrain({ brainEntries }: { brainEntries: BrainEntry[] }) {
    return (
        <>
            <NextSeo
                title="Ahmed Saheed's TIL"
                description="Ahmed Saheed's second brain'"
                canonical="https://saheed.codes/second-brain"
                openGraph={{
                    url: "https://saheed.codes/second-brain",
                    title: "Ahmed Saheed's second brain",
                    description: "A place to document 'Today I Learnt'",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>Second Brain | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>
            <body>
                <Summary
                    title="Digital Garden Entries"
                    content={
                        <>
                            Throughout the world there are many different gardens that people have
                            designed. In a Japanese garden, every tree is perfectly pruned, without
                            a leaf out of place. Nothing is planted without forethought as to the
                            exact place appropriate to it.There are English gardens that are famous
                            for their roses and perfect lines of shrubbery. The number of garden
                            types are too numerous to mention. One thing is true of all gardens. It
                            is joint creation between man's intention to create a space of
                            tranquility and nature's ability to comply.WELCOME TO MY GARDEN
                 
                        </>
                    }
                />
                <br />
                <br />

                <header className="pads mx-auto max-w-3xl space-y-5">
                    <ul className="section-ul">
                        {brainEntries.map((brainEntry) => (
                            <li className="section-ul">
                                <Link
                                    key={brainEntry.slug}
                                    href="/second-brain/[slug]"
                                    as={`${brainEntry.slug.toLowerCase()}`}
                                >
                                    <a className="xx section">
                                        <>
                                            <div className="desc">
                                                <br />
                                                <a className="xx m-2">
                                                    {brainEntry.slug.charAt(0).toUpperCase() +
                                                        brainEntry.slug.slice(1)}
                                                </a>
                                                <br />
                                                <p className="reduce">
                                                    {
                                                        <ReactMarkdown
                                                            children={
                                                                brainEntry.content?.substring(
                                                                    0,
                                                                    100,
                                                                ) + "..."
                                                            }
                                                            remarkPlugins={[remarkMath, remarkGfm]}
                                                            rehypePlugins={[rehypeKatex]}
                                                        />
                                                    }
                                                </p>
                                            </div>
                                        </>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </header>

                <br />
                <br />
                <br />
                <br />
                <Footer />
            </body>
            
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const brainEntries = getAllContent("second-brain", ["slug", "content", "backlinks"])
    return {
        props: {
            brainEntries,
        },
    }
}

export default Layout(SecondBrain)
