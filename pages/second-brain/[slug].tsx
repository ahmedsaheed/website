import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import { BrainEntry } from "../../lib/api"
import { markdownToHtml } from "../../lib/mdToHtml"
import { getContentBySlug, getAllContent } from "../../lib/api"
import Layout from "../../component/layout"
import { NextSeo } from "next-seo"
import readingTime from "reading-time"
import { format } from "date-fns"

import React from "react"

function BrainEntryPage({ brainEntry }: { brainEntry: BrainEntry }) {
    React.useEffect(() => {
        document.getElementById("upper")!.style.display = "none"
    }, [])
    return (
        <>
            <NextSeo
                title={brainEntry.title}
                description="Ahmed Saheed's second brain'"
                canonical={`https://saheed.codes/second-brain/${brainEntry.slug}`}
                openGraph={{
                    url: `https://saheed.codes/second-brain/${brainEntry.slug}`,
                    title: `${brainEntry.title} | Ahmed Saheed`,
                    description: `${brainEntry.content.substring(0, 100) + "..."}`,
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{brainEntry.title} | Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
                    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
                    crossOrigin="anonymous"
                />
                <script
                    defer
                    src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
                    integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
                    crossOrigin="anonymous"
                ></script>
                <script
                    defer
                    src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
                    integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <header>
                <div style={{paddingLeft: "1.2rem"}} className=" mx-auto max-w-3xl  ">
                    <h2 className="post-title">{brainEntry.title}</h2>
                    <span className="post-date" style={{paddingLeft: "5px"}}>
                        {format(new Date(brainEntry.date), "MMM do, y")} |{" "}
                        {readingTime(brainEntry.content).minutes < 1
                            ? 1
                            : readingTime(brainEntry.content)
                                  .minutes.toString()
                                  .substring(0, 3)}{" "}
                        min read |{" "}
                        <Link
                            href={`https://github.com/ahmedsaheed/saheed.codes/tree/main/data/second-brain/${encodeURI(
                                brainEntry.slug,
                            )}.md`}
                        >
                            Edit Page
                        </Link>
                    </span>
                    <p><em>{brainEntry.description}</em></p>
                </div>
                <article
                    className="prose mx-auto max-w-3xl "
                    dangerouslySetInnerHTML={{ __html: brainEntry.content }}
                />

                {!!brainEntry.backlinks.length && (
                    <div style={{paddingLeft: "1.3rem"}} className="mx-auto max-w-3xl ">
                            <h2>⚘ {brainEntry.backlinks.length > 1 ?"Related Entries" : "Related Entry"}</h2>
                            <div>
                                {brainEntry.backlinks.map((backlink) => (
                                    <Link
                                        key={backlink}
                                        href="/second-brain/[slug]"
                                        as={`/second-brain/${encodeURI(backlink.toLowerCase())}`}
                                    >
                                        <a className="backlinks text-sm text">
                                            {backlink.charAt(0).toUpperCase() + backlink.slice(1)}
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </div>

                    
                )}  

                 <div className="mx-auto max-w-3xl p-10"><a href="/second-brain">← go back</a></div>    
                     

            </header>
            <br></br>

        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const brainEntry = getContentBySlug("second-brain", params?.slug as string, [
        "slug",
        "content",
        "backlinks",
        "title",
        "description",
        "date",
    ])

    const content = await markdownToHtml(brainEntry.content || "")

    return {
        props: {
            brainEntry: {
                ...brainEntry,
                content,
            },
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const brainEntries = getAllContent("second-brain", ["slug"]) as BrainEntry[]

    return {
        paths: brainEntries.map(({ slug }) => {
            return {
                params: {
                    slug: slug.toLowerCase(),
                },
            }
        }),
        fallback: false,
    }
}
export default Layout(BrainEntryPage, "Musings" )
