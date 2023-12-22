import * as React from "react"
import {useIntl} from 'gatsby-plugin-intl';
import LazyIframe  from '../components/lazyiframe'

export default function Mylazyvideo ({vidurl1, vidtitle1, vidln1, vidurl2, vidtitle2, vidln2, }) {
    const intl = useIntl(); 
    return (
            <>         
            {intl.locale === "nl" ? ( <LazyIframe
             url = {`${vidurl1}${"?rel=0&modestbranding=1&controls=0&showinfo=0&cc_load_policy=1&cc_lang_pref="}${vidln1}${"&hl="}${vidln1}}`}
             title = {vidtitle1} />   
              ) :  (           
              <LazyIframe
             url = {`${vidurl2}${"?rel=0&modestbranding=1&controls=0&showinfo=0&cc_load_policy=1&cc_lang_pref="}${vidln2}${"&hl="}${vidln2}}`}
             title = {vidtitle2} />     
             )}
    </>        
              )}
