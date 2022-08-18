import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"
import Layout from "../../component/layout"
import { getContentBySlug, getAllContent } from "../../lib/api"
const readingTime = require("reading-time")
import Head from "next/head"
import { BrainEntry } from "../../lib/api"
import { format } from "date-fns"
import Summary from "../../component/summary"

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
                    description: "A place to document things i find interesting",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>Second Brain | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>

            <header className="mx-auto max-w-3xl space-y-5">
                <Summary
                    title=""
                    content={
                        <>
                            In a digital garden there is a combination of personal experience and professional
                            activities, studies under way and studies planned. A second brain or digital garden would
                            enhance the process of gathering together what one is doing
                            intellectually and what one is experiencing as a person. Here you will
                            not be afraid to use your experience and relate it directly to various
                            work in progress. By serving as a check on repetitious work. It also
                            encourages you to capture ‘fringe-thoughts’: various ideas which may be
                            byproducts of everyday life, snatches of conversation overheard in the
                            street, or, for that matter, dreams. Once noted, these may lead to more
                            systematic thinking, as well as lend intellectual relevance to more
                            directed experience. {"   "}<a href="http://www.aaronsw.com/weblog/about?curius=1978" target="_blank">--aaronsw</a>
                        </>
                    }
                />

                {brainEntries.sort((a, b) => new Date(b.date).getTime() -  new Date(a.date).getTime()).map((brainEntry: BrainEntry) => (
                    <>
                        <div className="px-10">
                            <Link
                                key={brainEntry.slug}
                                href="/second-brain/[slug]"
                                as={`/second-brain/${brainEntry.slug.toLowerCase()}`}
                            >
                                <a className="px-10 c-lhitIg">
                                    <p style={{ fontFamily: "stylish", fontSize: "bold" }}>
                                        {brainEntry.title}

                                        <span>
                                            <span style={{ float: "right" }}>
                                                {format(new Date(brainEntry.date), "MMM do, y")}
                                            </span>
                                        </span>
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </>
                )).sort()}
            </header>
            <br></br>
            <br></br>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const brainEntries = getAllContent("second-brain", [
        "slug",
        "content",
        "backlinks",
        "title",
        "description",
        "date",
    ])
    return {
        props: {
            brainEntries,
        },
    }
}

export default Layout(SecondBrain, "The Garden")
