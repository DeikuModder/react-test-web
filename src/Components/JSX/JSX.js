import React from 'react'

const JSX = (props) => {
  return (
    <section className={props.className} id='JSX'>
      <div id='jsxCode'>
        <img src='https://www.freecodecamp.org/news/content/images/2021/02/z02wxvp94dwg84c4ifhj.jpeg' alt='react-code'/>
      </div>

      <div className='description'>
        <h3 className='title'>JSX</h3>

        <p>
          Es el nombre que recibe la sintáxis dada de combinar HTML y JS, en esta sintáxis es donde nace la union de la logica en la UI de la página/aplicación. Como se puede llegar a apreciar en la imagen, dentro de nuestras funciones de JS, vamos a retornar elementos de HTML, con casi exactamente la misma sintáxis que en el HTML clásico. No obstante con eso, tambien dentro de ese mismo return, podemos seguir metiendo logica de JS en la misma estructura HTML, esto es especialmente útil a la hora de rendereizar en pantalla objetos que pueden o van a cambiar en algun momento.
        </p>
      </div>
    </section>
  )
}

export default JSX
