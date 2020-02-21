import React from "react"
import PropTypes from "prop-types"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faBroom,
  faEnvelope,
  faAngleDoubleRight,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faEllipsisV,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'

import {Footer} from "./"
import "./styles/layout.css"

library.add(
  fab,
  faBroom,
  faCoffee,
  faEnvelope,
  faAngleDoubleRight,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faEllipsisV,
  faChevronRight,
  faChevronLeft

)


const Layout = ({ children }) => {

  return (
    <>

    <main>{children}</main>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
