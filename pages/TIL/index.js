import React, { Component } from "react";
import Dairy from "./api";
import { NextSeo } from "next-seo";
import Footer from "../../lib/footer";

export default class extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Ahmed Saheed's TIL"
          description="A place to document 'Today I Learnt'"
          canonical="https://saheed.codes/me"
          openGraph={{
            url: "https://saheed.codes/me",
            title: "Ahmed Saheed's TIL",
            description: "A place to document 'Today I Learnt'",
          }}
        />
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="../styles/blog.css" rel="stylesheet" />
          <title>TIL | Ahmed Saheed</title>
          <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        </head>
        <body>
          <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10">
            <div
              class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between"
              data-theme="business"
              style={{ fontfamily: "ui-serif" }}
            >
              <a class="text" href="/">
                AHMED
              </a>
              <div class="space-x-4 flex items-center hover:text-blue-600">
                <a class="false" href="/books">
                  books
                </a>
                <a class="false" href="/fun">
                  algos
                </a>
                <a class="text-am-green-light" href="/projects">
                  projects
                </a>
                <a class=" here false" href="#">
                  til
                </a>
                <a class="false" href="/uses">
                  tools
                </a>
                <a class="false" href="../me">
                  me
                </a>
                <a class="text false" href="/rss/feed.xml">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-rss"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          <header class="mx-auto max-w-3xl space-y-5">
            <h1
              class="text-3xl font-am px-10"
              style={{ fontfamily: "ui-serif" }}
            >
              Daily Encyclopedia
            </h1>
            <div
              class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full"
              data-theme="business"
            >
              <p
                class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
              >
                A catalog of referenceable notes documented at least thrice a
                week. I first heard about til from{" "}
                <a
                  class="text"
                  href="https://github.com/M0nica"
                  style={{ textDecorationLine: "underline" }}
                >
                  Monica Powell's
                </a>{" "}
                <a
                  class="text"
                  href="https://github.com/readme/guides/private-documentation"
                  style={{ textDecorationLine: "underline" }}
                >
                  writing on GitHub's Blog
                </a>
                . TIL is a way to summarise information learnt in few sentences
                which can be of great relivence when commited to on a long run.
                I hacked up this rust cli program which helps me add my til as a
                gist comment on GitHub. In the nearest future, I would like to
                create a search mechanism for this website which would help
                search through the contents of my til as they increase.
              </p>
            </div>
            <br />
            <h1 class="text-3xl font-am px-10">Today I Learnt</h1>
            <Dairy />
          </header>
        </body>
        <Footer />
      </>
    );
  }
}
