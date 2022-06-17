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
            document.getElementsByTagName("html")[0].classList.add("dark")
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark")
        }
    }, [])

    useEffect(() => {
        if (theme == "dark") {
            document.getElementsByTagName("html")[0].classList.add("dark")
            localStorage.theme = "dark"
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark")
            localStorage.theme = "light"
        }
    }, [theme])

    const toggleDarkMode = () => {
        if (theme == "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <button onClick={toggleDarkMode}>
            {theme === "light" ? (
                <MdOutlineDarkMode style={{ color: "black" }} />
            ) : (
                <WiDaySunny style={{ color: "white" }} />
            )}
        </button>
    )
}

export default mode
