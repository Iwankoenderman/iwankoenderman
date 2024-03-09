import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';

 export default function Pakketkolom({headrownl, pakketrow1nl, pakketrow2nl, pakketrow3nl, pakketrow4nl, pakketrow5nl, pakketrow6nl, pakketrow7nl, headrowen, pakketrow1en, pakketrow2en, pakketrow3en, pakketrow4en, pakketrow5en, pakketrow6en, pakketrow7en, }) {
    const intl = useIntl();
    return (  
     
        <>
{intl.locale === "nl" ? (<h2>{headrownl}</h2>):(<h2>{headrowen}</h2>)}
{intl.locale === "nl" ? (<p> {pakketrow1nl}</p>):(<p>{pakketrow1en}</p>)}
{intl.locale === "nl" ? (<p> {pakketrow2nl}</p>):(<p>{pakketrow2en}</p>)}
{intl.locale === "nl" ? (<p> {pakketrow3nl}</p>):(<p>{pakketrow3en}</p>)}
{intl.locale === "nl" ? (<p> {pakketrow4nl}</p>):(<p>{pakketrow4en}</p>)}
{intl.locale === "nl" ? (<p> {pakketrow5nl}</p>):(<p>{pakketrow5en}</p>)}
{intl.locale === "nl" ? (<p> {pakketrow6nl}</p>):(<p>{pakketrow6en}</p>)}
{intl.locale === "nl" ? (<p> {pakketrow7nl}</p>):(<p>{pakketrow7en}</p>)}
</>
);
}

