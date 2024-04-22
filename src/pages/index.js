import * as React from "react"
import { Seo } from "../components/seo"
import { Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useIntl } from 'gatsby-plugin-intl';
import loadable from '@loadable/component'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Fold from "../components/fold"
import Downloadcolumn1 from '../components/downloadcolumn1'      
import Emptyrow from '../components/emptyrow'
import Head2 from '../components/head2'
import Head3 from '../components/head3'
import Paragraafcolumn1 from'../components/paragraafcolumn1'
import Paragraafcolumn2 from'../components/paragraafcolumn2'
import Paragraafnormaal from'../components/paragraafnormaal'
import Faqnormaal from '../components/faqnormaal'

const Mylazyvideo = loadable(() => import('../components/mylazyvideo'));
const Mylazyvideoenk = loadable(() => import('../components/mylazyvideoenk'));
const Contact = loadable(() => import('../components/contact'));
const Introafbeelding = loadable(() => import('../components/introafbeelding'));
const Pakketkolom = loadable(() => import('../components/pakketkolom'));
const Ctabutton = loadable(() => import('../components/ctabutton'));
const Checkoutprod1 = loadable(() => import('../components/checkoutprod1'));
const Checkoutprod2 = loadable(() => import('../components/checkoutprod2'));
const Checkoutprod3 = loadable(() => import('../components/checkoutprod3'));
const Checkoutprod4 = loadable(() => import('../components/checkoutprod4'));
const Checkoutprod5 = loadable(() => import('../components/checkoutprod5'));
const Checkoutprod6 = loadable(() => import('../components/checkoutprod6'));



