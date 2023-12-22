import * as React from "react"
import { Link} from "gatsby"
import Item from './item'

export default function Menuright() {

  return (
      <>
      <div className="lang">
        <Link to="/"><Item text="NL"/> </Link>
      </div>
      </>
  );
}

