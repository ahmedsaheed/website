import React, { Component, useEffect} from "react"
import { NextSeo } from 'next-seo'
import { currentDayName } from '../src/date'



var greetings = ["Hi 👋🏾 ,",
                "Come in peace ☮️",
                "🕉️  Namaste",
                "Salam Alaykum ☪️"
];
var now = greetings[Math.floor(Math.random()*greetings.length)];

export default class extends Component {
     
  render () 
  {
    return (
 <>
 <NextSeo
        title="Ahmed Saheed"
        description="Vestibule to my brain datasets"
        canonical="https://saheed.codes/"
        openGraph={{
          url: 'https://saheed.codes/',
          title: "Ahmed Saheed",
          description: 'Vestibule to my brain datasets',
        }}
      />
 <head>
            <title class>Ahmed Saheed</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.3.5/tailwind.min.css'/><link rel='stylesheet' href="./style.css"/>
             <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
             <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>


        </head>
        
        <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" data-offset="50">
        <div className="header-area"><header className="header"><nav aria-label="primary" className="menu"><a href="/blah" className="menu-item"><span className="text menu-item-inner"><br/>BACKYARD 🌼</span></a></nav>
        <nav> 
                                <div className="social-network">
                                    <a href="https://github.com/ahmedsaheed" target="_blank"><i className="text bi-github" aria-hidden="true"></i></a>
                                    <a href="https://twitter.com/helloahmed_" target="_blank"><i className="text bi-twitter" aria-hidden="true"></i></a>                                    
                                    <a href="/rss/feed.xml" target="_blank"><i className="text bi bi-rss" aria-hidden="true"></i></a>                                    
                                </div>
                            
                                        </nav>
                                        </header>
                                    </div>
                    <div className="back-titre">
                        <div className="wrapper">
                        <h1 class ="typing-demo">AHMED SAHEED</h1>
                        </div>
                        
                        <h2 className="tagline">An upcoming software engineer & Family tech support since 7.</h2>
                        <h2 className="tagline">{now} Hope you're having a good {currentDayName()} ?</h2>

                    </div>
                <div class ="whiteSpace"></div>
                <header class="mx-auto max-w-3xl space-y-5"><h1 class="text-4xl font-am px-10" style = {{fontfamily: "ui-serif"}}> </h1><div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full" data-theme="business"><p class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    This vestibule door opens onto my so fine and maybe unfine datasets of my brain. More like a library where i store valuable peice of computer related information.<br/> Currently, i am engaging in college work while doing some side projects and contributing to open source. Also i am having a great time being lost in Tolstoy's literature alongside puzzling human existence. Please feel free and navigate around, you're highly welcomed.</p></div>
    </header>
               <br/>
                <footer className="footer"><div className="container"><div className="footer-inner"><p className="footer-text">© <a href="https://github.com/ahmedsaheed">Ahmed Saheed 2022</a></p></div></div></footer>
                
            </body></>

    )
  }
}