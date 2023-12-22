import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';

export default function Ctabutton({Urlnl, Urlen, Arlabnl, Arlaben, ButTxtnl, ButTxten }) {
  const intl = useIntl();
  return (
      <>
                            {intl.locale === "nl" ? (  
                                                <a href={Urlnl} 
                                                className="button-cta"   target="_blank" rel="noopener noreferrer" 
                                                aria-label={Arlabnl}>{ButTxtnl}</a>
                                                ) : (
                                                <a href={Urlen} 
                                                className="button-cta"   target="_blank" rel="noopener noreferrer" 
                                                aria-label={Arlaben}  >{ButTxten}</a>
                                               )}  
                                                
      </>
  );
}

  