import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function Facebookpersoonlijk ({ socialclass, socialsize }){
  const { Facebookpers,
    Facebookpersarialabel   
  } = useSiteMetadata()   
return (
<a href={Facebookpers}
className = {socialclass} 
target="_blank" rel="noopener noreferrer"
aria-label={Facebookpersarialabel}>
<FontAwesomeIcon icon={faFacebook} size={socialsize}/>
</a>
)
};

