import * as React from "react"
import Item from './item'
import {useIntl} from 'gatsby-plugin-intl';

export default function Footermenu() {
  const intl = useIntl();
  const locale = intl.locale !== "nl" ? `/${intl.locale}` : "";
  return (
      <>
              <div className='footerenkelblock--normaalfont'>
                   {intl.locale === "nl" ? (
                   <a href={`${locale}/privacystatementencookiepolicy/`} target="_blank" rel="noreferrer noopener "aria-label="AVG en cookiebeleid" className="Footer link"  ><Item text="AVG en cookiebeleid" /></a>
                    ) : ( 
                    <a href={`${locale}/privacystatementandcookiepolicy/`} target="_blank" rel="noreferrer noopener"  aria-label="GDPR and cookie policy" className="Footer link" ><Item text="GDPR and cookie policy" /></a>
                     )}
              </div>
              <div className='footerenkelblock--footerlegerow'>
              </div>
              <div className='footerenkelblock--normaalfont'> 
                   {intl.locale === "nl" ? (
                   <a href={`${locale}/algemenevoorwaarden/`}target="_blank" rel="noreferrer noopener" aria-label="Algemene voorwaarden" className="Footer link"  > <Item text="Algemene voorwaarden" /></a> 
                   ) : ( 
                    <a href={`${locale}/termandconditions/`}target="_blank" rel="noreferrer noopener" aria-label="Terms and Conditions" className="Footer link" > <Item text="Terms and Conditions" /></a> 
                    )}
            </div> 
            <div className='footerenkelblock--normaalfont'>  
            </div> 
      </>
  );
}

