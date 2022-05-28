import React, { Component } from "react"
import { NextSeo } from 'next-seo'
export default class extends Component {

  
render () {

    return (
 <> 
 <NextSeo
        title="Ahmed Saheed's TIL"
        description="A place to document 'Today I Learnt'"
        canonical="https://saheed.codes/me"
        openGraph={{
          url: 'https://saheed.codes/me',
          title: "Ahmed Saheed's TIL",
          description: "A place to document 'Today I Learnt'",
        }}
      />
<head>

 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <link href="../styles/blog.css" rel="stylesheet"/>
 <title>Moi 👨🏾‍🦲 | Ahmed Saheed</title>
 <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
</head>
<body>
   

  <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">AHMED</a><div class="space-x-4 flex items-center hover:text-blue-600"><a class="false" href="/books">books</a><a class=" here false" href="#">algos</a><a class="text-am-green-light" href="/projects">projects</a><a class="false" href="/TIL">til</a><a class="false" href="/uses">tools</a><a class="false" href="/me">me</a><a class="text false" href="/rss/feed.xml"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"/>
</svg></a></div></div></nav>
  <header class="mx-auto max-w-3xl space-y-5"><h1 class="text-3xl font-am px-10" style = {{fontfamily: "ui-serif"}}>Algorithm</h1><div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full" data-theme="business"><p class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    In science fiction which was published around the 1920s, "It is always expected that future human beings would have enormous heads because they would have very big brains and they would be very wise. It didn't work that ways, what happened is the human race is building a brain outside its body. That is to say an interlocking electronic network of telephonic, television, radionic communication which is rapidly intelocked with computers, so that you will within a few years be able to plug your brain into a computer".</p></div>
     </header><br/>
     <center>
    <main>
    <div class='items'>
      <a href="/fun/bubblesort">
      <div class='item' data-theme="business">
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-0'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            Bubble Sort
          </text>
          <g clip-path='url(#clip-0)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
            Bubble Sort
            </text>
          </g>
        </svg>
      </div></a>
      <a href="/fun/selectionsort">
      <div class='item'  data-theme="business">
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-1'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            Merge Sort
          </text>
          <g clip-path='url(#clip-1)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
            Merge Sort
            </text>
          </g>
        </svg>
      </div></a>
      <div class='item'  data-theme="business">
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-2'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            Quick Sort
          </text>
          <g clip-path='url(#clip-2)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-aurora.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              Quick Sort
            </text>
          </g>
        </svg>
      </div>
      <div class='item'  data-theme="business">
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-3'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            Insertion Sort
          </text>
          <g clip-path='url(#clip-3)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
            Insertion Sort
            </text>
          </g>
        </svg>
      </div>
      {/* <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-4'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            Huitzi
          </text>
          <g clip-path='url(#clip-4)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-huitzi.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              Huitzi
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-5'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            Dalí
          </text>
          <g clip-path='url(#clip-5)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-dali.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              Dalí
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-6'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            The Bride
          </text>
          <g clip-path='url(#clip-6)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-bride.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              The Bride
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-7'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            The Man
          </text>
          <g clip-path='url(#clip-7)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-man.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              The Man
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-8'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            D
          </text>
          <g clip-path='url(#clip-8)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-d.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              D
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-9'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            V
          </text>
          <g clip-path='url(#clip-9)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              V
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-10'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            V II
          </text>
          <g clip-path='url(#clip-10)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              V II
            </text>
          </g>
        </svg>
      </div>
      <div class='item'>
        <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
          <defs>
            <clipPath id='clip-11'>
              <circle cx='0' cy='0' fill='#000' r='360px'></circle>
            </clipPath>
          </defs>
          <text class='svg-text' dy='.3em' x='50%' y='50%'>
            V III
          </text>
          <g clip-path='url(#clip-11)'>
            <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png'></image>
            <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
              V III
            </text>
          </g>
        </svg>
      </div> */}
    </div>
  </main></center>
     

</body> 
<footer><nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">Made with ❤️ by Ahmed</a><div class="space-x-4 flex items-center"><a class="false" href="/">© Ahmed Saheed 2022</a></div></div></nav>
</footer>
</>

    )
  }
}










