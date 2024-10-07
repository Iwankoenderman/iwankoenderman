import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const linkedInPartnerId = process.env.GATSBY_LINKEDIN_PARTNER_ID;

const LinkedInInsightTag = () => {
  const [cookies] = useCookies(['gatsbyconsentcookie']);

  useEffect(() => {
    const loadLinkedInScript = () => {
      if (!linkedInPartnerId) {
        console.error('LinkedIn Partner ID is niet beschikbaar.');
        return;
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      script.defer = true; // Defer het script voor betere performance
      script.onload = () => {
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(linkedInPartnerId);
      };
      document.head.appendChild(script);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) { // Gebruik window.scrollY
        loadLinkedInScript();
        window.removeEventListener('scroll', handleScroll); // Verwijder de scroll event listener na het laden
      }
    };

    // Controleer of cookies zijn geaccepteerd
    if (cookies.gatsbyconsentcookie === 'true') {
      window.addEventListener('scroll', handleScroll); // Voeg scroll event listener toe

      // Fallback: Laad het script na 10 seconden als de gebruiker niet scrollt
      const timeoutId = setTimeout(() => {
        loadLinkedInScript();
      }, 10000); // 10 seconden

      // Opruimen bij demontage van de component
      return () => {
        clearTimeout(timeoutId); // Verwijder de timeout als de component wordt gedemonteerd
        const existingScript = document.querySelector('script[src="https://snap.licdn.com/li.lms-analytics/insight.min.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        window.removeEventListener('scroll', handleScroll); // Zorg ervoor dat de listener wordt verwijderd
      };
    } else {
      console.log('LinkedIn Insight Tag niet geladen: toestemming geweigerd.');
    }
  }, [cookies]);

  return (
    <>
      {/* Voeg het noscript-gedeelte toe voor non-JS tracking */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          alt="LinkedIn Insight Tag" 
          src={`https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif`} 
        />
      </noscript>
    </>
  );
};

export default LinkedInInsightTag;
