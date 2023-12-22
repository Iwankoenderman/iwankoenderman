import * as React from "react";
import Ctabutton from '../components/ctabutton'
import {useIntl} from 'gatsby-plugin-intl';
import Paragraafnormaal from '../components/paragraafnormaal'
export default function Fold() {
   
     const intl = useIntl();

  return (  
<>
                       <div className='mainblock__hoofdrow'>
                            <div className='mainblock__hoofdrow--fold'>
                                 {intl.locale === "nl" ? (<p>Maak een afspraak en start met:</p>) : (<p>Make an appointment and start: </p>)}
                                 {intl.locale === "nl" ? (<p>● duidelijk verwoorde boodschap</p>) : (<p>● with a clear message;</p>)} 
                                 {intl.locale === "nl" ? (<p>● voor jouw social media strategie </p>) : (<p>● for your social media strategy</p>)}
                                 {intl.locale === "nl" ? (<p>● claim je expert status</p>) : (<p>● claim your expert status;</p>)}                                
                           </div>
                       </div>   
                             <Ctabutton
                             Urlnl="https://bewustsociaalopweb.hubspotpagebuilder.com/nederlands-tal" 
                             Urlen="https://bewustsociaalopweb.hubspotpagebuilder.com/download-page-ebook-13-ways-to-stay-online-in-touch-iwan-koenderman" 
                             Arlabnl="Download gratis e-book"
                             Arlaben="Download free E-book"
                             ButTxtnl="Download gratis e-book"
                             ButTxten="Download free E-book"/>
 
                             <Paragraafnormaal
                             paragraafnormaal1nl = "Ontvang mijn gratis e-book met 5 stappen om meer klanten op social media te krijgen via online marketing, met jouw boodschap, content creatie en planning"
                             paragraafnormaal1en = "Get my free e-book with 5 steps to get more clients on social media through online marketing, using your message, content creation, and planning."/>                         
 </>
   );
}