// import React from 'react'
//import PropTypes from 'prop-types'
import '../Assets/Styles/header.module.css'

/* 
TODO => create universal navbar/header w/ username 
TODO => favourite list button at joke list page
TODO => joke list button on favourite list page 
*/

const Header = ({title}) => {
  return (
    <header>
        <nav class="navbar navbar-light bg-light">
            Hello
        </nav>
    </header>
  )
}

Header.defaultProps = {
    title: 'Jokes List Generator',
}

export default Header