import React from "react"
function Layout(PageComponent: any) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
                <nav className="top-0 px-5 py-2.5 w-full z-10 font-am mb-10">
                    <div
                        className="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between"
                        data-theme="business"
                    >
                        <a className="text" href="/">
                            AHMED
                        </a>
                        <div className="space-x-4 flex items-center hover:text-blue-600">
                            <a className="false" href="/books">
                                books
                            </a>
                            <a className="false" href="/fun">
                                algos
                            </a>
                            <a className="text-am-green-light" href="/projects">
                                projects
                            </a>
                            <a className="false" href="/TIL">
                                til
                            </a>
                            <a className="false" href="/uses">
                                tools
                            </a>
                            <a className="false" href="#">
                                me
                            </a>
                            <a className="text false" href="/rss/feed.xml">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-rss"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>

                <main className="mt-12">
                    <PageComponent {...pageProps} />
                </main>
            </div>
        )
    }

    return PageComponentWithLayout
}

export default Layout
