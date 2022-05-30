import React, { Component } from "react"
import DiarySession from './diaryEntries';
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import remarkGfm from 'remark-gfm'

const Dropdown = ({title,content}) => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div ref={parent}>
    <p className="pad dropdown-label" onClick={reveal}>{title}</p>
    { show && 

               <div class="content">{content}</div>
 }
        
  </div>
}

const MainDiary = (props) => {
    if(!props){
        return null;
    }
    return(
       <div>
            {
                props && props.entry?.map((entries, i) => {
                    return <> <header class="mx-auto max-w-3xl space-y-5">
                    <div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-5 " data-theme="business"> 
                    
                    <Dropdown title =   {<ReactMarkdown
                                children = {entries.created_at?.substring(0, 10)+ " "+entries.body.substring(0, 50)+"...."}
                                remarkPlugins={[remarkMath, remarkGfm]}
                                rehypePlugins={[rehypeKatex]}
                                />} content= {<DiarySession
                        key={i}
                            title={entries.created_at}
                            content={entries.body}
                            Date={entries.created_at}                  
                        />}/></div></header><br/></>
                })
            }
        </div>
    )
}

 export default MainDiary;

