import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, nlhrefurl, enhrefurl, pathname, lang, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, nlhrefurl: defaultnlHrefurl, enhrefurl: defaultenHrefurl } = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    nlhrefurl: nlhrefurl || defaultnlHrefurl,
    enhrefurl: enhrefurl || defaultenHrefurl,
    lang: lang,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }
  return (
    <>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.nlhrefurl}/>
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

