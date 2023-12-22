import * as React from "react"
import FacebookPers from './facebookpersoonlijk'
import Instagrampersoonlijk from './instagrampersoonlijk'
import Linkedinpersoonlijk from './linkedinpersoonlijk'

const Socialfollow = () => (
  <>
      <FacebookPers
      socialclass = "facebook social" 
      socialsize= "1x"/>
      <Instagrampersoonlijk
      socialclass= "instagram social"
      socialsize= "1x"/>
      <Linkedinpersoonlijk
      socialclass = "linkedin social"
      socialsize= "1x"/>
    </>)
export default Socialfollow

   