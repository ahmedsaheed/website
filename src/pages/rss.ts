import { Feed } from 'feed'
import { Blog } from '../util/generate-blog'
import { getAllContent } from '../util/generate-blog'
import { GetServerSideProps } from 'next'
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt()

export function getRssFeed({ blog }: { blog: Blog[] }) {
    const date = new Date()
    const feed = new Feed({
        title: "Ahmed Saheed's RSS Feed",
        description: "an rss feed for ahmed's blog posts",
        id: 'https://helloahmed.me/',
        link: 'https://helloahmed.me/',
        language: 'en',
        copyright: `Copyright © Ahmed Saheed ${date.getFullYear()}`,
        updated: date,
        generator: 'Feed',
        feedLinks: {
            json: 'https://helloahmed.me/',
            atom: 'https://helloahmed.me/',
        },
        author: {
            name: 'Ahmed Saheed',
            email: 'ahmedsaheed2@outlook.com',
            link: 'https://helloahmed.me/',
        },
    })

    blog.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ).forEach(post => {
        feed.addItem({
            title: post.title,
            id: `https://helloahmed.me/blog/${post.slug}`,
            link: `https://helloahmed.me/blog/${post.slug}`,
            description: post.description,
            content: md.render(post.content),
            author: [
                {
                    name: 'Ahmed Saheed',
                    email: 'ahmedsaheed2@outlook.com',
                    link: 'https://helloahmed.me/',
                },
            ],
            date: new Date(post.date),
        })
    })

    feed.addCategory('Blog')

    feed.addContributor({
        name: 'Ahmed Saheed',
        email: 'ahmedsaheed2@outlook.com',
        link: 'https://helloahmed.me/',
    })

    return feed.rss2()
}

export const getServerSideProps: GetServerSideProps = async () => {
    const blog = getAllContent('blog', [
        'slug',
        'content',
        'backlinks',
        'title',
        'description',
        'date',
    ])

    const rss = getRssFeed({ blog })

    return {
        props: {
            rss,
        },
    }
}

export default function Rss() {
    return null
}
