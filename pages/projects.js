import React, { Component } from "react";
import { NextSeo } from "next-seo";
import  Footer  from "../lib/footer";

export default class extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Ahmed Saheed's Projects"
          description="Some of Ahmed Saheed's work, both good & ...."
          canonical="https://saheed.codes/projects"
          openGraph={{
            url: "https://saheed.codes/projects",
            title: "Ahmed Saheed's Projects",
            description: "Some of Ahmed Saheed's work, both good & ....",
          }}
        />
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="../styles/blog.css" rel="stylesheet" />
          <title>Projects 🚧 | Ahmed Saheed</title>
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
                <a class="here" href="#">
                  projects
                </a>
                <a class="text false" href="/TIL">
                  til
                </a>
                <a class="text false" href="/uses">
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
              Projects 🚧
            </h1>
            <div
              class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full"
              data-theme="business"
            >
              <p
                class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
              >
                The machine code of the genes is uncannily computer-like. Apart
                from differences in jargon, the pages of a molecular biology
                journal might be interchanged with those of a computer
                engineering journal.
              </p>
            </div>
          </header>
          <main class="mx-auto max-w-3xl space-y-10 p-10">
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/Donation-Hub"
            >
              <div class="flex justify-between items-center">
                <div
                  class="text-lg font-medium mb-1 font-am"
                  style={{ hover: "ui-serif" }}
                >
                  Donation Hub
                </div>
                <div class="text-xs">Completed</div>
              </div>
              <div class="text-sm">
                An App which habours many donation bodies.
              </div>
            </a>
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/Boomarang"
            >
              <div class="flex justify-between items-center">
                <div class="text-lg font-medium mb-1 font-am">Boomerang</div>
                <div class="text-xs">Completed</div>
              </div>
              <div class="text-sm">Child care webapp.</div>
            </a>
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/ahmed-saheed"
            >
              <div class="flex justify-between items-center">
                <div class="text-lg font-medium mb-1 font-am">This Garden </div>
                <div class="text-xs">In Progress</div>
              </div>
              <div class="text-sm">Retouch on my personal webpage.</div>
            </a>
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/flutterOS"
            >
              <div class="flex justify-between items-center">
                <div class="text-lg font-medium mb-1 font-am">Naija Jobs</div>
                <div class="text-xs">In Progress</div>
              </div>
              <div class="text-sm">Flutter app to help Nigerians find jobs</div>
            </a>
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/PersonlBot"
            >
              <div class="flex justify-between items-center">
                <div class="text-lg font-medium mb-1 font-am">Personal Bot</div>
                <div class="text-xs">Completed</div>
              </div>
              <div class="text-sm">Easing task with selinuim.</div>
            </a>
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/sassy-chitchatBot"
            >
              <div class="flex justify-between items-center">
                <div class="text-lg font-medium mb-1 font-am">
                  Sassy Chatbot
                </div>
                <div class="text-xs">Completed</div>
              </div>
              <div class="text-sm">
                Best audio chatbot, just like alexa but with bad algorithms.
              </div>
            </a>
            <a
              class="text content-card block"
              href="https://github.com/ahmedsaheed/BloodTransfusionSystem"
            >
              <div class="flex justify-between items-center">
                <div class="text-lg font-medium mb-1 font-am">
                  Blood Transfusion System
                </div>
                <div class="text-xs">Completed</div>
              </div>
              <div class="text-sm">Ah nevermind!</div>
            </a>
          </main>
          <Footer/>
        </body>
      </>
    );
  }
}
