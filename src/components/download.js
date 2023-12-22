import * as React from "react";
import {useIntl} from 'gatsby-plugin-intl';
import downloadNLFile from '../UA500XVWTX5/gratisebookvaniwankoenderman.pdf'
import downloadENFile from '../UA500XVWTX5/freeebookfromiwankoenderman.pdf'

export default function Download() {
  const intl = useIntl();

  return (
    <> 
    <div className='mainblock__hoofdrow'>
    <div className='mainblock__hoofdrow--calltoaction'>
    {intl.locale === "nl" ? (   
    <a href={downloadNLFile} className="button-cta" download > Klik voor download! </a> 
    ) : (
    <a href={downloadENFile} className="button-cta" download > Click to download! </a>   
    )}    
    </div>
    </div>
    </>                                       
       
  );
}

