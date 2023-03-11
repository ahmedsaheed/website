import { Feed } from "feed"
import { Blog } from "../util/generate-blog"
import { getAllContent } from "../util/generate-blog"
import { GetServerSideProps } from "next"
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

 export function getRssFeed ({ blog }: { blog: Blog[] })  {
    const date = new Date()
    const feed = new Feed({
        title: "Ahmed Saheed's Blog",
        description: "Ahmed Saheed's Blog",
        id: "https://saheed.codes/",
        link: "https://saheed.codes/",
        language: "en",
        copyright: `© Ahmed Saheed ${date.getFullYear()}`,
        updated: date,
        generator: "Feed",
        feedLinks: {
            json: "https://www.saheed.codes/",
            atom: "https://www.saheed.codes/",
        },
        author: {
            name: "Ahmed Saheed",
            email: "ahmedsaheed2@outlook.com",
            link: "https://saheed.codes/TIL",
        },
    })

    blog.sort((a, b)  => new Date(b.date).getTime() - new Date(a.date).getTime())
       .forEach( (post) => {
        
        feed.addItem ({
            title: post.title,
            id: `https://saheed.codes/blog/${post.slug}`,
            link: `https://saheed.codes/blog/${post.slug}`,
            description: post.description,
             content:  md.render(post.content),
            author: [
                {
                    name: "Ahmed Saheed",
                    email: "ahmedsaheed2@outlook.com",
                    link: "https://saheed.codes/",
                },
            ],
            date: new Date(post.date),
            
        })

    })

    feed.addCategory("Blog")

    feed.addContributor({
        name: "Ahmed Saheed",
        email: "ahmedsaheed2@outlook.com",
        link: "https://saheed.codes/",
    })

    return feed.rss2()
}

export const getServerSideProps: GetServerSideProps = async () => {
    const blog = getAllContent("blog", [
      "slug",
      "content",
      "backlinks",
      "title",
      "description",
      "date",
    ]);
  
    const rss = getRssFeed({ blog });
  
    return {
      props: {
        rss,
      },
    };
  };
  

export default function Rss() {
    return null
}