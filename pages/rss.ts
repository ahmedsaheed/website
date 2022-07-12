import { Feed } from "feed"
import React, { Component } from "react"
import { markdownToHtml } from "../lib/mdToHtml"
import { BrainEntry } from "../lib/api"
import { getContentBySlug, getAllContent } from "../lib/api"
import { GetStaticProps, GetStaticPaths } from "next"
const fs = require("fs")

function getRssFeed({ brainEntries }: { brainEntries: BrainEntry[] }) {
    const date = new Date()
    const feed = new Feed({
        title: "Saheed's TIL",
        description: "Ahmed Saheed's Encyclopedia | Second Brain",
        id: "https://saheed.codes/TIL",
        link: "https://saheed.codes/TIL",
        language: "en",
        copyright: `© Ahmed Saheed ${date.getFullYear()}`,
        updated: date,
        generator: "Feed",
        feedLinks: {
            json: "https://www.saheed.codes/til/",
            atom: "https://www.saheed.codes/til/",
        },
        author: {
            name: "Ahmed Saheed",
            email: "ahmedsaheed2@outlook.com",
            link: "https://saheed.codes/TIL",
        },
    })
    brainEntries?.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: `https://saheed.codes/${post.slug}`,
            link: `https://saheed.codes/${post.slug}`,
            description: post.description,
            content: post.content,
            author: [
                {
                    name: "Ahmed Saheed",
                    email: "ahmedsaheed2@outlook.com",
                    link: "https://saheed.codes/TIL",
                },
            ],
            date: new Date(post.date),
        })
    })

    feed.addCategory("Second Brain")

    feed.addContributor({
        name: "Ahmed Saheed",
        email: "ahmedsaheed2@outlook.com",
        link: "https://saheed.codes/til",
    })

    //console.log(feed.rss2())
    // fs.mkdir('./public/rss', { recursive: true });
    // fs.writeFile('./public/rss/feed.xml', feed.rss2());
    // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
    // fs.writeFileSync('./public/rss/feed.json', feed.json1());
    return null
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

export default getRssFeed
