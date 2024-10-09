import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import TopMenu from './topmenu'
import Footer from'./footer'
import CookieConsentBar from "./cookieconsentbar";
import LinkedInInsightTag from "./linkedininsighttag";


export default function Layout  ({ children  }) {
  return (   
  <div className="flexThisBox">
 <TopMenu/>   
 <LinkedInInsightTag/> 


 <main><MDXProvider components={{
        }} >{children}</MDXProvider>
       
 </main>
 <Footer/>
 <CookieConsentBar/>   
 </div>
  )
}


