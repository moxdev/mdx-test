import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav>
    <ul
      style={{
        display: `flex`,
        listStyleType: `none`,
        alignItems: `center`,
      }}>
      <li>
        <Link
          to="/blog/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `0 1rem`,
            display: `block`,
          }}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `1rem`,
            display: `block`,
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `1rem`,
            display: `block`,
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
