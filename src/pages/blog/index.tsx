import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { Blog, getAllContent } from '../../util/generate-blog';
import type { ReactNode } from 'react';
export default function BlogPost({ blog }: { blog: Blog[] }) {
  return (
    <>
      <main className=" blog space-y-20 pt-10">
        <div>
          <p className="text-sm text-yellow-700 dark:text-yellow-500">
            Informal essays and project updates
          </p>
        </div>

        <ul className="space-y-1 list-disc list-inside">
          {blog
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((blogs: Blog) => (
              <>
                <BlogLink key={blogs.slug} href={`blog/${blogs.slug}`}>
                  {blogs.title}
                </BlogLink>
              </>
            ))
            .sort()}
        </ul>
      </main>
    </>
  );
}

function BlogLink(props: { href: string, children: ReactNode }) {
  return (
    <li>
      <Link
        style={{ textDecoration: 'none', fontSize: '16px' }}
        className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-600"
        passHref
        href={props.href}
      >
        {props.children}
      </Link>
    </li>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blog = getAllContent('blog', [
    'slug',
    'content',
    'backlinks',
    'title',
    'description',
    'date',
  ]);
  return {
    props: {
      blog,
    },
  };
};
