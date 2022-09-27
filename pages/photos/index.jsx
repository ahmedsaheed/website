import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function photo(){
    const ref = useRef(null);
    
    useEffect(() => {
         document.body.classList.add("noscroll");
        const el = ref.current;
            const children = el.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                let grandchild ;
                for (let j = 0; j < child.children.length; j++) {
                    grandchild = child.children[j];
                }
                window.addEventListener('scroll', function() {
                    var element = grandchild
                    var position = element.getBoundingClientRect();
                    if(position.top < window.innerHeight && position.bottom >= 0) {
                        grandchild.style.transition= "300ms -webkit-filter linear";
                        grandchild.style.filter = "blur(0px)";
                    }
                });
            }
      }, []);

      const images = ["/v.jpeg", "/t.jpeg", "/o.jpeg", "/p.jpeg", "/q.jpeg", "/a.png", "/r.jpeg", "/e.png", "/aa.jpeg", "/bb.jpeg","/xx.jpeg", "/cc.jpeg", "/dd.jpeg", "/ee.jpeg","/u.jpeg","/f.png","/g.png","/l.png","/b.png","/z.jpeg","/ff.jpeg"
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
                            <img src={image} alt="image" />
                        </li>
                    )
                    )}
             
                </ul>
            </header>
        </>
        
    )

}
