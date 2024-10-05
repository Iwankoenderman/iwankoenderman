import React from "react"
import { Partytown } from '@builder.io/partytown/react';
import { Script } from "gatsby"

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID
const gaTrackingId = process.env.GATSBY_GA_MEASUREMENT_ID
const hotJarId = process.env.GATSBY_HOTJAR_ID; 

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

       <script
    key="partytown-vanilla-config"
    type="text/partytown"
    dangerouslySetInnerHTML={{
      __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','${ORIGIN}/gtag/js?id=${gaTrackingId}','gtag');
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}');
          `,
    }}
  />,   
  
  <script
  key="party-hotjar-config"
  type="text/partytown"
    dangerouslySetInnerHTML={{
      __html:`   (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hotJarId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
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



export const onRouteUpdate = ({ location }) => {
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }
  
    const pagePath = location ? location.pathname + location.search + location.hash : undefined;
  
    setTimeout(() => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', { page_path: pagePath });
      }
    }, 100);
  };
  