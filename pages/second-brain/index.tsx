import { GetStaticProps } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"
import Layout from "../../component/layout"
import { getAllContent } from "../../lib/api"
import Head from "next/head"
import { BrainEntry } from "../../lib/api"
import { format } from "date-fns"
import Summary from "../../component/summary"
import React from "react"

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
                <title>Writings by Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>
            <header className="mx-auto max-w-4xl space-y-5">
                <Summary
                    title=""
                    content={
                        <>
                        <em>
                            The mind throws out thoughts and beliefs in so many permutations and
                            configurations and we are enslaved by it, by the output of our own
                            minds. The mind is a prison. And when we write the noise is distilled
                            and alchemised, and the self can find a way out, which I think is what
                            love is. Franzen ending lines were "I mourn the eclipse of the cultural
                            authority that literature once possessed, and I rue the onset of an age
                            so anxious that the pleasure of a text becomes difficult to sustain."
                            </em>
                        </>
                    }
                />

                <div className="writingWrapper">
                {brainEntries
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((brainEntry: BrainEntry) => (
                        <>
                            <div className="writings px-10">
                                <Link
                                    key={brainEntry.slug}
                                    href="/second-brain/[slug]"
                                    as={`/second-brain/${brainEntry.slug.toLowerCase()}`}
                                >
                                    <a className="px-10 c-lhitIg">
                                        <p>
                                            {brainEntry.title}

                                            <span>
                                                <span className="date" style={{ float: "right" }}>
                                                    {format(new Date(brainEntry.date), "MMM do, y")}
                                                </span>
                                                <span className="date2" style={{float: "right" }}>
                                                    {format(new Date(brainEntry.date), "MM/dd")}
                                                </span>
                                            </span>
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </>
                    ))
                    .sort()}
                    </div>
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

export default Layout(SecondBrain, "Writings")
