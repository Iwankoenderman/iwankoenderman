import React from "react"
import { Partytown } from '@builder.io/partytown/react';
import { Script } from "gatsby"

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents}) => {
  
   setHtmlAttributes({ lang: [`nl`], })
   setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
    <Script
    key="analytics" 
    type="text/partytown"
    strategy="off-main-thread"
    dangerouslySetInnerHTML={{
      __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '${ORIGIN}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmTrackingId}');`,
    }}
    />,
    <Script id="gtm-init" strategy="off-main-thread">
  {`
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' })
  `}
</Script>,
       <script
    key="partytown-vanilla-config"
    dangerouslySetInnerHTML={{
      __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src='/gtag/js?id='${gtmTrackingId}';
            m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.googletagmanager.com/gtag/js?id='${gtmTrackingId}','gtag');
  
            gtag('js', new Date());
            gtag('config', '${gtmTrackingId}');
          `,
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

   


