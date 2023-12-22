import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';
import Lead from './lead'

export default function Ctamenu() {
  const intl = useIntl();
  return (
      <>
        <a href="https://meetings.hubspot.com/iwan-koenderman" 
        target="_blank" rel="noopener noreferrer"  aria-label="Plan zoomgesprek"> 
        {intl.locale === "nl" ? ( <Lead className="button-menucta" text="Plan zoomgesprek" />) : ( <Lead className="button-menucta"  text="Schedule zoom call"/>)}</a>
      </>
  );
}

