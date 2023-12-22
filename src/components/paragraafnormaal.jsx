import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';

export default function Paragraafnormaal({paragraafnormaal1nl, paragraafnormaal2nl, paragraafnormaal3nl, paragraafnormaal4nl, paragraafnormaal5nl, 
  paragraafnormaal6nl, paragraafnormaal7nl, paragraafnormaal8nl, paragraafnormaal9nl, paragraafnormaal1en, paragraafnormaal2en, paragraafnormaal3en, 
  paragraafnormaal4en, paragraafnormaal5en, paragraafnormaal6en, paragraafnormaal7en, paragraafnormaal8en, paragraafnormaal9en, paragraafnormaal10nl,
  paragraafnormaal10en}) {
  const intl = useIntl();
  return (     
<div className='mainblock__hoofdrow'>
             <div className='mainblock__hoofdrow--normaal'>
                        {intl.locale === "nl" ?(<p>{paragraafnormaal1nl}</p>): (<p>{paragraafnormaal1en}</p>)}   
                        {intl.locale === "nl" ?(<p>{paragraafnormaal2nl}</p>): (<p>{paragraafnormaal2en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal3nl}</p>): (<p>{paragraafnormaal3en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal4nl}</p>): (<p>{paragraafnormaal4en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal5nl}</p>): (<p>{paragraafnormaal5en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal6nl}</p>): (<p>{paragraafnormaal6en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal7nl}</p>): (<p>{paragraafnormaal7en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal8nl}</p>): (<p>{paragraafnormaal8en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal9nl}</p>): (<p>{paragraafnormaal9en}</p>)} 
                        {intl.locale === "nl" ?(<p>{paragraafnormaal10nl}</p>): (<p>{paragraafnormaal10en}</p>)} 
            </div>
          </div>
           );
        }
        