import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import Leadland from './leadland'
import Copyright from'./copyright'
import loadable from '@loadable/component'
import CookieConsentBar from "./cookieconsentbar"
import { Link } from "gatsby"

const Mylazyvideo = loadable(() => import('./mylazyvideo'));
const Mylazyvideoenk = loadable(() => import('./mylazyvideoenk'));
const Checkoutprod1 = loadable(() => import('./checkoutprod1'));
const Checkoutprod2 = loadable(() => import('./checkoutprod2'));
const Checkoutprod3 = loadable(() => import('./checkoutprod3'));
const Checkoutprod5 = loadable(() => import('./checkoutprod5'));
const Checkoutprod6 = loadable(() => import('./checkoutprod6'));
const Checkoutprod7 = loadable(() => import('./checkoutprod7'));
const Download  = loadable(() => import('./download'));
const Ctabutton = loadable(() => import('./ctabutton'));

export default function Layoutlanding ({ children }) {
  return (  
<div className="flexThisBox">
<div className ="landingblock">
<div className='mainblock__hoofdrow'>
<div className='top-menu-leadland'> 
<Leadland text="Iwan Koenderman" />
</div>  
</div>
</div> 
<main><MDXProvider components={{
          h1: props => <h1 {...props} style={{ color: "#7d7fa4"}} arialabelledby={{ text: "heading 1 voor style markdown in section zonder menu"}} />,
          h2: props => <h2 {...props} style={{ color: "#7d7fa4"}} arialabelledby={{ text: "heading 2 voor style markdown in section zonder menu"}} />,
          h3: props => <h3 {...props} style={{ color: "#7d7fa4"}} arialabelledby={{ text: "heading 3 voor style markdown in section zonder menu"}}/>,
          Link,
          Ctabutton,
          Mylazyvideo,
          Checkoutprod1,
          Checkoutprod2,
          Checkoutprod3,
          Checkoutprod5,
          Checkoutprod6,
          Checkoutprod7,
          Mylazyvideoenk,
          Download}}>{children}</MDXProvider>
          </main>
<div className ="footerblock">
<div className='mainblock__hoofdrow'>
<div className='footer-menu'>  
<div className='footerenkelblock--footernormaalfontrightalignbold'>
 <Copyright/>
 <CookieConsentBar/> 
 </div>
</div>  
</div>
</div>
</div>
  )
}



