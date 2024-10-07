import "@fontsource/clear-sans";

// Zorg ervoor dat je Google Analytics correct instelt
const GA_TRACKING_ID = process.env.GATSBY_GA_TRACKING_ID; // Zorg ervoor dat dit is ingesteld in je .env

// Functie om Google Analytics te initialiseren
const initializeAnalytics = () => {
  if (typeof window.gtag !== 'function') {
    // Laad de gtag.js bibliotheek als deze nog niet is geladen
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Gebruik de onRouteUpdate API van Gatsby
export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined;

  // Initialize Google Analytics
  initializeAnalytics();

  // Wacht een korte tijd om de gtag functie uit te voeren
  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);
};
