import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import TopMenu from './topmenu'
import Footer from'./footer'


export default function Layout  ({ children  }) {
  return (   
  <div className="flexThisBox">
 <TopMenu/>     
 <main><MDXProvider components={{
        }} >{children}</MDXProvider>
 </main>
 <Footer/>
 

 </div>
  )
}


