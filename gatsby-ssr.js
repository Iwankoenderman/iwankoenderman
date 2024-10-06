import React from "react"
import { Partytown } from '@builder.io/partytown/react';

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID
const gaTrackingId = process.env.GATSBY_GA_MEASUREMENT_ID
const hotJarId = process.env.GATSBY_HOTJAR_ID; 
const linkedinTrackingId = process.env.GATSBY_LINKEDIN_PARTNER_ID;

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents}) => {
  
   setHtmlAttributes({ lang: [`nl`], })
   setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
    <script
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
    strategy="off-main-thread"
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
  strategy="off-main-thread"
  type="text/partytown"
    dangerouslySetInnerHTML={{
      __html:`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hotJarId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
    }}
    />,   
    <script 
    key="linkedin" 
    strategy="off-main-thread"
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html:` 
    _linkedin_partner_id =${linkedinTrackingId}; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
     window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
    ;`
    }}
    />,

    <script 
    key="linkedin-insight" 
    strategy="off-main-thread"
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html:` (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
         window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script"); b.type = "text/javascript";b.async = true; 
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})
        (window.lintrk);`
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

    <noscript key="linkedin-noscript"
    dangerouslySetInnerHTML={{
        __html: `
    <img
      height="1"
      width="1"
      style={{ display: 'none' }}
      alt=""
      src="https://px.ads.linkedin.com/collect/?pid=${linkedinTrackingId}&fmt=gif">
       `,
      }}
    />
  ,
  ]);
}

   


