import { Feed } from "feed";
import { Octokit } from "@octokit/core"
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import * as fs from 'fs';

const token = process.env.github_api;
const id = "a928b1fbcf1738da26ea5d7125e911cb";

async function generateRssFeed() {
 

  const date = new Date();
  const feed = new Feed({
    title: `Saheed's TIL`,
    description: 'Welcome to my TIL!',
    id: "https://www.saheed.codes/til/",
    link: "https://www.saheed.codes/til/",
    language: 'en',
    copyright: `© Ahmed Saheed ${date.getFullYear()}`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: "https://www.saheed.codes/rss/feed.xml",
      json: "https://www.saheed.codes/rss/feed.json",
      atom: "https://www.saheed.codes/rss/atom.xml"
    },
    author: "Ahmed Saheed"
  });
  const octokit = new Octokit({
    auth: token
  });
  const reply = await octokit.request('GET /gists/{gist_id}/comments', {
    headers: {
        accept: 'application/vnd.github.v3+json',
      },
    gist_id: id,
    
  });

  const posts = [...reply.data]
  if(!posts){return;}
  posts.forEach((post) => {
    const url = "https://www.saheed.codes/me/";
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description:  "TIL on " +new Date(post.created_at),
      content:(post.body),
       author: "Ahmed Saheed",
      // contributor: [author],
      date: new Date(post.created_at)
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  // fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

export default generateRssFeed;
