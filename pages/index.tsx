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
                            <a
                                className="moveRight"
                                style={{ display: "inline", backgroundColor: "transparent" }}
                            >
                                <Theme />
                            </a>{" "}
                        </h2>
                        <p className="text-stone-500">
                            <em style={{ fontSize: "16px" }}>{greeting()}</em> Hope you're having a
                            great {currentDayName()}
                        </p>
                    </div>

                    <article>
                        <p className="third">
                            Finally, you made it to my tiny court yard on the web, I see you've come
                            all the way from <Location />. Currently, I'm working on <a target="_blank" rel="noopener" href="https://algo-ai.vercel.app/"> AlgoAI </a>, an algorithms codegen that convert english into algorithms. Also, i enjoy experimenting with proven thoughts frameworks alondsige pondering on human psychology.
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
                                                    href="/second-brain"
                                                >
                                                    My Thoughts{" "}
                                                    <BsArrowUpRight
                                                        style={{
                                                            color: "var(--text-color)",
                                                            display: "inline",
                                                        }}
                                                    />
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
                                                    All Projects{" "}
                                                    <BsArrowUpRight
                                                        style={{
                                                            color: "var(--text-color)",
                                                            display: "inline",
                                                        }}
                                                    />
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
                                                    My Libary{" "}
                                                    <BsArrowUpRight
                                                        style={{
                                                            color: "var(--text-color)",
                                                            display: "inline",
                                                        }}
                                                    />
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
                            This vestibule doors opens onto the intertwined datasets of my
                            brain. More like a library where i store valuable piece of
                             information and an archieve of my personal growth. Currently, i am
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

                        <p className="third" style={{ fontFamily: "Spectral" }}>
                            Find me on{" "}
                            <a target="_blank" href="https://github.com/ahmedsaheed">
                                GitHub
                            </a>
                            {""}{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{ display: "inline" }}
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--uil"
                                width="32"
                                height="16"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#888888"
                                    d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z"
                                ></path>
                            </svg>
                            • {" "}
                            <a target="_blank" href="https://twitter.com/helloahmed_">
                                Twitter
                            </a>{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{ display: "inline" }}
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--mdi"
                                width="32"
                                height="16"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#888888"
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                                ></path>
                            </svg>
                            • {" "}
                            <a target="_blank" href="https://curius.app/ahmed-saheed">Curius 
                            </a>{" "} <svg   style={{ display: "inline" }} width="16" height="16" viewBox="0 0 126 123" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25.2" y="22.05" width="100.8" height="100.8" rx="20" fill="#FEE533"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M80.8 8H20C13.3726 8 8 13.3726 8 20V80.8C8 87.4274 13.3726 92.8 20 92.8H80.8C87.4274 92.8 92.8 87.4274 92.8 80.8V20C92.8 13.3726 87.4274 8 80.8 8ZM20 0C8.95431 0 0 8.9543 0 20V80.8C0 91.8457 8.9543 100.8 20 100.8H80.8C91.8457 100.8 100.8 91.8457 100.8 80.8V20C100.8 8.95431 91.8457 0 80.8 0H20Z" fill="black"></path></svg>

                        </p>

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
