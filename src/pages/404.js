import * as React from "react"
import {Link } from 'gatsby';
import Layoutlanding from "../components/layoutlanding"
import { useIntl,} from  'gatsby-plugin-intl';


export default function IndexPage ({ location,}) {  
    const intl = useIntl();
return (
    <Layoutlanding location={location }>      
                                
              <div className='mainblock'>
                   <div className='mainblock__hoofdrow'>    
                        <div className='mainblock__hoofdrow--heading'> 
                        {intl.locale === "nl" ? (<h1>Outch helaas bestaat de pagina die u zoekt niet.</h1> ) : (<h1>Outch unfortunately the page you are looking for does not exist.</h1>)}         
                        </div>
                   </div>

              <div className='mainblock__hoofdrow'>        
                   <p>{" "}</p>     
              </div>
       
              <div className='mainblock__hoofdrow'>        
              {intl.locale === "nl" ? (<Link to="/" className="button-cta" >Klik hier!</Link> ) : (<Link to="/" className="button-cta" >click here!</Link>)}
              </div>
              
              <div className='mainblock__hoofdrow'>    
                   <div className='mainblock__hoofdrow--heading'> 
                   {intl.locale === "nl" ? (<p>om weer op mijn homepage te komen.</p> ) : (<p>to get back to my homepage.</p>)}         
                   </div>
              </div>            
   </div>        
  </Layoutlanding>
)
}


  
