import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';


export default function Paragraafcolumn1({paragraaf1column1nl, paragraaf2column1nl, paragraaf3column1nl, paragraaf4column1nl, paragraaf5column1nl, 
  paragraaf1column1en, paragraaf2column1en, paragraaf3column1en, paragraaf4column1en, paragraaf5column1en}) {
  const intl = useIntl();
  return (     
    <div className='mainblock__hoofdrow__column1'> 
         <div className='mainblock__hoofdrow__column1--normaal '>          
                        {intl.locale === "nl" ?(<i>{paragraaf1column1nl}</i>): (<i>{paragraaf1column1en}</i>)}   
                        {intl.locale === "nl" ?(<i>{paragraaf2column1nl}</i>): (<i>{paragraaf2column1en}</i>)} 
                        {intl.locale === "nl" ?(<p>{paragraaf3column1nl}</p>): (<p>{paragraaf3column1en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraaf4column1nl}</p>): (<p>{paragraaf4column1en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraaf5column1nl}</p>): (<p>{paragraaf5column1en}</p>)}     
        </div>
    </div>
          
           );
        }
        

       