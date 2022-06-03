import {React} from "react";

const Footer = () => {
    return(
        <footer>
            <nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10">
              <div
                class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between"
                data-theme="business"
                style={{ fontfamily: "ui-serif" }}
              >
                <a href="/">Made with ❤️ by Ahmed</a>
                <div class="space-x-4 flex items-center">
                  <a class="false" href="/">
                    © Ahmed Saheed 2022
                  </a>
                </div>
              </div>
            </nav>
          </footer>
    )
}

export default Footer