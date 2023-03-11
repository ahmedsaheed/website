import { getRssFeed } from "@/pages/rss";
import { Blog } from "@/util/generate-blog";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiRss } from "react-icons/si";

export function Rssbutton({blog}: {blog: Blog[]}){
    const router = useRouter();

    function handleRssClick(){
        getRssFeed({blog});
        router.push("/rss.xml");
    }

    return (
        <button
        onClick={handleRssClick}
      >
        <SiRss className="h-5 w-7" />
        <span className="sr-only">Rss</span>
      </button>
    )
}