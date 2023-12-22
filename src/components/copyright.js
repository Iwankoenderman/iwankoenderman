import * as React from "react"
import {useIntl} from 'gatsby-plugin-intl';
import './main.css'
import "@fontsource/clear-sans/500.css" // Defaults to weight 400 with all styles included.

export default function Copyright () { 
     const intl = useIntl();
  return (
    <p>{intl.locale === "nl" ? (<span> Website gebouwd: Iwan Koenderman </span>) : ( <span>Website built: Iwan Koenderman </span> )}&copy;{" "}{new Date().getFullYear().toString()}{" "}
  </p>
    )
}


