import { NextApiResponse } from "next";
import { getRssFeed } from "@/pages/rss";
import { getAllContent } from "@/util/generate-blog";

const Rss = () => null;

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const blog = getAllContent("blog", [
    "slug",
    "content",
    "backlinks",
    "title",
    "description",
    "date",
  ]);

  const rss = getRssFeed({ blog });

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return {
    props: {},
  };
}

export default Rss;