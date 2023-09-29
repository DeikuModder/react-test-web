import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Navbar = () => {

  const displayMenu = () => {
    const secondMenu = document.getElementById("secondaryMenu");
    const visibility = secondMenu.getAttribute("data-visible");

    visibility === "false" ? secondMenu.setAttribute("data-visible", true) : secondMenu.setAttribute("data-visible", false);

  }

  return (
  <div>
    <nav>
        <ul className='navMenu'>
            <li><a href="#whatIs">Que es</a></li>
            <li><a href="#functionality">Funcionalidad</a></li>
            <li><a href="#JSX">JSX</a></li>
            <li><a href='#componentes'>Componentes</a></li>
        </ul>

        <button onClick={displayMenu} id='secondMenuBtn'><BsFillArrowDownCircleFill /></button>

        <ul id='secondaryMenu' data-visible="false">
            <li><a href='#props'>Props</a></li>
            <li><a href='#estados'>Estados</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar


