import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';

export default function Faqnormaal({faqnormaal1nl, faqnormaal2nl, faqnormaal3nl, faqnormaal4nl, faqnormaal5nl, 
  faqnormaal6nl, faqnormaal7nl, faqnormaal8nl, faqnormaal9nl, faqnormaal10nl, linknl1, arianl1, tekstnl1, faqnormaal1en, faqnormaal2en, faqnormaal3en, faqnormaal4en, faqnormaal5en, 
  faqnormaal6en, faqnormaal7en, faqnormaal8en, faqnormaal9en, faqnormaal10en, linken1, ariaen1, teksten1}) {
  const intl = useIntl();
  return (     
<div className='mainblock__hoofdrow'>
             <div className='mainblock__hoofdrow--normaal'>
                  {intl.locale === "nl" ?( <p>{faqnormaal1nl}</p> ): (<p>{faqnormaal1en}</p>)} 
                  {intl.locale === "nl" ?(<p>{faqnormaal2nl}</p>): (<p>{faqnormaal2en}</p>)}
                  {intl.locale === "nl" ?(<p>{faqnormaal3nl}</p>): (<p>{faqnormaal3en}</p>)}
                  {intl.locale === "nl" ?(<p>{faqnormaal4nl}</p>): (<p>{faqnormaal4en}</p>)}
                  {intl.locale === "nl" ?( <p>{faqnormaal5nl}</p>): (<p>{faqnormaal5en}</p>)}
                  {intl.locale === "nl" ?( <p>{faqnormaal6nl}</p>): (<p>{faqnormaal6en}</p>)}
                  {intl.locale === "nl" ?(<p>{faqnormaal7nl}</p> ): (<p>{faqnormaal7en}</p>)}
                  {intl.locale === "nl" ?( <p>{faqnormaal8nl}</p>): (<p>{faqnormaal8en}</p>)}
                  {intl.locale === "nl" ?(<p>{faqnormaal9nl}</p>): (<p>{faqnormaal9en}</p>)}
                  {intl.locale === "nl" ?( <p>{faqnormaal10nl}</p>): (<p>{faqnormaal10en}</p>)}
                  {intl.locale === "nl" ?(<a href={linknl1} target="_blank" rel="noopener noreferrer"aria-label={arianl1} >{tekstnl1}</a> ): ( <a href={linken1} target="_blank" rel="noopener noreferrer"aria-label={ariaen1} >{teksten1}</a>   )}
            </div>
          </div>
           );
        }
        