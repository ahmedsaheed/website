import {createContext, useState} from "react"
import useLocalStorage from "use-local-storage"
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineDarkMode } from 'react-icons/md';


export const ThemeContext = createContext(null)
function mode(){
    
    const [theme,setTheme] = useState("dark");

    const toggledTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return(
        <ThemeContext.Provider value={{theme,toggledTheme}}>
       <body id={theme}>
            <button onClick={toggledTheme}>
                {theme === 'light' ? <MdOutlineDarkMode/> : <WiDaySunny/>}
            </button>
            
            </body>
            </ThemeContext.Provider>
    )
}

export default mode