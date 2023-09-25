import React from 'react'
import Navbar from './Navbar'
import { FaReact } from "react-icons/fa";


const Header = (props) => {
  return (
  <div>
    <header className={props.className}>

        <div id='reactImageHeader'> < FaReact /> </div>

        <h1>React Blog</h1>

        <Navbar className={props.className}/>

    </header>
  </div>
  )
}

export default Header
