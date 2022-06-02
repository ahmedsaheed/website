import { Feed } from "feed";
import { Octokit } from "@octokit/core"
import React, { Component } from "react"

const token = process.env.github_api;
const id = "a928b1fbcf1738da26ea5d7125e911cb";
export default class extends Component  {
  constructor(props){
      super(props);
      this.state = {
         posts: [],
      }
    }
    async componentDidMount()  {
      const octokit = new Octokit({
        auth: token
      })
      
       const response = await octokit.request('GET /gists/{gist_id}/comments', {
        headers: {
            accept: 'application/vnd.github.v3+json',
          },
        gist_id: id,
        
      })
      const date = new Date();
      const feed = new Feed({
        title: "Saheed's TIL",
        description: "Kinda my daily Encyclopedia",
        id: "https://saheed.codes/TIL",
        link: "https://saheed.codes/TIL",
        language: "en",
        copyright: `© Ahmed Saheed ${date.getFullYear()}`,
        updated: date, 
        generator: "Feed", // optional, default = 'Feed for Node.js'
        feedLinks: {
          json: "https://www.saheed.codes/til/",
          atom: "https://www.saheed.codes/til/"
        },
        author: {
          name: "Ahmed Saheed",
          email: "ahmedsaheed2@outlook.com",
          link: "https://saheed.codes/TIL"
        }
      });
      response.data.forEach(post => {
        const data = <ReactMarkdown {...post.body}/> 
         feed.addItem({
          title: post.body.substring(0, 45) + "...",
          id: "https://saheed.codes/TIL",
          link: "https://saheed.codes/TIL",
          description: post.description,
          content: post.body,
          author: [
            {
              name: "Ahmed Saheed",
              email: "ahmedsaheed2@outlook.com",
              link: "https://saheed.codes/TIL"
            },
          ],
          date: new Date(post.created_at)
         
        });
      });
      
      feed.addCategory("Today I Learnt");
      
      feed.addContributor({
        name: "Ahmed Saheed",
        email: "ahmedsaheed2@outlook.com",
        link: "https://saheed.codes/til"
      });
      
   
      console.log(feed.rss2());
         //  fs.mkdirSync('./public/rss', { recursive: true });
      //fs.writeFile('./public/rss/feed.xml', feed.rss2());
    // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
    // fs.writeFileSync('./public/rss/feed.json', feed.json1());
   

  }
  render () {

    return (<></>)
  }
}
