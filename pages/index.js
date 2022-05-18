import React, { Component } from "react"

var greetings = ["Hi, welcome 👋🏾",
                "Come in peace ☮️",
                "🕉️  Namaste",
                "Salam Alaykum ☪️"
];
var now = greetings[Math.floor(Math.random()*greetings.length)];
export default class extends Component {
     
  render () {
    return (
 <><head>
            <title>👋 Ahmed Saheed</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.3.5/tailwind.min.css'/><link rel='stylesheet' href="./style.css"/>
             <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
             <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>


        </head>
        
        <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" data-offset="50">
        <div className="header-area"><header className="header"><nav aria-label="primary" className="menu"><a href="/blog" className="menu-item"><span className="text menu-item-inner"><br/>BACKYARD 🌼</span></a></nav>
        <nav> 
                                <div className="social-network">
                                    <a href="https://github.com/ahmedsaheed" target="_blank"><i className="text bi-github" aria-hidden="true"></i></a>
                                    <a href="https://twitter.com/helloahmed_" target="_blank"><i className="text bi-twitter" aria-hidden="true"></i></a>                                    
                                </div>
                            
                                        </nav>
                                        </header>
                                    </div>
                    <div className="back-titre">
                        <h1>Ahmed Saheed</h1>
                        <h2 className="tagline">Tolstoy's Fan & Official family tech support since 7.</h2>
                        <h2 className="tagline">{now}</h2>

                    </div>
                    {/* <div className="feature-grid"><div className="feature"><a href="/blog">
                        <h3 className="feature-title">Leo Tolstoy</h3><p>I have lived through much, and now I think I have found what is needed for happiness. A quite secluded
                            life in the country, with the possibility of being useful to people to whom it is easy to do good, and who ar not accustomed to have it done to them; then work which one hope
                            may be of use; then rest, nature, books, music, love for ones neighbor - such is my ideal of happiness.
                        </p></a></div>
                        <div className="feature"><a href="/internet/internetHome"><h3 className="feature-title">The Internet</h3><p>In science fiction which was published around the 1920s, "It is always expected that future human beings would have enormous heads because they would have very big brains and they would be very wise. It didn't work that ways, what happened is the human race is building a brain outside its body. That is to say an interlocking electronic network of telephonic, television, radionic communication which is rapidly intelocked with computers, so that you will within a few years be able to plug your brain into a computer".</p></a></div>
                        <div className="feature"><a href="/blog"><h3 className="feature-title">End Of Everything</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra ex, ut cursus ligula. Nullam fermentum molestie erat vitae tincidunt. Ut rutrum mi ac urna bibendum iaculis. In non sapien aliquet, semper dolor ut, volutpat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor in urna vel finibus.</p></a></div>
                        <div className="feature"><a href="/blog"><h3 className="feature-title">FLOW</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra ex, ut cursus ligula. Nullam fermentum molestie erat vitae tincidunt. Ut rutrum mi ac urna bibendum iaculis. In non sapien aliquet, semper dolor ut, volutpat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor in urna vel finibus.</p></a></div>
                        <div className="feature"><a href="/blog"><h3 className="feature-title">Mastery Of Love</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra ex, ut cursus ligula. Nullam fermentum molestie erat vitae tincidunt. Ut rutrum mi ac urna bibendum iaculis. In non sapien aliquet, semper dolor ut, volutpat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor in urna vel finibus.</p></a></div>
                        <div className="feature"><a href="/blog"><h3 className="feature-title">Believes, Cultures & Religion</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra ex, ut cursus ligula. Nullam fermentum molestie erat vitae tincidunt. Ut rutrum mi ac urna bibendum iaculis. In non sapien aliquet, semper dolor ut, volutpat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor in urna vel finibus.</p></a></div></div> */}
                <div class ="whiteSpace"></div>
                <header class="mx-auto max-w-3xl space-y-5"><h1 class="text-4xl font-am px-10" style = {{fontfamily: "ui-serif"}}>Vestibule </h1><div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full" data-theme="business"><p class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    Throughout the world there are many different gardens that people have designed. In a Japanese garden, every tree is perfectly pruned, without a leaf out of place. Nothing is planted without forethought as to the exact place appropriate to it.There are English gardens that are famous for their roses and perfect lines of shrubbery. The number of garden types are too numerous to mention. One thing is true of all gardens. It is joint creation between man's intention to create a space of tranquility and nature's ability to comply.</p></div></header>
               <br/>
                <footer className="footer"><div className="container"><div className="footer-inner"><p className="footer-text">Made with ❤︎ by the <a href="https://github.com/ahmedsaheed">Ahmed</a></p></div></div></footer>
                
            </body></>

    )
  }
}