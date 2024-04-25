import React from 'react'
import "./Links.css"

const Links = (props) => {
  return (
    <div>
      <h3 id='links'>Links</h3>
      <a href="https://github.com/liza">{props.github}</a>
      <a href="https://www.linkedin.com/in/liza/">{props.linkedin}</a>
    </div>
  )
}

export default Links