export default function IndexPage ({ location,}) {   
    const { sloganbedrijfalt, 
    } = useSiteMetadata()  
     const intl = useIntl();
return (
    <Layout location={location }>      
                  <Hero/>                   
              <div className='mainblock'>
                  <Fold/> 
                  <Paragraafnormaal
                paragraafnormaal1nl = "Bekijk mijn video."
                paragraafnormaal1en = "Watch video."/> 
                <Emptyrow/>
                  

                  <div className='mainblock__pakket'>
                    <div className='mainblock__pakket__column1'>  

                
            <Mylazyvideo
                    vidurl1 = "https://www.youtube-nocookie.com/embed/PKFfZ2NxepM"
                    vidtitle1 = "Personal brand video van online boodschapscoach Iwan Koenderman met nadere toelichting waarom je booddschap vanuit je passie je drijveer belangrijk is voor je online zichtbaarheid en om te kunnen werken aan meer omzet en finaciele vrijheid."
                    vidln1= "nl"
                    vidurl2 = "https://www.youtube-nocookie.com/embed/YKlJFUPQCE4"
                    vidtitle2 = "Personal brand video by online message coach Iwan Koenderman, explaining the importance of conveying your message from passion as your driving force for online visibility and achieving increased sales and financial freedom." 
                    vidln2 = "en"/>
            
                    </div>
                 </div>


                <Head2
                             head2nl = "Je wilt meer omzet op langere termijn"
                             head2en = "You want more sales in the long term" />
                             <Paragraafnormaal
                             paragraafnormaal1nl = "Yes je hebt je website eindelijk online. Je houdt je mailbox nauwlettend in de gaten. Je bent er helemaal klaar voor die klanten. Het is je al gelukt om door netwerken en telefoongesprekken wat opdrachten binnen te krijgen maar het zou best meer mogen zijn. Je hoopt op continuïteit op de lange termijn. Maar het blijft akelig stil. Je website wordt amper bekeken en op je social media profielen reageert haast niemand. Ja leuke berichtjes van vrienden en familie. Het wordt tijd om je strategie om te gooien."
                             paragraafnormaal1en = "Yes, your website is finally online. You're keeping a close eye on your mailbox. You're all set for those clients. You've already managed to get some orders through networking and phone calls, but you'd like to have more. You're hoping for long-term continuity. But it's eerily quiet. Your website is hardly being viewed and almost no one is reacting to your social media profiles. Only nice messages from friends and family. It's time to change your strategy."/>

                             <Paragraafnormaal
                             paragraafnormaal1nl = "Ik help ambitieuze ondernemers, die willen coachen hun boodschap zo concreet en helder mogelijk te maken vanuit hun passie en het waarom ze het doen."
                             paragraafnormaal1en = "I help ambitious entrepreneurs who want to coach to make their message as concrete and clear as possible from their passion and the why behind what they do." 
                             paragraafnormaal2nl = "Zodat ze deze bij het maken en plannen van berichten en teksten op hun social media en website kunnen zetten."
                             paragraafnormaal2en = "So that they can use it when creating and planning messages and texts on their social media and website."
                             paragraafnormaal3nl = "Waardoor ze zichtbaar worden voor hun ideale klant en daardoor kunnen werken aan een blijvende omzet op langere termijn."
                             paragraafnormaal3en = "This allows them to become visible to their ideal customer and, as a result, work towards sustainable long-term revenue."
                             paragraafnormaal4nl = "Herken je jezelf hierin?"
                             paragraafnormaal4en = "Do you recognize yourself in this?"/>
                    <Emptyrow/>                             
                  <Introafbeelding/>
                  <div className='mainblock__hoofdrow'>    
                
                            <div className='mainblock__hoofdrow--calltoaction'>
                                           <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                            </div>
                    </div>

                 <Head3
                             head3nl = "Dat kan met een authentieke boodschap online"
                             head3en = "Authentic online message works" />

                <Paragraafnormaal
                paragraafnormaal1nl = "Als de waarom je het doet en je passie niet duidelijk in jouw boodschap doorklinken, kun je je niet onderscheiden van anderen en authentiek, uniek en relevant zijn." 
                paragraafnormaal1en = "You cannot distinguish yourself from others and be authentic, unique, and relevant if your message is unclear and your 'why', your reason for doing it and your pasion does not resonate in that message. "
                paragraafnormaal2nl = "Ik hoor je, je bent niet alleen."
                paragraafnormaal2en = "I hear you, you are not alone." 
                paragraafnormaal3nl = "Ik ben Iwan Koenderman en ik zie dit bij zoveel van mijn klanten." 
                paragraafnormaal3en = "I'm Iwan Koenderman and I see this with so many of my clients." 
                paragraafnormaal4nl = "Vandaar mijn 5 stappenplan waar je direct mee aan de slag kunt. Zodat jouw klanten je altijd (online) kunnen vinden."
                paragraafnormaal4en = "Hence my 5 step plan you can start right away. To make sure that your clients can always find you (online)."
                paragraafnormaal5nl = "Iedereen is nu online en je wilt aanwezig zijn waar je klanten zijn. Online marketing biedt bovendien een fijne backup voor als het offline niet lukt. Online marketing is bovendien iets waarbij je de meeste controle in eigen hand hebt. Jij bent degene die zelf aan de slag gaat met de content creatie en content plannen. Zorg er daarom voor dat je altijd online goed zichtbaar bent met een duidelijke boodschap en 'why', zodat je ideale klant je kan vinden. Dit idee van de why komt van Simon Sinek, auteur van het boek 'Start With Why' en inspirerende spreker. Volgens hem handelen sterke merken en leiders altijd vanuit hun why."
                paragraafnormaal5en = "Everyone is now online and you want to be present where your clients are. Online marketing also offers a nice backup in case offline doesn't work out. Additionally, online marketing is something where you have the most control in your own hands. You are the one who takes charge of content creation and planning. Therefore, make sure you are always visible online with a clear message and 'why', so that your ideal client can find you. This idea of the 'why' comes from Simon Sinek, author of the book 'Start With Why' and an inspiring speaker. According to him, strong brands and leaders always act from their 'why'"
                paragraafnormaal6nl = "Met mijn 5 stappenplan kun je meteen beginnen."
                paragraafnormaal6en = "With my 5 step plan you can start right away."/>

                  <div className='mainblock__hoofdrow'>
                            <div className='mainblock__hoofdrow--calltoaction'>
                            <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                            </div>
                 </div>
                 <Head3
                 head3nl = "Met meer omzet wordt financiële vrijheid bereikt"
                 head3en = "With increased sales financial freedom can be achieved" />
                
                <Paragraafnormaal
                paragraafnormaal1nl = "Een heldere boodschap maakt je online zichtbaar voor je ideale klant, waardoor je kunt werken aan een blijvende omzet op lange termijn en financiële vrijheid. Afhankelijk van de behoefte kun je financiele vrijheid zien als:"
                paragraafnormaal1en = "A clear message makes you visible to your ideal client online, allowing you to work towards lasting sales in the long term and financial freedom. Depending on the need, you can think of financial freedom as:"
                paragraafnormaal2nl = "● Meer rijkdom. Door je boodschap kun je werken aan het krijgen van meer en meer klanten online (o.a. social media) waardoor je een hogere omzet genereert."
                paragraafnormaal2en = "● More wealth. Through your message you can work on getting more and more clients online (including social media) so that you generate more sales   "
                paragraafnormaal3nl = "● Volledige financiële controlle. Dankzij je boodschap en het verkrijgen van expertstatus, kun je werken aan het organisch aantrekken van klanten zonder actieve inspanning en onafhankelijk van marketeers of netwerkevenementen." 
                paragraafnormaal3en = "● Full financial control. Thanks to your message and gaining expert status, you can work on organically attracting clients without active effort and independent of marketers or networking event."
                paragraafnormaal4nl = "● Financiële onafhankelijkheid. Tegenwoordig kun je door online te zijn gemakkelijker en sneller dan voorheen een business op bouwen met een boodschap, waardoor je voldoende klanten aantrekt om je baan op te zeggen." 
                paragraafnormaal4en = "● Financial independence. Nowadays it is easier and faster to build a business online with a message, which attracts enough clients to quit your job"
                />

                <Head2
                head2nl = "Krijg klanten online in 3 stappen"
                head2en = "Get clients online in just 3 steps" />

                <Head3
                head3nl = "Het-overzichtelijk-meer-klanten-online-plan"
                head3en = "The-clear-more-clients-online-plan" />          

                <Paragraafnormaal
                paragraafnormaal1nl = "1. Download het gratis e-book met blauwdruk in 5 stappen en krijg overzicht."
                paragraafnormaal1en = "1. Download the free E-book with blueprint in 5 steps and get an overview." 
                paragraafnormaal2nl = "2. Kies het programma en maak een vrijblijvende afspraak met mij."
                paragraafnormaal2en = "2. Choose the program and make an appointment with me without obligation." 
                paragraafnormaal3nl = "3. Word trots op jezelf omdat je bouwt aan een succesvol bedrijf met meer omzet."
                paragraafnormaal3en = "3. Be proud of yourself for building a successful business with more sales."/>

                <Downloadcolumn1
                download1column1nl = "Ik heb een gratis e-book geschreven waarin ik mijn 5 stappenplan toelicht"
                download1column1en = "I wrote a free e-book in which I explain my 5-step plan" />
                                 
                <div className='mainblock__hoofdrow__column1'> 
                     {intl.locale === "nl" ? (
                    <StaticImage
                    src = "../images/voorkantgratiseboeknederlands.jpg"
                    alt = {`${ "Afbeelding van het gratis Nederlandstalig e-book van Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                    title = {`${ "Afbeelding van het gratis Nederlandstalig e-book van Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                    aria-label=  {`${ "Afbeelding van het gratis Nederlandstalig e-book van Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                    placeholder="blurred"
                    layout="fixed"
                    height ={453}
                    width = {320}
                    loading = "lazy"
                     />  
                     ) : ( 
                    <StaticImage
                    src =  "../images/voorkantgratiseboekengels.jpg"
                    alt = {`${"Image of the free English e-book by Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                    title = {`${"Image of the free English e-book by Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                    aria-label=  {`${"Image of the free English e-book by Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                    placeholder="blurred"
                    layout="fixed"
                    height ={453}
                    width = {320}
                    loading = "lazy"
                         />    
                     )}  <p>{" "}</p>
                </div>

                <Paragraafnormaal
                paragraafnormaal1nl = "Maak een afspraak en start:"
                paragraafnormaal1en = "Make an appointment so that you can start:" />
         
               
         <div className='mainblock__hoofdrow'>   
                                          <div className='mainblock__pakket'>
                                               <div className='mainblock__pakket__column2'> 
                                                   <div className='mainblock__pakket__column2--normaal1'>
                                                   <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                                                   <Pakketkolom 
                                                        headrownl    = "Het-overzichtelijk-meer-klanten-online-plan-instap"
                                                        pakketrow1nl = "✔ Jouw duidelijke boodschap, geformuleerd vanuit je why, passie, drijfveer."
                                                        pakketrow2nl = ""
                                                        pakketrow3nl = ""
                                                        pakketrow4nl = "✔ 1 op 1 coaching," 
                                                        pakketrow5nl = "✔ 3 zoomsessies begeleiding,"
                                                        pakketrow6nl = "✔ Uitbreidbaar met extra zoomsessies indien meer diepgang gewenst is (meerprijs)" 
                                                        pakketrow7nl = "€ 349,00 excl. BTW"
                                                        headrowen    = "The-straightforward-more-clients-online-plan-entry-level"
                                                        pakketrow1en = "✔ Your clear message, formulated from your why, passion, and drive."  
                                                        pakketrow2en = ""                                           
                                                        pakketrow3en = "" 
                                                        pakketrow4en = "✔ 1 on 1 coaching,"
                                                        pakketrow5en = "✔ Guidance in 3 zoom sessions."
                                                        pakketrow6en = "✔ Expandable with additional Zoom sessions if more depth is desired (additional cost)."
                                                        pakketrow7en = "€ 349,00 excl. VAT" />
                                                        {intl.locale === "nl" ? (<Checkoutprod1/>) : (<Checkoutprod4/>)} 
                                                  
                                                  </div>
                                              </div>       
                                       
                                               <div className='mainblock__pakket__column2'> 
                                                   <div className='mainblock__pakket__column2--normaal2'>
                                                   <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                                                        <Pakketkolom 
                                                        headrownl    = "Het-overzichtelijk-meer-klanten-online-plan-voorbereidend"
                                                        pakketrow1nl = "✔ Jouw duidelijke boodschap, geformuleerd vanuit je why, passie, drijfveer."
                                                        pakketrow2nl = "✔ + Heldere social media strategie, waarmee je klanten kunt krijgen!" 
                                                        pakketrow3nl = ""
                                                        pakketrow4nl = "✔ 1 op 1 coaching,"
                                                        pakketrow5nl = "✔ 4 zoomsessies begeleiding." 
                                                        pakketrow6nl = "✔ Uitbreidbaar met extra zoomsessies indien meer diepgang gewenst is (meerprijs)"
                                                        pakketrow7nl = "€ 649,00 excl. BTW"
                                                        headrowen    = "The-straightforward-more-clients-online-plan-preparatory"
                                                        pakketrow1en = "✔ Your clear message, formulated from your why, passion, and drive."
                                                        pakketrow2en = "✔ + Clear social media strategy to attract clients!"
                                                        pakketrow3en = ""
                                                        pakketrow4en = "✔ 1 on 1 coaching,"
                                                        pakketrow5en = "✔ Guidance in 4 zoom sessions."
                                                        pakketrow6en = "✔ Expandable with additional Zoom sessions if more depth is desired (additional cost)."
                                                        pakketrow7en = "€ 649,00 excl. VAT"/>
                                                       {intl.locale === "nl" ? (<Checkoutprod2/>) : (<Checkoutprod5/>)}  
                                                  </div>
                                              </div>
                                              
                                               <div className='mainblock__pakket__column2'> 
                                                   <div className='mainblock__pakket__column2--normaal3'>
                                                   <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                                                   <Pakketkolom 
                                                        headrownl    = "Het-overzichtelijk-meer-klanten-online-plan-ga-van-start"
                                                        pakketrow1nl = "✔ Jouw duidelijke boodschap, geformuleerd vanuit je why, passie, drijfveer."
                                                        pakketrow2nl = "✔ + Heldere social media strategie, waarmee je klanten kunt krijgen!" 
                                                        pakketrow3nl = "✔ ++ Authentieke content waarmee je de waarde die je aan je klanten biedt, kunt laten zien!" 
                                                        pakketrow4nl = "✔ 1 op 1 coaching,"
                                                        pakketrow5nl = "✔ 5 zoomsessies begeleiding," 
                                                        pakketrow6nl = "✔ Uitbreidbaar met extra zoomsessies indien meer diepgang gewenst is (meerprijs)."
                                                        pakketrow7nl = "€ 1149,00 excl. BTW"
                                                        headrowen    = "The-straightforward-more-clients-online-plan-is-getting-started"
                                                        pakketrow1en = "✔ Your clear message, formulated from your why, passion, and drive."
                                                        pakketrow2en = "✔ + Clear social media strategy to attract clients!"
                                                        pakketrow3en = "✔ ++ Authentic content provided for social media, which showcases your value to clients!"
                                                        pakketrow4en = "✔ 1 on 1 coaching,"
                                                        pakketrow5en = "✔ Guidance in 5 zoom sessions."
                                                        pakketrow6en = "✔ Expandable with additional Zoom sessions if more depth is desired (additional cost)." 
                                                        pakketrow7en = "€ 1149,00 excl. VAT"/>
                                                        {intl.locale === "nl" ? (<Checkoutprod3/>) : (<Checkoutprod6/>)}   
                                                  
                                                       
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className='mainblock__hoofdrow'>        
                                             <p>{" "}</p>                   
                                      </div>
                                      <div className='mainblock__hoofdrow'>        
                                             <p>{" "}</p>                 
                                      </div>
                                     <div className='mainblock__hoofdrow'>        
                                             <p>{" "}</p>                 
                                    </div> 
                 <Head2
                 head2nl = "Waarom ik je kan helpen?"
                 head2en = "Why I can help you?" />

                <Paragraafnormaal
                 paragraafnormaal1nl = "Ik ben een toegewijde online business coach, die jou kan helpen duidelijk verwoord te krijgen wat je passie, missie, je why, het waarom je het doet en je boodschap voor het ondernemen is. Je dit kunt gebruiken als basis voor je social media strategie en online marketing."
                 paragraafnormaal1en = "I am an dedicated online business coach, who can help you clearly define your passion, mission, your why and message for doing business. So you can use this as the basis for your social media strategy and online marketing" />
        
              
                 <Head3
                 head3nl = "Social selling vereist een authentieke boodschap"
                 head3en = "Experience personally that social selling works" />
                 
                 <Paragraafnormaal
                 paragraafnormaal1nl = "Met social selling deel je vanuit je authentieke boodschap waardevolle informatie op social media en wek je nieuwsgierigheid bij prospects. Dit kan leiden tot vertrouwen, naamsbekendheid en meer verkoop. Het doel is om klanten naar jou toe te laten komen en ambassadeurs te creëren. En dat deden wij eigenlijk onbewust met ons familiebedrijf." 
                 paragraafnormaal1en = "Social selling involves sharing valuable information on social media from your authentic message, arousing curiosity among prospects. This can lead to trust, brand awareness, and increased sales. The goal is to attract customers to you and create ambassadors. We actually did this unconsciously with our family business."/>
                
                <Head3
                 head3nl = "Persoonlijk ervaren dat social selling werkt"
                 head3en = "Experience personally that social selling works" />
            
                <Paragraafnormaal
                 paragraafnormaal1nl = "Als vennoot in een familiebedrijf, dat handgemaakte lampenkappen produceert, met achtergrond in het bouwen van websites en social media, zag ik dat zelfs in crisistijd klanten hun weg naar ons vonden. We plaatsten online namelijk informatie over ons werk en werkwijze. Zij waren verbaasd en blij dat wij hun konden helpen. Voor hen was prijs zelfs geen issue maar zichtbaarheid op internet dus wel! Ik nam online marketing in eigen hand om antwoorden te vinden op mijn eigen werkende oplossing in online zichtbaarheid en social media. Mijn onderzoek en werk veranderde in het helpen van anderen hetzelfde te doen. En nu mag ik dat als business coach en social media coach met de wereld delen, te beginnen met jou!"
                 paragraafnormaal1en = "As a partner in a family business that produces handmade lampshades, with a background in building websites and social media, I saw that customers found their way to us even in times of crisis. That's because we posted information about our work and methodology online. They were amazed and happy that we could help them. Price was not even an issue for them, but visibility on the internet was! I took online marketing into my own hands to find answers to my own working solution in online visibility and social media. My research and work turned into helping others do the same. And now I can share that with the world as a business coach and social media coach, starting with you!!" 
                 />


                <Head3
                head3nl = "Walk your talk; mijn 5 stappenplan zelf uitgevoerd"
                head3en = "Walk your talk; carried out my 5-step plan myself" />

                <Paragraafnormaal
                paragraafnormaal1nl = "Vlak voor corona ben ik begonnen met mijn eigen bedrijf. Toen nog met een ander businessplan. Namelijk ondersteuning bieden aan ondernemers op social media en met websites. Op dat moment waren er nog netwerk evenementen, die je zo kon bezoeken maar dat hield al heel snel op. Tijdens corona heb ik een omslag gemaakt naar de online coaching business. Hiervoor heb een geheel nieuwe website gemaakt met Gatsby. Om organisch goed gevonden te worden is deze geheel SEO proof en op mobiel laadt hij snel. En natuurlijk was ik zelf genoodzaakt om door content creatie en content plannen klanten te gaan vinden op social media."
                paragraafnormaal1en = "Just before corona I started my own company. With another business plan. I offered support to entrepreneurs on social media and with websites. At that time there were still network events that you could visit, but that soon ended. During corona I made a switch to the online coaching business. For this I have created a completely new website with Gatsby. To be found organically, it is completely SEO proof and it loads quickly on mobile. And of course I was forced to find clients on social media through content creation and content planning." />

                <Head2
                head2nl = "Ik help jou meer klanten te krijgen"
                head2en = "I help you get more clients" />

                <Head3
                head3nl = "Door je boodschap scherp te krijgen online"
                head3en = "By getting your message sharp online" />
                             
                <Paragraafnormaal
                paragraafnormaal1nl = "Je verkoopt jezelf met een boodschap waarin je duidelijk je passie en het waarom je het doet verwerkt. Deze waarom je het doet is in het Engels de why, die verwijst naar die van Simon Sinek. Die zegt dat sterke leiders en merken altijd vanuit hun why, het waarom ze iets doen, handelen. Je zet jezelf neer als een sterk persoonlijk merk. Die boodschap laat je door klinken in je content creatie, content plannen en je online marketing. Zodat je het aanzien en vertrouwen krijgt van de expert die je bent. Je claimt dus je expertstatus op social media door content creatie en content plannen. En krijgt zo meer klanten."
                paragraafnormaal1en = "You sell yourself with a message that clearly incorporates your passion and why you do it. This why refers to Simon Sinek's. He says that strong leaders and brands always act from their why, the why they do something. You present yourself as a strong personal brand. You let that message be heard in your content creation, content planning and your online marketing. So that you gain the respect and trust of the expert that you are. So you claim your expert status on social media through content creation and content planning. And get more customers that way." 
                />


                <div className='mainblock__hoofdrow'>   
                      <div className='mainblock__pakket'>  
                              <Paragraafcolumn2
                              paragraaf1column2nl = "&rarr;Ik vind dat iedereen financiële vrijheid moet kunnen krijgen onafhankelijk van wie, wat of waar dan ook."
                              paragraaf1column2en = "&rarr;I believe that everyone should be able to have financial freedom regardless of who, what or where."
                               /> 

                                             
                           <div className='mainblock__pakket__column3'> 
                               {intl.locale === "nl" ? (
                              <StaticImage
                              src =  "../images/financielevrijheid.jpg"
                              alt = {`${ "Afbeelding geplaatst bij: Ik vind dat iedereen financiële vrijheid moet kunnen krijgen onafhankelijk van wie, wat of waar dan ook; Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                              title = {`${ "Afbeelding geplaatst bij: Ik vind dat iedereen financiële vrijheid moet kunnen krijgen onafhankelijk van wie, wat of waar dan ook; Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                              aria-label=  {`${ "Afbeelding geplaatst bij: Ik vind dat iedereen financiële vrijheid moet kunnen krijgen onafhankelijk van wie, wat of waar dan ook; Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                              placeholder="blurred"
                              layout="fixed"
                              height ={213}
                              width = {320}
                              loading = "lazy"
                               />  
                             ) : (   <StaticImage
                             src =  "../images/financielevrijheid.jpg"
                             alt = {`${ "Image posted to: I believe everyone should be able to have financial freedom regardless of who, what or where; Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                             title = {`${ "Image posted to: I believe everyone should be able to have financial freedom regardless of who, what or where; Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                             aria-label=  {`${ "Image posted to: I believe everyone should be able to have financial freedom regardless of who, what or where; Iwan Koenderman"}${" "}${sloganbedrijfalt}`}
                             placeholder="blurred"
                             layout="fixed"
                             height ={213}
                             width = {320  }
                             loading = "lazy"
                            />   )}  <p>{" "}</p>
                         </div>
                     </div>  
                </div>  


                <div className='mainblock__hoofdrow'>
                            <div className='mainblock__hoofdrow--calltoaction'>
                            <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                            </div>
                 </div>
                
                 <Head2
                head2nl = "Tegenwoordig is online zichtbaarheid sowieso handig"
                head2en = "Nowadays, online visibility is handy anyway" />
              
                <Paragraafnormaal
                paragraafnormaal1nl = "Ik licht in deze video toe waarom online zichtbaarheid altijd handig is:"/>

                <div className='mainblock__pakket'>
                    <div className='mainblock__pakket__column1'>  
                    <Mylazyvideoenk
                    vidurl = "https://www.youtube-nocookie.com/embed/7weqBxtbq30"
                    vidtitle=  "YouTube filmpje over hoe we ten alle tijden leads kunnen krijgen door online zichtbaar te zijn."
                    vidln1= "nl"/>
                   
                    </div>
                 </div>
                
                <Paragraafnormaal
                paragraafnormaal1nl = "Het is dus hoe dan ook altijd handig om online goed zichtbaar te zijn om meer klanten te krijgen."
                paragraafnormaal1en = "It is therefore always useful to be visible online in order to get more clients."  
                paragraafnormaal2nl = "Wil je weten met welke kleine veranderingen jouw website al meer effectief kan worden ingezet bij het krijgen van meer klanten?"
                paragraafnormaal2en = "Do you want to know the small changes which can make your website be more effectively in getting clients?"
                paragraafnormaal3nl = "Hoe je jouw ideale klant kunt bereiken met een duidelijk compacte website, content creatie, content plannen, inspiratie en effectieve posts op:"
                paragraafnormaal3en = "How to reach your ideal client with a clearly compact website, content creation, content planning, inspiration and effective posts on:"
                paragraafnormaal4nl = "* Instagram;" 
                paragraafnormaal4en = "* Instagram;"
                paragraafnormaal5nl = "* Facebook;"
                paragraafnormaal5en = "* Facebook;"
                paragraafnormaal6nl = "* LinkedIn;"
                paragraafnormaal6en = "* LinkedIn;"
                paragraafnormaalenl = "* of andere socials?"
                paragraafnormaal7en = "* or other socials?"
                paragraafnormaal8nl = "Met een goede heldere online marketingstrategie die bij jouw past."
                paragraafnormaal8en = "With a good clear online marketing strategy that suits you." 
                paragraafnormaal9nl = "Social media is op dit moment de manier om online je expertstatus te claimen zodat je meer online zichtbaar wordt, social proof krijgt en je volle potentie kan benutten zodat je klanten je beter weten te vinden zonder dat jij veel tijd kwijt bent."
                paragraafnormaal9en = "Social media is currently the way to claim your expert status online so that you become more visible online, get social proof and can use your full potential so that your clients can find you better without losing a lot of time."
                paragraafnormaal10nl = "Plan dan vrijblijvend een afspraak met me voor een gratis scan."
                paragraafnormaal10en = "Schedule a no-obligation appointment with me for a free scan."/>
              
               <div className='mainblock__hoofdrow'>
                            <div className='mainblock__hoofdrow--calltoaction'>
                            <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                            </div>
                 </div>


                <Head2
                head2nl = "Coming zoom: Evenementen, die ik online organiseer!!"
                head2en = "Upcoming Zoom events: which I organize online!!" />

                <Paragraafnormaal
                paragraafnormaal1nl = "Met regelmaat organiseer ik online evenementen. Wil je meer weten? Bij voldoende aanmeldingen geef ik het webinar: In slechts 5 stappen meer omzet online. Mail me als je wilt deelnemen."
                paragraafnormaal1en = "I regularly organize online events. Do you want to know more? If there are enough registrations, I will give the webinar: More sales online in just 5 steps. Email me if you want to participate." />
                
                <Head2
                head2nl = "Wat professionele relaties zeggen over Iwan koenderman"
                head2en = "What professional relations say about Iwan koenderman!" />
                
                
                <Paragraafcolumn1
                paragraaf1column1nl = "&rarr;Iwan heeft me helderheid gegeven en me bij de les gehouden toen ik door externe factoren van mijn missie af dreigde te drijven. Ik stond op het punt om beslissingen te nemen en een koers te gaan varen die niets meer met mijn why te maken hadden en waar ik ook zeker niet gelukkig van geworden was. Nu ik weer op het goede spoor zit, stroomt de energie weer en zie ik de mogelijkheden en kansen weer op mijn pad verschijnen. Dank je wel Iwan. Mocht er weer zo’n situatie opduiken, dan weet ik je zeker te vinden!"
                paragraaf1column1en = "&rarr;Iwan helped me to see how I can sell my message. I had my product and the problem that it solved. And while I was talking about it he found multiple angles of how I could market and sell it that I hadn't thought about. He helped me to look at what and how I was selling with new and fresh eyes while giving advice that I wouldn't have been able to come up with on my own."
                paragraaf3column1nl = "Ciska van der Weele, leefstijl- en vitaliteitscoach, Voluitvitaal"
                paragraaf3column1en = "Filip Lindström, vagus nerve and the nervous system"/> 
                                 
                <div className='mainblock__hoofdrow__column1'> 
                     {intl.locale === "nl" ? (
                      <StaticImage
                      src =  "../images/ciskavanderweelevoormuurdoorlinda.jpg"
                      alt = {`${ "Ciska van der Weele, leefstijl- en vitaliteitscoach, Voluitvitaal"}${" "}${sloganbedrijfalt}`}
                      title = {`${ "Ciska van der Weele, leefstijl- en vitaliteitscoach, Voluitvitaal"}${" "}${sloganbedrijfalt}`}
                      aria-label=  {`${ "Ciska van der Weele, leefstijl- en vitaliteitscoach, Voluitvitaal"}${" "}${sloganbedrijfalt}`}
                      placeholder="blurred"
                      layout="fixed"
                      height ={335}
                      width = {320}
                      loading = "lazy"
                       />  
                      ) : (   <StaticImage
                        src =  "../images/filiplindström.jpg"
                        alt = {`${ "Filip Lindström, vagus nerve and the nervous system"}${" "}${sloganbedrijfalt}`}
                        title = {`${ "Filip Lindström, vagus nerve and the nervous system"}${" "}${sloganbedrijfalt}`}
                        aria-label=  {`${ "Filip Lindström, vagus nerve and the nervous system"}${" "}${sloganbedrijfalt}`}
                        placeholder="blurred"
                        layout="fixed"
                        height ={320}
                        width = {320}
                        loading = "lazy"
                         />   )}  <p>{" "}</p>
                </div>
                <div className='mainblock__hoofdrow'>   
                <Paragraafcolumn1
                paragraaf1column1nl = "&rarr;Het was een leerzaam traject met Iwan om mijn website te updaten. Iwan weet duidelijk waar hij het over heeft en is helder in zijn tips en ideeën. Geeft je ook de ruimte om het vooral te doen zoals jij het wil, maar wel met zijn idee in zijn achterhoofd."
                paragraaf2column1nl = "Na 5 sessies heb ik een mooie, compacte website zonder te lange lappen tekst!!"
                paragraaf3column1nl = "Marlies Spijkerboer"/> 
           

                <div className='mainblock__hoofdrow__column1'>               
                   {intl.locale === "nl" ? (
                      <StaticImage
                      src = "../images/kokkerellenoplocatiezoomsessie.jpg"
                      alt = {`${"Zoomsessie met marlies spijkerboer van Kokkerellen op locatie"}${" "}${sloganbedrijfalt}`}
                      title = {`${"Zoomsessie met marlies spijkerboer van Kokkerellen op locatie"}${" "}${sloganbedrijfalt}`}
                      aria-label=  {`${"Zoomsessie met marlies spijkerboer van Kokkerellen op locatie"}${" "}${sloganbedrijfalt}`}
                      placeholder="blurred"
                      layout="fixed"
                      height ={426}
                      width = {320}
                      loading = "lazy"
                       />  
                 
                      ) : (  <p>{" "}</p> )}  
                </div>
                </div>

                      <Paragraafnormaal
                       paragraafnormaal1nl = "&rarr; Bekijk deze video van Astrid Schoonderbeek over Iwan Koenderman."
                       paragraafnormaal1en = "&rarr; Watch this video by Astrid Schoonderbeek about Iwan Koenderman."/>

                    <Mylazyvideo
                    vidurl1 = "https://www.youtube-nocookie.com/embed/R-wtClJ4RLE"
                    vidtitle1 = "Review van Astrid Schoonderbeek over online businesscoach Iwan Koenderman"
                    vidln1 = "nl"
                    vidurl2 = "https://www.youtube-nocookie.com/embed/R-wtClJ4RLE"
                    vidtitle2 = "Review by Astrid Schoonderbeek about online business coach Iwan Koenderman" 
                    vidln2 = "en"/>

               <div className='mainblock__pakket'>
                     <div className='mainblock__pakket__column1'>  
                      
                    </div>
                 </div>

                      <Head2
                       head2nl = "FAQ; de why, Simon Sinek, meer klanten"
                       head2en = "FAQ; the why, Simon Sinek, more clients"  />

                         <Head3
                       head3nl = "1. Wat wordt met de why bedoeld?"
                       head3en = "1. What is meant by the why?" />
                    
                       <Faqnormaal
                       faqnormaal1nl = "De why komt van het model de Golden Circle van Simon Sinek. Dit model bestaat uit 3 concentrische circles met in het midden why, dan how, dan what. Simon Sinek beweert dat sterke merken en leiders altijd vanuit het midden, de why, naar buiten toe werken naar de wat. In tegenstelling tot degenen die dat niet zijn. Die gaan van buiten naar binnen en beginnen met de wat. Wil je weten wat dat voor jou kan betekenen?" 
                       faqnormaal1en = "The why comes from the Golden Circle model by Simon Sinek. Where the why is in the inner circle. Simon Sinek argues that strong brands and leaders always work from the middle, the why, out to the what, unlike those who aren't. They go from the outside in and start with the what. Do you want to know what that can mean for you?"
                       linknl1 = "https://meetings.hubspot.com/iwan-koenderman"
                       arianl1 = "Maak dan een vrijblijvende afspraak met mij"
                       tekstnl1 = "Maak dan een vrijblijvende afspraak met mij"
                       linken1 = "https://meetings.hubspot.com/iwan-koenderman"
                       ariaen1 = "Then make an appointment with me without obligation"
                       teksten1 = "Then make an appointment with me without obligation"/>

                      <Head3
                       head3nl = "2. Wie is Simon Sinek?"
                       head3en = "2. Who is Simon Sinek?" />
                      
                      <Paragraafnormaal
                      paragraafnormaal1nl = "Simon Sinek is een managementgoeroe uit Engeland, die bekend is van zijn boek 'Start with why'. In dat boek verklaart hij zijn model de Golden Circle bestaande uit 3 concentrische circels met in het midden why, dan how, dan what. Sterke leiders en merken gaan in hun handelen van binnen naar buiten, beginnend met de why dan de how en dan pas de what" 
                      paragraafnormaal1en = "Simon Sinek is a management guru from England, known for his book 'Start with why'. In that book he explains his model as the Golden Circle consisting of 3 concentric circles with in the middle why, then how, then what. Strong leaders and brands act from the inside out, starting with the why, then the how and only then the what."
                       />

                       <Head3
                       head3nl = "3. Kun je klanten krijgen op social media?"
                       head3en = "3 Can you get clients on social media?" />

                      <Faqnormaal
                       faqnormaal1nl = "Jazeker. Dat kan als je vanuit je passie je boodschap verkoopt. Door content op social media te creëren, die authentiek, relevant en social is. In de vorm van posts, bijdragen, video´s reels, podcasts. Op zo´n manier dat klanten je gaan vertrouwen en je als de expert gaan zien. Wil je hier meer over weten?" 
                       faqnormaal1en = "Yes, of course. That is possible if you sell your message from your passion. By creating content on social media that is authentic, relevant and social. In the form of posts, contributions, video reels, podcasts. So that clients will trust you and see you as the expert. Want to know more about this?"
                       linknl1 = "https://bewustsociaalopweb.hubspotpagebuilder.com/nederlands-tal"
                       arianl1 = "Download dan mijn e-book hierover"
                       tekstnl1 = "Download dan mijn e-book hierover"
                       linken1 = "https://bewustsociaalopweb.hubspotpagebuilder.com/download-page-ebook-13-ways-to-stay-online-in-touch-iwan-koenderman"
                       ariaen1 = "Then download my E-book about this"
                       teksten1 = "Then download my E-book about this"/>
               <div className='mainblock__hoofdrow'>
                            <div className='mainblock__hoofdrow--calltoaction'>
                            <Ctabutton
                                           Urlnl="https://meetings.hubspot.com/iwan-koenderman"
                                           Urlen="https://meetings.hubspot.com/iwan-koenderman"
                                           Arlabnl="Plan zoomgesprek"
                                           Arlaben="Schedule zoom call"
                                           ButTxtnl="Plan zoomgesprek"
                                           ButTxten="Schedule zoom call"/>  
                            </div>
                 </div>
               <Contact/> 
                           
   </div>       
  </Layout> 
)
}

export function Head() { 
  
   return (
    
    <Seo>
    <Script type = "application/ld+json">{JSON.stringify(
{ "@context": "http://schema.org", 
"@type": "LocalBusiness", "name": "Iwan Koenderman", 
"image": "https://iwankoenderman.com/static/8b9e66476349a79704947c6f73989c01/6a5af/herovaniwankoendermand.png", 
"telephone": "++31(0)622196160", 
"email": "info@iwankoenderman.com", 
"address": { "@type": "PostalAddress", 
"addressLocality": "Utrecht", 
"addressCountry": "Nederland" }, 
"url": "https://iwankoenderman.com/", 
"review": { "@type": "Review", 
            "author": { "@type": "Person", "name": "Marlies Spijkerboer" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }, 
            "reviewBody": "→ &quot;Het was een leerzaam traject met Iwan om mijn website te updaten. Iwan weet duidelijk waar hij het over heeft en is helder in zijn tips en ideeën. Geeft je ook de ruimte om het vooral te doen zoals jij het wil, maar wel met zijn idee in zijn achterhoofd.</I><I>Na 5 sessies heb ik een mooie, compacte website zonder te lange lappen tekst!!&quot;" },               
"faqpage":   {  "@type": "FAQPage",
              "mainEntity": [{
              "@type": "Question",
              "name": "Kun je klanten krijgen op social media?",
              "acceptedAnswer": {
              "@type": "Answer",
              "text": "<p>Jazeker. Dat kan als je vanuit je passie je boodschap verkoopt. Door content op social media te creëren, die authentiek, relevant en social is. In de vorm van posts, bijdragen, video´s reels, podcasts. Op zo´n manier dat klanten je gaan vertrouwen en je als de expert gaan zien. Wil je hier meer over weten?<a href=https://bewustsociaalopweb.hubspotpagebuilder.com/nederlands-tal> Download dan mijn e-book hierover</a></p>"
           }
           },
           {
              "@type": "Question",
              "name": "Wat wordt met de why bedoeld?",
              "acceptedAnswer": {
              "@type": "Answer",
              "text": "De why komt van het model de Golden Circle van Simon Sinek. Dit model bestaat uit 3 concentrische circles met in het midden why, dan how, dan what. Simon Sinek beweert dat sterke merken en leiders altijd vanuit het midden, de why, naar buiten toe werken naar de wat. In tegenstelling tot degenen die dat niet zijn. Die gaan van buiten naar binnen en beginnen met de wat. Wil je weten wat dat voor jou kan betekenen?<a href=https://meetings.hubspot.com/iwan-koenderman> klik hier voor het maken van een zoomafspraak</a> </p>"
          }
          }]
          }
         }
)}</Script>                                                               
    </Seo>    
  )
}


 


