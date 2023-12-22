import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';

export default function Head3({head3nl, head3en}) {
  const intl = useIntl(); 
  return (
    
<div className='mainblock__hoofdrow'>  
<div className='mainblock__hoofdrow--heading'> 
    {intl.locale === "nl" ? (<h3>{head3nl}</h3> ) : (<h3> {head3en}</h3>)} 
</div>
</div>

  );
}
