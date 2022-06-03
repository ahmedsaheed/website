import React, { Component } from "react";
import { NextSeo } from "next-seo";
import  Footer  from "../lib/footer";

export default class extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Ahmed Saheed Tools"
          description="Some of Ahmed's Saheed daily tools"
          canonical="https://saheed.codes/uses"
          openGraph={{
            url: "https://saheed.codes/uses",
            title: "Ahmed Saheed Tools",
            description: "Some of Ahmed's Saheed daily tools",
          }}
        />
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="../styles/blog.css" rel="stylesheet" />
          <title>Tools 🛠️ | Ahmed Saheed</title>
          <link href="../styles/hovers.css" rel="stylesheet" />

          <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        </head>

        <body>
          <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10">
            <div
              class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between"
              data-theme="business"
              style={{ fontfamily: "ui-serif" }}
            >
              <a class='text' href="/">AHMED</a>
              <div class="space-x-4 flex items-center hover:text-blue-600">
                <a class="text false" href="/books">
                  books
                </a>
                <a class="text false" href="/fun">
                  algos
                </a>
                <a class="text" href="/projects">
                  projects
                </a>
                <a class="text false" href="/TIL">
                  til
                </a>
                <a class="here false" href="#">
                  tools
                </a>
                <a class="text false" href="/me">
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
              Tools 🛠️
            </h1>
            <div
              class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full"
              data-theme="business"
            >
              <p
                class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
              >
                Indeed, the woes of Software Engineering are not due to lack of
                tools, or proper management, but largely due to lack of
                sufficient technical competence.
              </p>
            </div>
          </header>
          <br />
          <br />
          <br />
          <br />{" "}
          <article class="prose mx-auto max-w-3xl pb-10 px-10">
            <section>
              <h2 class="text-4xl font-am px-10">Editor & Terminal</h2>
              <br />
              <ul>
                <li>
                  1. I have this box which contains almost everything i use, its{" "}
                  <a
                    class="text"
                    style={{
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                    href="https://www.jetbrains.com/toolbox-app/"
                  >
                    JetBrains Toolbox
                  </a>
                  .
                </li>
                <li>
                  2. I use the{" "}
                  <a
                    class="text iframe-link"
                    style={{
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                    href="https://draculatheme.com"
                  >
                    Dracula theme{" "}
                    <iframe
                      src="https://draculatheme.com"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "600px",
                        border: "0px none",
                      }}
                    ></iframe>{" "}
                  </a>{" "}
                  on all my editors.
                </li>
                <li>
                  3. I'm mainly use{" "}
                  <a
                    class="text iframe-link"
                    style={{
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                    href="https://iterm2.com/"
                  >
                    iTerm2{" "}
                    <iframe
                      src="https://iterm2.com/"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "600px",
                        border: "0px none",
                      }}
                    ></iframe>
                  </a>{" "}
                  as my terminal.
                </li>
              </ul>
              <ol class="list-decimal">
                <li>
                  3. I use the{" "}
                  <a
                    class="text iframe-link"
                    style={{
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                    href="https://yoncetheme.com/"
                  >
                    Yonce theme
                    <iframe
                      src="https://yoncetheme.com/"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "600px",
                        border: "0px none",
                      }}
                    ></iframe>
                  </a>{" "}
                  for my terminal.
                </li>
              </ol>
              <ol class="list-decimal">
                <li>
                  4. Lastly{" "}
                  <a
                    class="text"
                    style={{
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                    href="https://code.visualstudio.com/"
                  >
                    VS Code
                  </a>{" "}
                  for my anything coding related.
                </li>
              </ol>
            </section>
          </article>
          <br />
          <br />
          <br />
          <Footer/>
        </body>
      </>
    );
  }
}
