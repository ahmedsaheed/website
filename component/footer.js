import { React } from "react"
import SearchBar from "./search"
const Footer = () => {
    return (
        <> <SearchBar />
        <footer>        
            <nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10">
                <div
                    class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between"
                    data-theme="business"
                    style={{ fontfamily: "ui-serif" }}
                >
                    <a class="remove" href="/">
                        Made with ❤️ by Ahmed
                    </a>
                    <div class="space-x-4 flex items-center">
                        <a class="remove false" href="/">
                            © Ahmed Saheed 2022
                        </a>
                    </div>
                </div>
            </nav>
        </footer>
        </>
    )
}

export default Footer
