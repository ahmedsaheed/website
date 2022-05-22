
import React from "react";
// import { NextPageContext } from "next";

// const blogPostsRssXml = (blogPosts: IBlogPost[]) => {
//   let latestPostDate: string = "";
//   let rssItemsXml = "";
//   blogPosts.forEach(post => {
//     const postDate = Date.parse(post.createdAt);
//     if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
//       latestPostDate = post.createdAt;
//     }
//     rssItemsXml += `
//       <item>
//         <title>${post.title}</title>
//         <link>
//           ${post.href}
//         </link>
        
//         <pubDate>${post.createdAt}</pubDate>
//         <description>
//         <![CDATA[${post.text}]]>
//         </description>
//     </item>`;
//   });
//   return {
//     rssItemsXml,
//     latestPostDate
//   };
// };

// const getRssXml = (blogPosts: IBlogPost[]) => {
//   const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
//   return `<?xml version="1.0" ?>
//   <rss version="2.0">
//     <channel>
//         <title>Blog by Fredrik Bergqvist</title>
//         <link>https://www.bergqvist.it</link>
//         <description>${shortSiteDescription}</description>
//         <language>en</language>
//         <lastBuildDate>${latestPostDate}</lastBuildDate>
//         ${rssItemsXml}
//     </channel>
//   </rss>`;
// };

export default class Rss extends React.Component {
    render() {
        return (
            <></>
        )
    }
//   static async getInitialProps({ res }: NextPageContext) {
//     if (!res) {
//       return;
//     }
//     const blogPosts = getRssBlogPosts();
//     res.setHeader("Content-Type", "text/xml");
//     res.write(getRssXml(blogPosts));
//     res.end();
//   }
}