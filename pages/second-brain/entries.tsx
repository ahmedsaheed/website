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
            <h1 className="mx-auto max-w-3xl space-y-5 text-3xl font-am px-10">
                Digital Garden Entries
            </h1>
                <br />
                <br />

                <header className="pads mx-auto max-w-3xl space-y-5">
                    <ul className="section-ul">
                        {brainEntries.map((brainEntry) => (
                            <li className="section-ul">
                                <>
                                    <div className="desc">
                                        <h3>{brainEntry.title}</h3>
                                        <br />
                                        <p>
                                            {brainEntry.description.charAt(0).toUpperCase() +
                                                brainEntry.description.slice(1)}
                                        </p>
                                        <div className="flex flex-wrap  ">
                                            <p>
                                                {readingTime(brainEntry.content).words +
                                                    " words • "}
                                            </p>
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
                                        <br />
                                        <Link
                                            key={brainEntry.slug}
                                            href="/second-brain/[slug]"
                                            as={`${brainEntry.slug.toLowerCase()}`}
                                        >
                                            <a>
                                                Read More
                                            </a>
                                        </Link>
                                    </div>
                                </>
                            </li>
                        ))}
                    </ul>
                </header>

                <br />
                <br />
                <br />
                <br />
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
