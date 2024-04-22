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
      frontmatter: { title, name, duration, thumbnailUrl, uploadDate, embedUrl, description, nlhrefurl, enhrefurl, lang }
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
  return (
  
  <Seo         title={title}
               description={description}
               nlhrefurl={nlhrefurl}   
               enhrefurl={enhrefurl}
               lang={lang}
               >
              <Script embedUrl={true}type = "application/ld+json">{JSON.stringify(videoscheme)}</Script>                                                    
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
      } 
    }
  }
`
