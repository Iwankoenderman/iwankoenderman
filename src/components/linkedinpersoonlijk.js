import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

export default function Linkedinpersoonlijk ({ socialclass, socialsize }){
  const { Linkedinpers,
    Linkedinpersarialabel
  } = useSiteMetadata()   
  return (
<a href={Linkedinpers}
className = {socialclass} 
target="_blank" rel="noopener noreferrer"
aria-label={Linkedinpersarialabel}>
<FontAwesomeIcon icon={faLinkedinIn} size={socialsize}/>
</a>
)
};
