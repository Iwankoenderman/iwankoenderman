import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';
import { StaticImage } from "gatsby-plugin-image"

export default function Introafbeeelding() {
  const intl = useIntl();
  return (
<>
<div className='mainblock__hoofdrow'> 
<div className='mainblock__pakket'> 
                                         <div className='mainblock__pakket__column2'> 
                                              <div className='mainblock__pakket__column2--failure'>
                                              <StaticImage
                                                src = "../images/eenslaginderondtewerken.png"
                                                titel = "Weergave van je een slag in de rondte werken"
                                                aria-label="Weergave van je een slag in de rondte werken"
                                                alt = "Weergave van je een slag in de rondte werken"
                                                placeholder="blurred"
                                                layout="fixed"
                                                height ={200}
                                                width = {200}
                                                loading = "lazy" /> 
                                                {intl.locale === "nl" ? (<p>Je benut niet je volle potentie 24/7 </p> ) : ( <p>You're not utilizing your full potential 24/7"</p>)}
                                              </div>
                                        </div>
                                        <div className='mainblock__pakket__column2'> 
                                                 <div className='mainblock__pakket__column2--failure'>
                                                 {intl.locale === "nl" ? (
                                                   <StaticImage
                                                   src = "../images/jeverdientnietgenoegeuro.png"
                                                   titel = "Weergave van niet genoeg euro verdienen"
                                                   aria-label= "Weergave van niet genoeg euro verdienen"
                                                   alt = "Weergave van niet genoeg euro verdienen"
                                                   placeholder="blurred"
                                                   layout="fixed"
                                                   height ={200}
                                                   width = {200}
                                                   loading = "lazy" />        
                                                 ) : (
                                                  <StaticImage
                                                   src = "../images/youdonotearnenoughmoney.png"
                                                   titel = "Display of not earning enough dollars"
                                                   aria-label="Display of not earning enough dollars"
                                                   alt = "Display of not earning enough dollars"
                                                   placeholder="blurred"
                                                   layout="fixed"
                                                   height ={200}
                                                   width = {200}
                                                   loading = "lazy" />  
                                                 )} 
                                                {intl.locale === "nl" ? (<p>Je wordt niet op waarde geschat met wat je verdient.</p> ) : ( <p>You are not valued for what you earn.</p>)}
                                                </div>
                                           </div> 
                                           <div className='mainblock__pakket__column2'> 
                                              <div className='mainblock__pakket__column2--failure'>
                                              <StaticImage
                                                src = "../images/jebentnietonlinezichtbaar.png"
                                                titel ="Weergave van je niet online zichtbaar zijn"
                                                aria-label="Weergave van je niet online zichtbaar zijn"
                                                alt="Weergave van je niet online zichtbaar zijn"
                                                placeholder="blurred"
                                                layout="fixed"
                                                height ={200}
                                                width = {200}
                                                loading = "lazy" /> 
                                                {intl.locale === "nl" ? (<p>Je ideale klant lijkt je niet te vinden</p> ) : (< p>Your ideal client doesn't seem to find you.</p>)}
                                                 </div>
                                        </div>
                                           
                                           </div>
                                           </div>
 </>
   );
}