import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function photo(){
    const ref = useRef(null);
    
    useEffect(() => {

        const observer = new IntersectionObserver((elements) => {
            elements.forEach((el) => {
                if (el.isIntersecting) {
                        el.target.style.transition= "300ms -webkit-filter linear";
                        el.target.style.filter = "blur(0px)";
                }else{
                    el.target.style.filter = "blur(32px)";
            }
            });
        });
        const images = document.querySelectorAll('.theimage');
        images.forEach((image) => observer.observe(image));    
      }, []);

      const images = ["/v.jpeg", "/t.jpeg", "/o.jpeg","/ll.jpeg","/mm.jpeg", "/p.jpeg", "/q.jpeg", "/a.png", "/r.jpeg", "/e.png", "/aa.jpeg", "/bb.jpeg","/hh.jpeg","/xx.jpeg","jj.jpeg", "/cc.jpeg", "/dd.jpeg", "/ee.jpeg","/u.jpeg","gg.jpeg","/f.png","/g.png","/l.png","/b.png","/z.jpeg","/ff.jpeg"
                        ]
      
    return(
        <>
        <NextSeo
                title="Ahmed Saheed's TIL"
                description="Ahmed Saheed's Pictures"
                canonical="https://saheed.codes/photos"
                openGraph={{
                    url: "https://saheed.codes/photos",
                    title: "Ahmed Saheed's Pictures",
                    description: "A place to document things i find interesting",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <title>Photos by Ahmed Saheed</title>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            </Head>
            <header  className="photos">
                <ul style={{padding: "2px"}} ref={ref}>
                    {images.map((image, index) => (
                        <li key={index} className="imageee">
                            <img className="theimage" src={image} alt="image" />
                        </li>
                    )
                    )}
             
                </ul>
            </header>
        </>
        
    )

}
