import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';


export default function Paragraafcolumn2({paragraaf1column2nl, paragraaf2column2nl, paragraaf3column2nl, paragraaf4column2nl, paragraaf5column2nl, 
  paragraaf1column2en, paragraaf2column2en, paragraaf3column2en, paragraaf4column2en, paragraaf5column2en}) {
  const intl = useIntl();
  return (     
    <div className='mainblock__pakket__column2'> 
                        {intl.locale === "nl" ?(<i>{paragraaf1column2nl}</i>): (<i>{paragraaf1column2en}</i>)}   
                        {intl.locale === "nl" ?(<i>{paragraaf2column2nl}</i>): (<i>{paragraaf2column2en}</i>)} 
                        {intl.locale === "nl" ?(<p>{paragraaf3column2nl}</p>): (<p>{paragraaf3column2en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraaf4column2nl}</p>): (<p>{paragraaf4column2en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraaf5column2nl}</p>): (<p>{paragraaf5column2en}</p>)}     
        
    </div>         
           );
        }
        

       