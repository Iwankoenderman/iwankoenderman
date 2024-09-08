import * as React from "react"
import Socialfollow from './socialfollow'
import { StaticImage } from "gatsby-plugin-image"
import Copyright from './copyright'
import Footermenu from './footermenu'
import {useIntl} from 'gatsby-plugin-intl';
import { useSiteMetadata } from "../hooks/use-site-metadata"
import CookieConsentBar from "./cookieconsentbar";
export default function Footer() {
  const {
  Plaats,
  Kvknr,
  BTWVat,
  BankRekNR,
   } = useSiteMetadata()  
const Woonplaats = Plaats
const Kamerkoophandel = Kvknr  
const Bankaccount = BankRekNR  
const Btwnum = BTWVat
const intl = useIntl();
  return (
<div className='footerblock'>
       <div className='footerblock__row'>
                 <div className='footerblock__row__column'>
                        <div className='footerblock__row__column--footer'>
                               <div className='footerenkelblock'>
                                     <div className='footerenkelblock--footerlegerow'>
                                     </div>
                                     <div className='footerenkelblock--footergroterfont'>
                                             <Socialfollow/>
                                     </div>
                                     <div className='footerenkelblock--footerlegerow'>
                                     </div>
                                             <Footermenu/>
                                     <div className='footerenkelblock--footerlegerow'>
                                     </div>
                                     <div className='footerenkelblock--normaalfont'>
                                     </div>
                                     <div className='footerenkelblock--normaalfont'>
                                    </div>
                              </div>
                         </div>
                   </div>
                  <div className='footerblock__row__column'>
                       <div className='footerblock__row__column--footer'>
                            <div className='footerenkelblock'>
                                   <div className='footerenkelblock--footernormaalfont'>
                                              {intl.locale === "nl" ? (
                                               <p>KvK-nummer:{"   "}{Kamerkoophandel}{"   "}gevestigd te{"   "}{Woonplaats}{"  "}Utrecht</p>
                                               ) : (
                                               <p>Commercial Register Number:{"   "}{Kamerkoophandel}{"   "}located in{"   "}{Woonplaats}{"   "}Utrecht, The Netherlands</p>
                                                )} 
                                   </div>
                                   <div className='footerenkelblock--footernormaalfont'>
                                               {intl.locale === "nl" ? (
                                               <p>BTW:{"   "}{Btwnum}</p>
                                               ) : (
                                               <p>vat:{"   "}{Btwnum}</p>
                                                )} 
                                  </div>
                                  <div className='footerenkelblock--footernormaalfont'>
                                              {intl.locale === "nl" ? (
                                              <p>Bank:{"   "}{Bankaccount}</p>
                                               ) : (
                                              <p>Bank:{"   "}{Bankaccount}</p>
                                              )} 
                                  </div>
                                  <div className='footerenkelblock--footernormaalfont'>
                                  </div> 
                                  <div className='footerenkelblock--footernormaalfont'>
                                   </div>
                            </div>
                      </div>
                 </div>
                <div className='footerblock__row__column'>
                       <div className='footerblock__row__column--footer'>
                              <div className='footerenkelblock--footerlegerow'>
                              </div>
                              <StaticImage
                                  src = "../images/Iwan-Koenderman-kl10.jpg" 
                                  titel = "Zwart wit foto van Ir. Iwan Koenderman | Online Business Coach  Online Profiler Blogger Photographer."
                                  aria-label= "Zwart wit foto van Ir. Iwan Koenderman | Online Business Coach  Online Profiler Blogger Photographer."
                                  alt = "Zwart wit foto van Ir. Iwan Koenderman | Online Business Coach  Online Profiler Blogger Photographer."
                                  placeholder="blurred"
                                  layout="fixed"
                                  width={105}
                                  heigh={158}
                                  loading="lazy"
                                   />
                               <div className='footerenkelblock--footernormaalfontrightalignbold'>
                                    
                             
                               <Copyright/>
                                     
                                   
                               </div>    
                               <CookieConsentBar/>   
                        </div>
                 </div>
           </div>
</div>
  )
}

