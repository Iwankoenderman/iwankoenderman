import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import {faTiktok} from "@fortawesome/free-brands-svg-icons";

export default function Instagrampersoonlijk ({ socialclass, socialsize }) {
  const {Tiktokpers,
    Tiktokpersarialabel
  } = useSiteMetadata()            
return (
<a href={Tiktokpers}
className = {socialclass} 
target="_blank" rel="noopener noreferrer"
aria-label={Tiktokpersarialabel}>
<FontAwesomeIcon icon={faTiktok} size={socialsize}/>
</a>
)
};

