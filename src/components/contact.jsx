import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl'
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Ctabutton from '../components/ctabutton.js'
import Emptyrow from '../components/emptyrow'
import Head2 from '../components/head2'

export default function Contact() {
  const { sloganbedrijfalt,   
    phonenr,
    mailAdres,
    phonelink,
    whatsapplink,
    telegramlink,
     } = useSiteMetadata()      
const telePhone = phonenr
const telePhonkelink = phonelink
const MailAdres = mailAdres
const whatsapper = whatsapplink
const telegrammer = telegramlink
  const intl = useIntl();
  return (
<>


                <Head2
                head2nl = "Heb je vragen, ik help je graag:"
                head2en = "Do you have any questions, I am happy to help you:" />
                <div className='mainblock__hoofdrow__column1'> 
        
          
                      <StaticImage
                      src = "../images/IMG2000021021verbc.jpg"
                      alt = {`${"Stay in touch met Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                      titel = {`${"Stay in touch met Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                      aria-label=  {`${"Stay in touch met Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                      placeholder="blurred"
                      layout="fixed"
                      height ={479}
                      width = {320}
                     loading = "lazy" />  
                </div>
              


           <div className='mainblock__hoofdrow__column1'>
                      {intl.locale === "nl" ? (       
                      <p>Iwan Koenderman | Online boodschap Coach, social media coach, online profiler, blogger en fotograaf. Sleutelwoorden zijn creativiteit, analytisch en doorzetter.</p>     
                      ) : (          
                      <p>Iwan koenderman | Online message Coach, social media coach, online profiler, blogger and photographer. Keywords are creativity, analytical and go-getter.</p> )} 
          </div>

          <div className='mainblock__hoofdrow__column1'>
            {intl.locale === "nl" ? (       
                      <p>Mischien is een online boodschap coach een incorrecte benaming. Maar het maakt wel meteen duidelijk waarmee ik je kan helpen. Het zit ergens tussen een purpose-driven (door hogere doelen gedreven) coach,  en een storytelling (door het verhaal gedreven) coach in.</p>     
                      ) : (          
                      <p>Perhaps an online message coach is an incorrect name. But it immediately makes it clear how I can help you. It is somewhere between a purpose-driven coach and a storytelling coach.</p> )} 
            </div>
                       

          <div className='mainblock__hoofdrow__column1'>
            {intl.locale === "nl" ? (       
                      <p>Hobby: fotografie, strategische spelen, fitness, films, framework Gatsby</p>     
                      ) : (          
                      <p>Hobby: photography, strategy games, fitness, movies, framework Gatsby</p> )} 
            </div>
                       
            <div className='mainblock__hoofdrow__column1'>
                      <div className='mainblock__hoofdrow__column1--onlydesktopadreslinks'>  
                                WhatsApp / Telegram / tel:{" "}{telePhone}
                       </div>
            <div className='mainblock__hoofdrow__column1'>           
                        <div className='mainblock__hoofdrow__column1--onlydesktopadreslinks'> 
                          <a href={MailAdres} className="maildesklink">info@iwankoenderman.com</a>                                                           
                         </div>   
           </div>
           <div className='mainblock__hoofdrow__column1'>
                        <div className='mainblock__hoofdrow__column1--mobiel'> 
                        <p>{" "}</p>
                        </div>
             </div>    
             <div className='mainblock__hoofdrow__column1'>  
             <div className='mainblock__hoofdrow__column1--mobiel'> 
                                          {intl.locale === "nl" ? (       
                                          <p>Je kunt me zo bereiken. Klik op een van de volgende opties:</p>     
                                           ) : (          
                                          <p>You can reach me like this. Click on one of the following options:</p> )}  
                      </div>
                      <div className='mainblock__hoofdrow__column1--mobiel'> 
                                          {intl.locale === "nl" ? (       
                                          <a href={whatsapper} className="maildesklink">App me! 0622195160</a>     
                                           ) : (          
                                            <a href={whatsapper} className="maildesklink">Message me on the app! 0622195160</a> )}  
                      </div>
                      <div className='mainblock__hoofdrow__column1--mobiel'> 
                                          {intl.locale === "nl" ? (       
                                          <a href={telegrammer} className="maildesklink">Ik zit ook op Telegram 0622195160</a>     
                                           ) : (          
                                          <a href={telegrammer} className="maildesklink">I'm also on Telegram 0622195160</a>)}
                      </div>                              
                      <div className='mainblock__hoofdrow__column1--mobiel'>  
                                          {intl.locale === "nl" ? (       
                                           <a href={telePhonkelink} className="maildesklink">Bel me! 0622195160</a>     
                                           ) : (          
                                           <a href={telePhonkelink} className="maildesklink">Call me! 0622195160</a> )}                          
                      </div>
                      <div className='mainblock__hoofdrow__column1--mobiel'>  
                                      <a href={MailAdres} className="maildesklink">info@iwankoenderman.com</a> 
                     </div>
            </div>
         </div>
                                       
                <div className='mainblock__hoofdrow'>   
                                       <Emptyrow/>                      
                                      <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>            
                                      <Emptyrow/>
                                                 </div>             
                                   </>
   );
}