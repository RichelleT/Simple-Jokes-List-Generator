// import React from 'react'
//import PropTypes from 'prop-types'

/* 
TODO => create universal navbar/header w/ username 
TODO => favourite list button at joke list page
TODO => joke list button on favourite list page 
*/

const Header = ({title}) => {
  return (
    <header>
        <h1> {title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Jokes List Generator',
}

export default Header