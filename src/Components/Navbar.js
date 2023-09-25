import React from 'react'

const Navbar = (props) => {
  return (
  <div>
    <nav className={props.className}>
        <ul className='navMenu'>
            <li>Que es</li>
            <li>Funcionalidad</li>
            <li>JSX</li>
            <li>Componentes</li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar


