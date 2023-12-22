import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';

export default function Head2({head2nl, head2en}) {
  const intl = useIntl(); 
  return (
    
<div className='mainblock__hoofdrow'>  
<div className='mainblock__hoofdrow--heading'> 
    {intl.locale === "nl" ? (<h2>{head2nl}</h2> ) : (<h2> {head2en}</h2>)} 
</div>
</div>

  );
}
