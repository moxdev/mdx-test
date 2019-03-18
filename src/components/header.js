import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
