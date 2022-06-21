import React, { Component } from "react"
import { NextSeo } from "next-seo"
import Footer from "../component/footer"
import Summary from "../component/summary"
import Head from "next/head"
import Layout from "../component/layout"

function projects() {
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
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="../styles/blog.css" rel="stylesheet" />
                <title>Projects 🚧 | Ahmed Saheed</title>
                <link href="../styles/hovers.css" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>

            <Summary
                title="Projects 🚧"
                content={
                    <>
                        The machine code of the genes is uncannily computer-like. Apart from
                        differences in jargon, the pages of a molecular biology journal might be
                        interchanged with those of a computer engineering journal.
                    </>
                }
            />
            <main class="mx-auto max-w-3xl space-y-10 p-10">
                <a
                    class="text content-card block"
                    href="https://github.com/ahmedsaheed/Donation-Hub"
                >
                    <div class="flex justify-between items-center">
                        <div class="text-lg font-medium mb-1 font-am" style={{ hover: "ui-serif" }}>
                            Donation Hub
                        </div>
                        <div class="text-xs">Completed</div>
                    </div>
                    <div class="text-sm">An App which habours many donation bodies.</div>
                </a>
                <a class="text content-card block" href="https://github.com/ahmedsaheed/Boomarang">
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
                <a class="text content-card block" href="https://github.com/ahmedsaheed/flutterOS">
                    <div class="flex justify-between items-center">
                        <div class="text-lg font-medium mb-1 font-am">Naija Jobs</div>
                        <div class="text-xs">In Progress</div>
                    </div>
                    <div class="text-sm">Flutter app to help Nigerians find jobs</div>
                </a>
                <a class="text content-card block" href="https://github.com/ahmedsaheed/PersonlBot">
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
                        <div class="text-lg font-medium mb-1 font-am">Sassy Chatbot</div>
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
                        <div class="text-lg font-medium mb-1 font-am">Blood Transfusion System</div>
                        <div class="text-xs">Completed</div>
                    </div>
                    <div class="text-sm">Ah nevermind!</div>
                </a>
            </main>
        </>
    )
}

export default Layout(projects)
