import React, { Component, useState, useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { Index } from "flexsearch"
import * as FlexSearch from "flexsearch"

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
    const [isShown, setIsShown] = useState(false)
    const [results, setResults] = useState([])

    useEffect(() => {
        document.addEventListener("keydown", detectKeydown, true)
    }, [])

    const detectKeydown = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
            setIsShown(true)
        } else if (e.key === "Escape") {
            setIsShown(false)
        }
    }
    useEffect(() => {
        Object.values(data).forEach((item) => {
            setIndex(index.add(item.id, item.title))
        })
    }, [])

    useEffect(() => {
        setResults(index.search(query))
    }, [query])

    return (
        <div id="search-container" style={{ opacity: isShown ? 1 : 0 }}>
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
                    <Form>
                        <Field
                            class="pad input"
                            name="query"
                            placeholder="Search for something...Use the escape key to close the search bar"
                            autocomplete="off"
                        />
                    </Form>
                </Formik>

                <div id="results-container">
                    {JSON.stringify(results) === "[]" && query.length >= 3 ? (
                        <div class="result-card">
                            <span class="search-highlight">No match found</span>
                            <p>
                                <b>Try a key word</b>
                            </p>
                        </div>
                    ) : (
                        <h3>
                            {results.map((result) => (
                                <button class="result-card">
                                    <span class="search-highlight" key={result}>
                                        {data[result].title}
                                    </span>
                                    <p>
                                        <b>Making your own Quartz</b>
                                        Setting up Quartz require
                                        <span class="search-highlight">s</span> a basic
                                        understanding of git. If you are unfamiliar,
                                    </p>
                                </button>
                            ))}
                        </h3>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar
