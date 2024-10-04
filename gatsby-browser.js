import "@fontsource/clear-sans"
import React from 'react';
import { init, Partytown } from '@builder.io/partytown/react';

const ORIGIN = "https://www.googletagmanager.com";
const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID

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
};

// Wrap de root element voor Partytown
export const wrapRootElement = ({ element }) => {
  return <Partytown>{element}</Partytown>;
};
