import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';
import CookieConsent, {Cookies} from "react-cookie-consent";

export default function CookieConsentBar() {
  const intl = useIntl();
  return (     
<>
         {intl.locale === "nl" ? 
        (<CookieConsent  enableDeclineButton
          onDecline ={() => {
            Cookies.remove("_ga");
            Cookies.remove("_ga_XHT2P6RP8W");
          }}
        location="bottom"
        buttonText="Accepteren"
        declineButtonText="Wijs af"
        ariaAcceptLabel="Accepteren"
        ariaDeclineLabel="Wijs af"
        cookieName="gatsbyconsentcookie"
        >
        Deze website gebruikt cookies voor optimale dienstverlening aan jou. Accepteer indien gewenst.
          </CookieConsent>
          ) : (
        <CookieConsent  enableDeclineButton
        onDecline ={() => {
          Cookies.remove("_ga");
          Cookies.remove("_ga_XHT2P6RP8W"); 
        }}
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        ariaAcceptLabel="Accepteren"
        ariaDeclineLabel="Wijs af"
        cookieName="gatsbyconsentcookie"
        >
        This website uses cookies to provide you with optimal service. Accept if desired.
      </CookieConsent> )}       
          </>
           );
        }
        