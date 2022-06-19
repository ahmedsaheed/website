import React from "react"
function Layout(PageComponent: any) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
                <nav className="top-0 px-5 py-2.5 w-full z-10 font-am ">
                    <div
                        className="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between"
                        data-theme="business"
                    >
                        <a className="text" href="/">
                            AHMED
                        </a>
                        <div className="space-x-4 flex items-center hover:text-blue-600">
                            <a className="here false" href="#">
                                garden
                            </a>
                            <a className="false" href="/books">
                                books
                            </a>
                            <a className="false" href="/fun">
                                fun
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
                        </div>
                    </div>
                </nav>
                <main>
                    <PageComponent {...pageProps} />
                </main>
            </div>
        )
    }

    return PageComponentWithLayout
}

export default Layout
