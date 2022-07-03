import React from "react"
import Head from "next/head"
import { date } from "../pages/index"
import Theme from "./theme"
import { BiRss } from "react-icons/bi"
import SearchBar from "./search"
function Layout(PageComponent: any) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <>
                <Head>
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>
                <nav className="nav">
                    <div className="spacer">
                        <a className="hover-underline-animation" href="/">
                            cd ..
                        </a>
                    </div>
                    <div className="right">
                        <a className="hover-underline-animation" href="/second-brain">
                            garden
                        </a>
                        <a className="hover-underline-animation" href="/books">
                            books
                        </a>
                        <a className="hover-underline-animation" href="/fun">
                            fun
                        </a>
                        <a className="hover-underline-animation" href="/projects">
                            projects
                        </a>
                        <a className="hover-underline-animation" href="/TIL">
                            til
                        </a>
                        <a className="hover-underline-animation" href="/uses">
                            tools
                        </a>
                        <a className="" href="/rss/feed.xml" target="_blank">
                            <BiRss />
                        </a>
                        <a className="">
                            <Theme />
                        </a>
                    </div>
                </nav>
                <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
                    <main>
                        <PageComponent {...pageProps} />
                        {/* <SearchBar /> */}
                    </main>
                    <div className="pt-10 grey-text cent ">
                        <span className=" text-sm">
                            <a
                                target="_blank"
                                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                style={{ color: "inherit", borderBottom: "1px dotted" }}
                            >
                                CC BY-NC-SA 4.0
                            </a>{" "}
                            2021-{date.getFullYear()} © Ahmed Saheed
                        </span>
                        {/* <Footer /> */}
                    </div>
                </div>
            </>
        )
    }

    return PageComponentWithLayout
}

export default Layout

// function Footer(){
//     return (
//         <div className="dock">
//         <div className="dock-container">
//           <li className="li-1">
//             <div className="name">Finder</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png" alt="" />
//           </li>
//           <li className="li-2">
//             <div className="name">Siri</div>
//             <svg className="ico" width="24" height="24" viewBox="0 0 24 24" fill="cover"><path opacity="0.25" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill="var(--colors-gray10)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill="var(--colors-gray10)"></path><path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill="var(--colors-gray10)"></path></svg>          </li>
//           <li className="li-3">
//             <div className="name">LaunchPad</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png" alt="" />
//           </li>
//           <li className="li-4">
//             <div className="name">Contacts</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png" alt="" />
//           </li>
//           <li className="li-5">
//             <div className="name">Notes</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png" alt="" />
//           </li>
//           <li className="li-6">
//             <div className="name">Reminders</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png" alt="" />
//           </li>
//           <li className="li-7">
//             <div className="name">Photos</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png" alt="" />
//           </li>
//           <li className="li-8">
//             <div className="name">Messages</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853a55558a68e192ee08_messages.png" alt="" />
//           </li>
//           <li className="li-9">
//             <div className="name">FaceTime</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png" alt="" />
//           </li>
//           <li className="li-10">
//             <div className="name">Music</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png" alt="" />
//           </li>
//           <li className="li-11">
//             <div className="name">Podcasts</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853cc718ba9ede6888f9_podcasts.png" alt="" />
//           </li>
//           <li className="li-12">
//             <div className="name">TV</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png" alt="" />
//           </li>
//           <li className="li-12">
//             <div className="name">App Store</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png" alt="" />
//           </li>
//           <li className="li-14">
//             <div className="name">Safari</div>
//             <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png" alt="" />
//           </li>
//           <li className="li-bin li-15">
//             <div className="name">Bin</div>
//             <img className="ico ico-bin" src="https://findicons.com/files/icons/569/longhorn_objects/128/trash.png" alt="" />
//           </li>
//         </div>
//       </div>
//     )
// }
