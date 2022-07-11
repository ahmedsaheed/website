import { createContext, useEffect } from "react"
import { WiDaySunny } from "react-icons/wi"
import { MdOutlineDarkMode } from "react-icons/md"
import { useTheme } from 'next-themes'

const mode = () => {
    const { theme, setTheme } = useTheme()
        const toggleDarkMode = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
  
    return (
      <div>
        <button onClick={toggleDarkMode}>
        {theme === "light" ? (
             <WiDaySunny style={{ color: "black" }} />
               
            ) : (
                <MdOutlineDarkMode style={{ color: "white" }} />
            )}
        </button>
      </div>
      
    )
  }

export default mode
