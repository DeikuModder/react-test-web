import React from 'react'
import { FaReact } from "react-icons/fa";

const WhatIs = (props) => {

  return (
    <section className={props.className} id='whatIs'>
        <div id='reactBigLogo'>
            <FaReact />
        </div>

        <div className='description'>
            <h2 className='title'>QUE ES <span>REACT</span>?</h2>

            <p>
                React es una libreria de <span>JavaScript</span>, la cual tiene como premisa combinar el <span>HTML</span> y el <span>JS</span> en un solo lenguaje (CSS tambien, solo que este es opcional), esto con el fin de simplificar el como se estructuran las paginas web, combinando la estructura dentro de la misma logica de esta. Esto a su vez abre la posibilidad a muchisimas opciones dentro del desarrollo front end. El resto de la página habla mas a fondo de estas posibilidades, herramientas y opciones que ofrece <span>React</span>.
            </p>

        </div>

    </section>
  )
}

export default WhatIs

