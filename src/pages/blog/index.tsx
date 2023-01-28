import type { GetStaticProps} from 'next';
import Link from 'next/link';
import { Blog, getAllContent } from "../../util/generate-blog"
import React from "react"
import type {ReactNode} from 'react';
export default function BlogPost({ blog }: { blog: Blog[] }) {
    return(
      <>
       <main className=" blog space-y-20 pt-10">

<ul className="space-y-1 list-disc list-inside">
        {blog
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((blogs: Blog) => (
              <>
              <BlogLink key={blogs.slug} href={`blog/${blogs.slug}`}>
                    {blogs.title}
                  </BlogLink>
      
              </>
          )).sort()
      }
      </ul>
      </main>
      </>


)}


function BlogLink(props: {href: string; children: ReactNode}) {
	return (
		<li>
			<Link style={{textDecoration: "none", fontSize: "16px"}} className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-600" passHref href={props.href}>
					{props.children}
			</Link>
		</li>
	);
}


export const getStaticProps: GetStaticProps = async () => {
    const blog = getAllContent("blog", [
        "slug",
        "content",
        "backlinks",
        "title",
        "description",
        "date",
    ])
    return {
        props: {
            blog,
        },
    }
}


/*
        <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Writings by Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>

<main className="space-y-8">
<div>
    <a
        className="text-sm text-yellow-700 dark:text-yellow-500"
        href="https://old.alistair.blog"
    >
        ⚠️ looking for the old blog?
    </a>
</div>

<h2>
    <span>alistair.blog</span>{' '}
    <a
        target="_blank"
        href="https://github.com/alii/blog"
        className="text-neutral-500 hover:text-blue-500"
        rel="noreferrer"
    >
        – github
    </a>
</h2>

<ul className="space-y-1 list-disc list-inside">
    {posts
        .filter(post => !post.hidden)
        .map(post => (
            <BlogLink key={post.slug} href={`/${post.slug}`}>
                {post.name}
            </BlogLink>
        ))} 

        {blog
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((blogs: Blog) => (
              <>
              <BlogLink key={blog.slug} href={`/${blog.slug}`}>
                    {blog.title}
                  </BlogLink>
      
              </>
          )).sort()
      }
      </ul>
      </main>
      */
