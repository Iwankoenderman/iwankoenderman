import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Hero() {
  const intl = useIntl();
  const {  author,
    subtitlenl1,
    subtitleen1,
  } = useSiteMetadata()
  return (
<div className="mainblockhero">       
<div style={{ display: "grid"}}>
   <StaticImage
     style={{
       gridArea: "1/1",
       maxHeight: 600,      
     }}
     layout="fullWidth"    
     loading = "eager"
     aspectRatio={3  / 1}
     title="Foto van coach Iwan Koenderman"
     alt="Foto van coach Iwan Koenderman"
     src={
         "../images/herovaniwankoendermand.png"
 
     }
     formats={["auto", "webp", "avif"]}
   />
   <div
     style={{
       gridArea: "1/1",
       position: "relative",
       placeItems: "center",
       display: "grid",
       color: "white",
       textShadow: " -2px 0 black, 0 2px #2b3747, 2px 0 black, 0 -2px #2b3747",
       marginLeft: "10px"
     }}
   >
     {intl.locale === "nl" ? (
     <h1>{author}</h1>
     ) : (
     <h1>{author}</h1>
     )}  
     <p>{" "}</p>
     <p>{" "}</p>
     <p>{" "}</p>
     <p>{" "}</p>
     {intl.locale === "nl" ? (
      <p className="tweedetitel">{subtitlenl1}</p>
     ) : (
      <p className="tweedetitel">{subtitleen1}</p>
     )}       
   </div>   
 </div>
 </div>
   );
}