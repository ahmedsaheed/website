import React, { Component } from "react"


export default class extends Component {
  render () {
    return (
 <> <head>
 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <link href="../styles/blog.css" rel="stylesheet"/>
 <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
</head>

<body>
  <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">AHMED</a><div class="space-x-4 flex items-center hover:text-blue-600"><a class="text false" href="/books">books</a><a class="text" href="/projects">projects</a><a class="here false" href="#">internet</a><a class="text false" href="/tools">tools</a><a class="text false" href="/me">me</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>
  <header class="mx-auto max-w-3xl space-y-5"><h1 class="text-4xl font-am px-10" style = {{fontfamily: "ui-serif"}}>Internet & Technology 🌐</h1><div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full" data-theme="business"><p class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    At age seven, maybe eight, my day got me my first real laptop. During this purchase the sales person said "It is not your right but a privilege" these words lived with me till date, thanks to my dad for constant reminder of those words. Although back then i had no idea of programming but i was a go to for typing letters, emails, powerpoint and coreldraw. On one afternoon, a collegue at high school took me the computer lab opened up command line and somehow solved linear expansivity in python. Ever since i've been at it!".</p></div></header>
   <main class="mx-auto max-w-3xl space-y-10 p-10">
   <a class="content-card block" href="/internet/phpMailer"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">PHPMailer </div><div class="text-xs">PHP</div></div><div class="text-sm">The classic and reliable email sender for PHP.</div></a>
   <a class="content-card block" href="/internet/userInput"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Purifying User Input</div><div class="text-xs">PHP</div></div><div class="text-sm">A tiny function that gets rid of any injections.</div></a>
   <a class="content-card block" href="/internet/functionals"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Functional </div><div class="text-xs">JAVA</div></div><div class="text-sm">Simplifying java programming with fuctionals</div></a>
   <a class="content-card block" href="/internet/springB"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Spring Boot</div><div class="text-xs">JAVA</div></div><div class="text-sm">Java's most outstanding framework</div></a>
   <a class="content-card block" href="/internet/algorithms"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Algorithms</div><div class="text-xs">JAVA</div></div><div class="text-sm">Efficient code.</div></a>
   <a class="content-card block" href="/internet/dataStructures"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Data Structures</div><div class="text-xs">JAVA</div></div><div class="text-sm">Best practices for manipulating and storing data</div></a>
   <a class="content-card block" href="/internet/mobile"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Basic In Mobile Dev</div><div class="text-xs">Flutter</div></div><div class="text-sm">The beginning of mobile development for me</div></a>
   <a class="content-card block" href="/internet/daisy"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Daisy UI</div><div class="text-xs">CSS</div></div><div class="text-sm">Fast & Sassy.</div></a>
   <a class="content-card block" href="/internet/tailwind"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Tailwind </div><div class="text-xs">CSS</div></div><div class="text-sm">The GOD of styling.</div></a>
   <a class="content-card block" href="/internet/wit"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">WIT</div><div class="text-xs">AI</div></div><div class="text-sm">Free and simple Artifical Intelligent tools.</div></a>
   <a class="content-card block" href="/internet/tts"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">Text to Speech</div><div class="text-xs">JAVA</div></div><div class="text-sm">TTS hacked up during school hackaton.</div></a>
   <a class="content-card block" href="/internet/sql"><div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 font-am">QUERIES</div><div class="text-xs">SQL</div></div><div class="text-sm">Robost touch on sql</div></a></main>
    <nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">Made with ❤️ by Ahmed</a><div class="space-x-4 flex items-center"><a class="false" href="https://anthonymorris.dev/">Inspired by amorriscode</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>

</body></>

    )
  }
}