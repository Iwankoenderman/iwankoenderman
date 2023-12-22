import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";

export default function Instagrampersoonlijk ({ socialclass, socialsize }) {
  const {Instagrampers,
    Instagrampersarialabel
  } = useSiteMetadata()            
return (
<a href={Instagrampers}
className = {socialclass} 
target="_blank" rel="noopener noreferrer"
aria-label={Instagrampersarialabel}>
<FontAwesomeIcon icon={faInstagramSquare} size={socialsize}/>
</a>
)
};

