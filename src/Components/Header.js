import React from 'react'
import Navbar from './Navbar'
import { FaReact } from "react-icons/fa";


const Header = (props) => {
  return (
  <div>
    <header className={props.className}>

        <h1><a href='https://deikumodder.github.io/react-test-web'>< FaReact id='logoHeader'/> ReactBlog</a></h1>

        <Navbar className={props.className}/>

    </header>
  </div>
  )
}

export default Header
