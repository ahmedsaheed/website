import { React } from "react"
import { useState, useRef, useEffect } from "react"
import autoAnimate from "@formkit/auto-animate"

const Dropdown = ({ date, title, content }) => {
    const [show, setShow] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = () => setShow(!show)

    return (
        <div ref={parent}>
            <p style={{margin: "0"}} className="ded pad dropdown-label" onClick={reveal}>
                {date.replace(/(\r\n|\n|\r)/gm, "")}
                {title}
            </p>
            {show && <div class="content">{content}</div>}
        </div>
    )
}

export default Dropdown
