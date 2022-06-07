import React, { Component, useEffect } from "react"
import { NextSeo } from "next-seo"
import { currentDayName } from "../component/date"
import { greeting } from "../component/greetings"
import Summary from "../component/summary"

export default class extends Component {
    render() {
        return (
            <>
                <NextSeo
                    title="Ahmed Saheed"
                    description="Vestibule to my brain datasets"
                    canonical="https://saheed.codes/"
                    openGraph={{
                        url: "https://saheed.codes/",
                        title: "Ahmed Saheed",
                        description: "Vestibule to my brain datasets",
                    }}
                />
                <head>
                    <title class>Ahmed Saheed</title>
                    <link rel="stylesheet" href="./style.css" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
                    ></link>
                </head>

                <body
                    id="page-top"
                    data-spy="scroll"
                    data-target=".navbar-fixed-top"
                    data-offset="50"
                >
                    <div className="header-area">
                        <header className="header">
                            <nav aria-label="primary" className="menu">
                                <a href="/blah" className="menu-item">
                                    <span className="text2 menu-item-inner">
                                        <br />
                                        BACKYARD 🌼
                                    </span>
                                </a>
                            </nav>
                            <nav>
                                <div className="social-network">
                                    <a href="https://github.com/ahmedsaheed" target="_blank">
                                        <i className="text bi-github" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://twitter.com/helloahmed_" target="_blank">
                                        <i className="text bi-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="/rss/feed.xml" target="_blank">
                                        <i className="text bi bi-rss" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </nav>
                        </header>
                    </div>
                    <div className="back-titre">
                        <div className="wrapper">
                            <h1 class="typing-demo">AHMED SAHEED</h1>
                        </div>

                        <h2 className="tagline">
                            An upcoming software engineer & Family tech support since 7.
                        </h2>
                        <h2 className="tagline">
                            {greeting()} hope you're having a good {currentDayName()} ?
                        </h2>
                    </div>
                    <div class="whiteSpace"></div>
                    <Summary
                        title=""
                        content={
                            <>
                                This vestibule door opens onto my so fine and maybe unfine datasets
                                of my brain. More like a library where i store valuable peice of
                                computer related information.
                                <br /> Currently, i am engaging in{" "}
                                <a
                                    class="text"
                                    href="https://www.griffith.ie/"
                                    style={{ textDecorationLine: "underline" }}
                                >
                                    college work
                                </a>{" "}
                                while doing some side projects and{" "}
                                <a
                                    class="text"
                                    href="https://www.github.com/ahmedsaheed"
                                    style={{ textDecorationLine: "underline" }}
                                >
                                    contributing to open source
                                </a>{" "}
                                . Also i am having a great time being lost in{" "}
                                <a
                                    class="text"
                                    href="https://www.saheed.codes/books"
                                    style={{ textDecorationLine: "underline" }}
                                >
                                    Tolstoy's Literature
                                </a>{" "}
                                alongside puzzling human existence. Please feel free and navigate
                                around, you're highly welcomed.
                            </>
                        }
                    />

                    <br />
                    <footer className="footer">
                        <div className="container">
                            <div className="footer-inner">
                                <p className="footer-text">
                                    © <a href="https://github.com/ahmedsaheed">Ahmed Saheed 2022</a>
                                </p>
                            </div>
                        </div>
                    </footer>
                </body>
            </>
        )
    }
}
