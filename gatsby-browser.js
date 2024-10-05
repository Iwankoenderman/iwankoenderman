import "@fontsource/clear-sans";
import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID || "GTM-XXXXXX"; // Zorg voor een fallback

// Initialiseer Partytown via de Partytown component in wrapRootElement
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Partytown debug={true} />
      {element}
    </>
  );
};

export const onInitialClientRender = () => {
  console.log('Initial render is complete.');

  // Data Layer initialiseren voor GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Voeg GTM-script toe via Partytown
  const gtmScript = document.createElement('script');
  gtmScript.type = "text/partytown"; // Laat Partytown het script laden
  gtmScript.src = `${ORIGIN}/gtm.js?id=${gtmTrackingId}`;
  document.head.appendChild(gtmScript);
};

// onClientEntry is niet meer nodig voor Partytown.init()
export const onClientEntry = () => {
  console.log('Client entry complete.');
};

