import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"
import Layout from "../../component/layout"
import { getContentBySlug, getAllContent } from "../../lib/api"
const readingTime = require("reading-time")
import Head from "next/head"
import { BrainEntry } from "../../lib/api"
import { format } from "date-fns"


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
            
                <header className="pads mx-auto max-w-3xl space-y-5">
                <h1 className="text-3xl font-am horizontal_line ">Entries</h1>

                

                {brainEntries.map((brainEntry) => (
                        <>
                            <Link
                                key={brainEntry.slug}
                                href="/second-brain/[slug]"
                                as={`${brainEntry.slug.toLowerCase()}`}
                            >
                                <a className="horizontal_line px-10 c-lhitIg">
                                    <p style={{ fontFamily: "stylish", fontSize: "bold" }}>
                                        {brainEntry.title}

                                    <span>
                                    <span style={{float: "right"}}>
                                    {format(new Date(brainEntry.date), "MMM do, y")} 
                                    </span>
                                    </span>
                                    </p>
                                    
                                    
                                    
                                </a>
                            </Link>
                        </>
                    ))}

          

                    
                    
                </header>
                <br></br><br></br><br></br>
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
