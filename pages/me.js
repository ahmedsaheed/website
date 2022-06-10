import React, { Component, useState, useEffect } from "react"
import { NextSeo } from "next-seo"
import Footer from "../component/footer"
import Summary from "../component/summary"
import { Formik, Form, Field } from "formik"
import { Index } from "flexsearch"

const SearchBar = () => {
    const data = {
        1: { id: 1, title: "React" },
        2: { id: 2, title: "React.js" },
        3: { id: 3, title: "ReactJS" },
        4: { id: 4, title: "Node" },
        5: { id: 5, title: "Node.js" },
        6: { id: 6, title: "NodeJS" },
    }

    const [index, setIndex] = useState(
        new Index({
            tokenize: "strict",
            resolution: 9,
            minlength: 3,
            optimize: true,
            fastupdate: true,
            cache: 100,
            context: {
                depth: 1,
                resolution: 3,
                bidirectional: true,
            },
        }),
    )
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(true);
    const [results, setResults] = useState([])

    // const handleClick = event => {
    //     setIsShown(current => !current);
    //   };

    useEffect(() => {
        Object.values(data).forEach((item) => {
            setIndex(index.add(item.id, item.title))
        })
    }, [])

    useEffect(() => {
        setResults(index.search(query))
    }, [query])

    return (
        <div id="search-container" style={{display: show ? 'block' : 'none'}}>
            <div id="search-space">
                 <Formik
                 autocomplete="off"
                 id="search-bar"
            initialValues={{ query: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setQuery(values.query)
              setSubmitting(false)
            }}
          >
              <Form >
              <Field class="pad input" name="query"
              placeholder="Search for something..." 
              autocomplete="off"
              />
               
            </Form>
            </Formik>
                <div id="results-container">
                   
                        <h3>
                        {results.map((result) => (
                            <>
                             <button class="result-card">
                        <span class="search-highlight" key={result}>{data[result].title}</span>
                        <p>
                            <b>Making your own Quartz</b>
                            Setting up Quartz require<span class="search-highlight">s</span> a basic
                            understanding of git. If you are unfamiliar,
                        </p>
                        </button>
                        </>
                        ))}
                        </h3>
                </div>
            </div>
        </div>
    )
}
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
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <title>Moi 👨🏾‍🦲 | Ahmed Saheed</title>
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
                                <a class="false" href="/TIL">
                                    til
                                </a>
                                <a class="false" href="/uses">
                                    tools
                                </a>
                                <a class="here false" href="#">
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

                                <button onClick={() => SearchBar.setShow((s) => !s)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-search"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <Summary
                        title="👨🏾‍🦲 Moi"
                        content={
                            <>
                                In science fiction which was published around the 1920s, "It is
                                always expected that future human beings would have enormous heads
                                because they would have very big brains and they would be very wise.
                                It didn't work that ways, what happened is the human race is
                                building a brain outside its body. That is to say an interlocking
                                electronic network of telephonic, television, radionic communication
                                which is rapidly intelocked with computers, so that you will within
                                a few years be able to plug your brain into a computer".
                            </>
                        }
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <center class="text-3xl font-am px-10">
                        Some things are better left unseen!
                    </center>
                    <center>
                        {/* <div className="search-container"> */}
                        <SearchBar />
                        {/* </div> */}
                    </center>

                    <br />
                    <br />
                    <br />
                    <br />
                </body>
                <Footer />
            </>
        )
    }
}
