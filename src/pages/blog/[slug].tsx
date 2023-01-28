import type { GetStaticPaths, GetStaticProps, PageConfig } from "next";
import Head from "next/head";
import {
  Blog,
  getAllContent,
  getContentBySlug,
} from "../../util/generate-blog";
import { markdownToHtml } from "../../util/parse-md";

// export const config: PageConfig = {
// 	unstable_runtimeJS: false,
// };

export default function BlogPosts({ blog }: { blog: Blog }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{blog?.title}</title>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
          integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
          integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <p>
        <time
          className="prose blog"
          dateTime={new Date(blog.date).toISOString()}
        >
          {new Date(blog.date).toDateString()}
        </time>
      </p>

      <main
        className="prose blog prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800 prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = getContentBySlug("blog", params?.slug as string, [
    "slug",
    "content",
    "backlinks",
    "title",
    "description",
    "date",
  ]);

  const content = await markdownToHtml(blog.content || "");

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blog = getAllContent("blog", ["slug"]) as Blog[];

  return {
    paths: blog.map(({ slug }) => {
      return {
        params: {
          slug: slug.toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
};
