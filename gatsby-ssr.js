import React from "react"
import { Partytown } from '@builder.io/partytown/react';

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents}) => {
  
   setHtmlAttributes({ lang: [`nl`], })
   setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
    <script key="google-tag-manager" type="text/partytown" src={`${ORIGIN}/gtm.js?id=${gtmTrackingId}`} />,
    <script 
    key="analytics" 
    type="text/partytown"
    dangerouslySetInnerHTML={{
      __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '${ORIGIN}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmTrackingId}');`,
    }}
    />,
    <script
    key="partytown-vanilla-config"
    dangerouslySetInnerHTML={{
      __html: `partytown = {
        resolveUrl(url, location) {
          if (url.hostname.includes('google-analytics')) {
             // Use a secure connection
             if (url?.protocol === 'http:') {
               url = new URL(url.href.replace('http', 'https'))
             }
             // Point to our proxied URL
             const proxyUrl = new URL(location.origin + '/__third-party-proxy')
             proxyUrl.searchParams.append('url', url)
             return proxyUrl
           }
           return url
        }
      }`,
    }}
  />,     
   ]),
   setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="${ORIGIN}/ns.html?id=${gtmTrackingId}" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />,
  ]);
}

   


