import React from "react"
import { NextSeo } from "next-seo"
import { currentDayName } from "../component/date"
import { greeting } from "../component/greetings"
import Head from "next/head"
import Location from "../component/getLocation"
import Theme from "../component/theme"
import { BsArrowUpRight } from "react-icons/bs"

export const date = new Date()
export default function Home() {
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
            <Head>
                <meta charSet="UTF-8" />
                <title>Ahmed Saheed</title>
                <link rel="icon" type="image/png" href="/icon.png" />
            </Head>
            <body>
                <div className=" spacers mx-auto max-w-3xl space-y-5">
                    <div className="mx-auto max-w-2xl">
                        <br></br>
                        <h2 className="name third text-stone-100 font-hammersmith mb-4">
                            Ahmed Saheed
                            <a className="moveRight">
                                <Theme />
                            </a>{" "}
                        </h2>
                        <p className="text-stone-500">
                            <em>{greeting()}</em> Hope you're having a great {currentDayName()}
                        </p>
                    </div>


                    <article>
                    
                        <p className="third">
                            Finally, you made it to my tiny court yard on the web, I see you've come 
                            all the way from <Location />. I’m Ahmed by name! I enjoy building on the web, wandering the web and tinkering with things I
                            find meaningful to me.
                        </p>
                        <section className="third scrollport">
                            <div>
                                <div style={{ padding: "12px" }}>
                                    <h3>Thoughts</h3>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="/second-brain/react-theming"
                                        
                                                >
                                                    Themes in NextJs
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            Theming isn't that tricky.
                                        </span>
                                    </div>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="/second-brain/cities-ambition"
                                            
                                                >
                                                    Cities
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            A Ponder on Paul Graham's essay
                                        </span>
                                    </div>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="/second-brain/entries"
                                                    
                                                    
                                                >
                                                    My Thoughts <BsArrowUpRight style={{color: "var(--text-color)", display: "inline"}}/>

                                                </a>

                                            </span>
                                            
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            Collection of intertwined ideas
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ padding: "12px" }}>
                                    <h3>Projects</h3>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="https://github.com/ahmedsaheed/qurancli"
                                                    rel="noopener"
                                                    target="_blank"
                                                >
                                                    QuranCli
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            Minimal cli app to read, search the quran
                                        </span>
                                    </div>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="https://github.com/ahmedsaheed/Donation-Hub"
                                                    rel="noopener"
                                                    target="_blank"
                                                >
                                                    Donation-Hub
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            A habour of donation bodies to aid SDG.
                                        </span>
                                    </div>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="/projects"
                                                   
                                                >
                                                    All Projects <BsArrowUpRight style={{color: "var(--text-color)", display: "inline"}}/>
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            Collections of project I've tinkered with.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ padding: "12px" }}>
                                    <h3>Books</h3>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="https://www.goodreads.com/book/show/26238021-into-the-wild"
                                                    rel="noopener"
                                                    target="_blank"
                                                >
                                                    Into the wild
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                        My favourite. A sad story at heart.
                                        </span>
                                    </div>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="https://www.goodreads.com/book/show/6149.Beloved"
                                                    rel="noopener"
                                                    target="_blank"
                                                >
                                                    Beloved
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                        Suspense from layers of trauma and grief
                                        </span>
                                    </div>
                                    <div style={{ minHeight: "84px" }}>
                                        <div>
                                            <span basics-text="">
                                                <a
                                                    basics-variant="text"
                                                    basics-link=""
                                                    href="/books"
                                                 
                                                >
                                                    My Libary <BsArrowUpRight style={{color: "var(--text-color)", display: "inline"}}/>
                                                </a>
                                            </span>
                                            <span
                                                basics-variant="inline"
                                                aria-hidden="true"
                                                basics-spacer=""
                                            ></span>
                                            <span
                                                craft-icon=""
                                                data-icon="arrow-up-right"
                                                style={{ width: "16px", height: "16px" }}
                                                role="img"
                                                aria-label="arrow-up-right icon"
                                            ></span>
                                        </div>
                                        <span basics-color="dim" basics-text="">
                                            A digital libary of books I've read
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <p className="third">
                            This vestibule doors opens onto my fine and maybe unfine datasets of my
                            brain. More like a library where i store valuable piece of computer
                            related information and document my personal growth. Currently, i am
                            engaged in{" "}
                            <a target="_blank" href="https://griffith.ie">
                                college
                            </a>{" "}
                            activities alongside building <a href="/projects">projects</a> and
                            contributing to open source. Also, I am having a great time being lost
                            in <a href="/second-brain/tolstoy">Tolstoy's</a> Literature while
                            puzzling human existence. Please feel free and navigate around, you're
                            warmly welcomed.
                        </p>

                        <h3 className="third">
                            Find me on{" "}
                            <a target="_blank" href="https://github.com/ahmedsaheed">
                                GitHub
                            </a>{" "}
                            and{" "}
                            <a target="_blank" href="https://twitter.com/helloahmed_">
                                Twitter
                            </a>
                            .
                        </h3>

                        <div className="pt-10 grey-text cent ">
                            <span className=" text-sm">
                                CC{" "}
                                <a
                                    target="_blank"
                                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                    style={{ color: "inherit", borderBottom: "1px dotted" }}
                                >
                                    BY-NC-SA 4.0
                                </a>{" "}
                                2021-{date.getFullYear()} © Ahmed Saheed
                            </span>
                        </div>
                    </article>
                </div>
            </body>
        </>
    )
}
