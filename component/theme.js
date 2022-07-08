import { createContext, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { WiDaySunny } from "react-icons/wi"
import { MdOutlineDarkMode } from "react-icons/md"

function mode() {
    const [theme, setTheme] = useLocalStorage("theme", "light")

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.getElementsByTagName("html")[0].classList.remove("dark")
        } else {
            document.getElementsByTagName("html")[0].classList.add("light")
        }
    }, [])

    useEffect(() => {
        if (theme == "dark") {
            document.getElementsByTagName("html")[0].classList.add("light")
            window.localStorage.theme = "dark"
        } else {
            document.getElementsByTagName("html")[0].classList.remove("light")
            window.localStorage.theme = "light"
            // document.getElementsByTagName("html")[0].classList.add("light")
        }
    }, [theme])

    const toggleDarkMode = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", detectKeydown, true)
    }, [])
    const detectKeydown = (e) => {
        if (
            (e.key === "x" && (e.ctrlKey || e.metaKey)) ||
            (e.key === "l" && (e.ctrlKey || e.metaKey))
        ) {
            toggleDarkMode()
        }
    }
    return (
        <button onClick={toggleDarkMode}>
            {theme === "light" ? (
                 <MdOutlineDarkMode style={{ color: "white" }} />
            ) : (
                <WiDaySunny style={{ color: "black" }} />
            )}
        </button>
    )
}

export default mode
