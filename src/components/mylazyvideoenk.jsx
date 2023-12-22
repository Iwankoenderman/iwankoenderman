import * as React from "react"
import {useIntl} from 'gatsby-plugin-intl';
import LazyIframe  from '../components/lazyiframe'

export default function Mylazyvideoenk ({vidurl, vidtitle, vidln1 }) {
    const intl = useIntl(); 
    return (
                    <>
                         {intl.locale === "nl" ? ( <LazyIframe
                           url = {`${vidurl}${"?rel=0&modestbranding=1&controls=0&showinfo=0&cc_load_policy=1&cc_lang_pref="}${vidln1}${"&hl="}${vidln1}}`}
                           title = {vidtitle} />   
                            ) :  ( <p></p>         
                           )}
                  </>                     
              )}
              
              