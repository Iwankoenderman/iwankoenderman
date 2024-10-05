import "@fontsource/clear-sans"
import React from 'react';
import { init, Partytown } from '@builder.io/partytown/react';

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID
const hotJarId = process.env.GATSBY_HOTJAR_ID; // Voeg deze regel toe om de Hotjar ID uit omgevingsvariabelen te halen.

init(); // Initialiseer Partytown

export const onInitialClientRender = () => {
  console.log('Initial render is complete.');

  // Data Layer initialiseren voor GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Voeg GTM-script toe
  const gtmScript = document.createElement('script');
  gtmScript.src = `${ORIGIN}/gtm.js?id=${gtmTrackingId}`; // Vervang met je GTM-ID
  gtmScript.async = true;
  document.head.appendChild(gtmScript);

  // Voeg de Hotjar tracking code toe met Partytown
  const hotjarScript = document.createElement('script');
  hotjarScript.type = 'text/partytown'; // Dit zorgt ervoor dat het script in een Web Worker wordt uitgevoerd
  hotjarScript.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${hotJarId},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(hotjarScript);
};


// Wrap de root element voor Partytown
export const wrapRootElement = ({ element }) => {
  return <Partytown>{element}</Partytown>;
};
