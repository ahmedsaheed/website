import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"
import Layout from "../../component/layout"
import { getContentBySlug, getAllContent } from "../../lib/api"
const readingTime = require("reading-time")
import Head from "next/head"
import { BrainEntry } from "../../lib/api"

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
                <header className="rambles vertical_dotted_line pads mx-auto max-w-3xl space-y-5">
                    <h1 className="horizontal_dotted_line text-3xl font-bold">
                        Ahmed's Rambles: A collection of interwoven ideas
                    </h1>

                    {brainEntries.map((brainEntry) => (
                        <>
                            <Link
                                key={brainEntry.slug}
                                href="/second-brain/[slug]"
                                as={`${brainEntry.slug.toLowerCase()}`}
                            >
                                <a className="c-lhitIg">
                                    <h3 style={{ fontFamily: "stylish", fontSize: "bold" }}>
                                        {brainEntry.title}
                                    </h3>
                                    <p>
                                        {brainEntry.description.charAt(0).toUpperCase() +
                                            brainEntry.description.slice(1)}
                                    </p>
                                    <div className="horizontal_line flex flex-wrap  ">
                                        <p>{readingTime(brainEntry.content).words + " words • "}</p>
                                        <p>
                                            &nbsp;
                                            {readingTime(brainEntry.content).minutes < 1
                                                ? 1
                                                : readingTime(brainEntry.content)
                                                      .minutes.toString()
                                                      .substring(0, 3)}
                                            &nbsp; min read.
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </>
                    ))}
                </header>
            </body>
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

export default Layout(SecondBrain)
