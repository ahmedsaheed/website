import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import { BrainEntry } from "../../lib/api"
import { markdownToHtml } from "../../lib/mdToHtml"
import { getContentBySlug, getAllContent } from "../../lib/api"
import Layout from "../../component/layout"
import Footer from "../../component/footer"

import React from "react"

function BrainEntryPage({ brainEntry }: { brainEntry: BrainEntry }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>{brainEntry.slug} | Ahmed Saheed</title>
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
            <header className="pads mx-auto max-w-3xl space-y-5">
                {/* <header>
                    <h1 className="text-3xl" title="A piece of my second brain">
                        🧠
                    </h1>
                </header> */}

                <article
                    className="prose mt-12"
                    dangerouslySetInnerHTML={{ __html: brainEntry.content }}
                />

                {!!brainEntry.backlinks.length && (
                    <div
                        className="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full"
                        data-theme="business"
                    >
                        {" "}
                        <h1 className="pad text-2xl font-light text-am-white">Backlinks</h1>
                        <div className="flex flex-wrap ">
                            {brainEntry.backlinks.map((backlink) => (
                                <Link
                                    key={backlink}
                                    href="/second-brain/[slug]"
                                    as={`/second-brain/${encodeURI(backlink.toLowerCase())}`}
                                >
                                    <a className="pad text">{backlink}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
            <br></br>
            <Footer></Footer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const brainEntry = getContentBySlug("second-brain", params?.slug as string, [
        "slug",
        "content",
        "backlinks",
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

export default Layout(BrainEntryPage)
