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

  // Voeg Google Tag Manager (GTM) script toe via Partytown
  const gtmScript = document.createElement('script');
  gtmScript.type = "text/partytown"; // Laat Partytown het script laden
  gtmScript.src = `${ORIGIN}/gtm.js?id=${gtmTrackingId}`;
  gtmScript.async = true;
  document.head.appendChild(gtmScript);

  // Voeg optioneel Google Analytics toe via Partytown
  const gaScript = document.createElement('script');
  gaScript.type = "text/partytown"; // Partytown-laadtype
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtmTrackingId}`; // Vervang met je Tracking ID voor GA
  gaScript.async = true;
  document.head.appendChild(gaScript);

  // Initialiseer Google Analytics (als je Google Analytics gebruikt via GTM)
  window.dataLayer.push({
    'event': 'gtag.js',
    'gtm.start': new Date().getTime(),
  });
};

// onClientEntry kan worden verwijderd, want Partytown wordt al correct geïnitieerd via wrapRootElement


