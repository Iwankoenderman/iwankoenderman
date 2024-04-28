import * as React from "react"
import { globalHistory } from "@reach/router"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, titleen, description, descriptionen, nlhrefurl, enhrefurl, pathname, lang, langen, children }) => {
  const { title: defaultTitle, titleen: defaultTitleen, description: defaultDescription, descriptionen: defaultDescriptionen, image, siteUrl, twitterUsername, nlhrefurl: defaultnlHrefurl, enhrefurl: defaultenHrefurl} = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    titleen: titleen || defaultTitleen,
    description: description || defaultDescription,
    descriptionen: descriptionen || defaultDescriptionen,
    nlhrefurl: nlhrefurl || defaultnlHrefurl,
    enhrefurl: enhrefurl || defaultenHrefurl,
    lang: lang,
    langen: langen,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }
  const path = globalHistory.location.pathname
  const isEnglishpage = path === '/en/'
  if(isEnglishpage){
      return (
       <>
        <html lang={seo.langen} />
        <title>{seo.titleen}</title>
        <link rel="canonical" href={seo.enhrefurl}/>
        <meta name="robots" content="all"></meta>
        <meta name="description" content={seo.descriptionen} id="title" />
        <meta name="image" content={seo.image} id="image"/>
        <meta name="twitter:card" content="summary_large_image" id="image2"/>
        <meta name="twitter:title" content={seo.titleen} id="title2"/>
        <meta name="twitter:url" content={seo.url} id="url"/>
        <meta name="twitter:description" content={seo.descriptionen} id="description"/>
        <meta name="twitter:image" content={seo.image}  id="image3"/>
        <meta name="twitter:creator" content={seo.twitterUsername} id="creator"/>
        <link rel="alternate" hrefLang="en-gb" href={seo.enhrefurl}/>
        <link rel="alternate" hrefLang="nl-nl" href={seo.nlhrefurl}/>
        <link rel="alternate" hrefLang="x-default" href={seo.enhrefurl} />
       {children}
    </>)
      } 
  return (
    <>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.nlhrefurl}/>
      <meta name="robots" content="all"></meta>
      <meta name="description" content={seo.description} id="title" />
      <meta name="image" content={seo.image} id="image"/>
      <meta name="twitter:card" content="summary_large_image" id="image2"/>
      <meta name="twitter:title" content={seo.title} id="title2"/>
      <meta name="twitter:url" content={seo.url} id="url"/>
      <meta name="twitter:description" content={seo.description} id="description"/>
      <meta name="twitter:image" content={seo.image}  id="image3"/>
      <meta name="twitter:creator" content={seo.twitterUsername} id="creator"/>
      <link rel="alternate" hrefLang="nl-nl" href={seo.nlhrefurl}/>
      <link rel="alternate" hrefLang="en-gb" href={seo.enhrefurl}/>
      <link rel="alternate" hrefLang="x-default" href={seo.nlhrefurl} />
      {children}
    </>
  )
}

