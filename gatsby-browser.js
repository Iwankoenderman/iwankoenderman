import "@fontsource/clear-sans"

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

  // gatsby-browser.js
export const onInitialClientRender = () => {
  console.log('Initial render is complete, waiting for Partytown to initialize.');

  setTimeout(() => {
    console.log('Partytown should be ready now, executing GTM script.');
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  }, 100); // Wacht 100 ms om Partytown tijd te geven om te initialiseren
};
