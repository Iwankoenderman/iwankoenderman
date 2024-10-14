import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const facebookPixelId = process.env.GATSBY_FACEBOOK_PIXEL_ID; // Zorg ervoor dat je dit ID in je .env-bestand hebt

const FacebookPixel = () => {
  const [cookies] = useCookies(['gatsbyconsentcookie']);

  useEffect(() => {
    console.log('Waarde van gatsbyconsentcookie:', cookies.gatsbyconsentcookie); // Log de cookie waarde
    console.log('Facebook Pixel ID:', facebookPixelId); // Log de pixel ID

    const loadFacebookPixelScript = () => {
      if (!facebookPixelId) {
        console.error('Facebook Pixel ID is niet beschikbaar.');
        return;
      }

      // Facebook Pixel code
      !function(f,b,e,v,n,t,s) {
        if(f.fbq) return; 
        n=f.fbq=function() {
          n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments);
        };
        if(!f._fbq) f._fbq=n; 
        n.push=n; 
        n.loaded=!0; 
        n.version='2.0'; 
        n.queue=[]; 
        t=b.createElement(e); 
        t.async=!0; 
        t.src=v; 
        s=b.getElementsByTagName(e)[0]; 
        s.parentNode.insertBefore(t,s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      // Initialiseer de pixel en track een paginaweergave
      window.fbq('init', facebookPixelId); 
      window.fbq('track', 'PageView'); 
    };

    const handleScroll = () => {
      if (window.scrollY > 300) { // Gebruik window.scrollY
        loadFacebookPixelScript();
        window.removeEventListener('scroll', handleScroll); // Verwijder de scroll event listener na het laden
      }
    };

    // Controleer of cookies zijn geaccepteerd
    if (cookies.gatsbyconsentcookie === true) {
      window.addEventListener('scroll', handleScroll); // Voeg scroll event listener toe

      // Fallback: Laad het script na 10 seconden als de gebruiker niet scrollt
      const timeoutId = setTimeout(() => {
        console.log('Fallback: Facebook Pixel script wordt geladen na 10 seconden'); // Debug
        loadFacebookPixelScript();
      }, 10000); // 10 seconden

      // Opruimen bij demontage van de component
      return () => {
        clearTimeout(timeoutId); // Verwijder de timeout als de component wordt gedemonteerd
        const existingScript = document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        window.removeEventListener('scroll', handleScroll); // Zorg ervoor dat de listener wordt verwijderd
      };
    } else {
      console.log('Facebook Pixel niet geladen: toestemming geweigerd.');
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
          alt="Facebook Pixel" 
          src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`} 
        />
      </noscript>
    </>
  );
};

export default FacebookPixel;
