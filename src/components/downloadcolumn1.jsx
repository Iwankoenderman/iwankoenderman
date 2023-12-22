import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';
import Ctabutton from '../components/ctabutton'

export default function Downloadcolumn1({download1column1nl, download2column1nl, download3column1nl, download4column1nl, download5column1nl, 
  download1column1en, download2column1en, download3column1en, download4column1en, download5column1en}) {
  const intl = useIntl();
  return (     
    <div className='mainblock__hoofdrow__column1'> 
            <Ctabutton
                             Urlnl="https://bewustsociaalopweb.hubspotpagebuilder.com/nederlands-tal" 
                             Urlen="https://bewustsociaalopweb.hubspotpagebuilder.com/download-page-ebook-13-ways-to-stay-online-in-touch-iwan-koenderman" 
                             Arlabnl="Download gratis e-book"
                             Arlaben="Download free E-book"
                             ButTxtnl="Download gratis e-book"
                             ButTxten="Download free E-book"/>
                        {intl.locale === "nl" ?(<p>{download1column1nl}</p>): (<p>{download1column1en}</p>)}   
                        {intl.locale === "nl" ?(<p>{download2column1nl}</p>): (<p>{download2column1en}</p>)} 
                        {intl.locale === "nl" ?(<p>{download3column1nl}</p>): (<p>{download3column1en}</p>)} 
                        {intl.locale === "nl" ?(<p>{download4column1nl}</p>): (<p>{download4column1en}</p>)} 
                        {intl.locale === "nl" ?(<p>{download5column1nl}</p>): (<p>{download5column1en}</p>)}  
                     
    </div>         
           );
        }
        

       