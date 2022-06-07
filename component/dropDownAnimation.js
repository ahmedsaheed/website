import {React} from 'react';
import { useState, useRef, useEffect } from "react"
import autoAnimate from "@formkit/auto-animate"

const Dropdown = ({ title, content }) => {
    const [show, setShow] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = () => setShow(!show)

    return (
        <div ref={parent}>
            <p className="pad dropdown-label" onClick={reveal}>
                {title}
            </p>
            {show && <div class="content">{content}</div>}
        </div>
    )
}

export default Dropdown;