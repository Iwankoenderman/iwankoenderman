import * as React from "react"
import Layoutlanding from "../components/layoutlanding"
import { graphql, Script} from "gatsby"
import { Seo } from "../components/seo"
import {changeLocale,} from "gatsby-plugin-intl";
import { useEffect } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Anderepage({ data, location, children }) {
const { title,
     } = useSiteMetadata()
const post = data.mdx
useEffect(() => {
    if (post.frontmatter.lang !== "nl") {
      changeLocale(post.frontmatter.lang);
    }
  }, [post.frontmatter.lang]);

  return (
   <Layoutlanding location={location}  title={title}>
             <div className='mainblock'>
                    <div className='mainblock__hoofdrow'>
                            <div className='mainblock__hoofdrow--heading'>
                                   <h1>{post.frontmatter.titlepage}{" "} </h1>                      
                            </div>
                   </div>
                   <div className='mainblock__hoofdrow'>
                              <div className='mainblock__hoofdrow--normaal'>
                              {children}
                              </div>              
                  </div>
             </div>
    </Layoutlanding>
  );
}

export const Head = ({
  data: {
    mdx:{
      frontmatter: { title, name, duration, thumbnailUrl, uploadDate, embedUrl, description, nlhrefurl, enhrefurl, lang, faqvraag1, faqanswer1, faqvraag2, faqanswer2 }
    }
  }
}) => {
  const videoscheme = { "@context": "https://schema.org",
                    "@type": "VideoObject",
                    name,
                    description,
                    thumbnailUrl,
                    uploadDate,
                    duration,
                    "publisher": {
                                "@type": "Organization",
                                "name": "Iwan koenderman",
                                "logo": {
                                  "@type": "ImageObject",
                                  "url": "https://iwankoenderman.com/logoik5.jpg",
                                  "width": "525",
                                  "height": "525"
                                },
                     },  
                     embedUrl}
  const faqscheme ={"faqpage":  
             {  "@type": "FAQPage",
              "mainEntity": [{
              "@type": "Question",
              "name": faqvraag1,
              "acceptedAnswer": {
              "@type": "Answer",
              "text": faqanswer1
           }
           },
           {
              "@type": "Question",
              "name": faqvraag2,
              "acceptedAnswer": {
              "@type": "Answer",
              "text": faqanswer2
          }
          }]
          }
  }                   
  return (
  
  <Seo         title={title}
               description={description}
               nlhrefurl={nlhrefurl}   
               enhrefurl={enhrefurl}
               lang={lang}
               >
              {(embedUrl ? true : null) && (  
              <Script type = "application/ld+json">{JSON.stringify(videoscheme)}</Script> )}   
              {(faqvraag1 ? true : null) && (  
              <Script type = "application/ld+json">{JSON.stringify(faqscheme)}</Script> )}                                                 
</Seo>   
  )
};
export const AnderepageQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        titlepage
        name
        date
        lang
        description
        duration
        thumbnailUrl
        uploadDate
        embedUrl
        nlhrefurl 
        enhrefurl
        faqvraag1
        faqanswer1
        faqvraag2
        faqanswer2
      } 
    }
  }
`
