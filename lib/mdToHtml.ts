import { unified } from "unified"
import parse from "remark-parse"
import math from "remark-math"
import remark2rehype from "remark-rehype"
import katex from "rehype-katex"
import stringify from "rehype-stringify"
import highlight from "rehype-highlight"
import slug from "rehype-slug"
import link from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

export async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(parse)
        .use(math)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(remarkGfm)
        .use(rehypeRaw)
        .use(katex)
        .use(stringify)
        .use(highlight)
        .use(slug)
        .process(markdown)

    return result.toString()
}
