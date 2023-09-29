import React from 'react'

const Props = (props) => {
  return (
    <section className={props.className} id='props'>
      <div id='propsImg'>
        <img alt='props-img' src='https://cdn-media-1.freecodecamp.org/images/1*Rzaf_TyulUee7xEdDs3bRw.png' className='zoomImg'/>
      </div>

      <div className='description'>
        <h3>Props</h3>

        <p>
          Antes de pasar a los estados, y dar un ejemplo de estos, es necesario saber acerca de los <span>props</span>, estos funcionan tal cual como los argumentos de una función de JS, la cualidad de los props, es que estos argumentos se pueden pasar a los hijos de un componente.

          Por ejemplo, el modo oscuro de esta página esta hecha de esa manera, cambiando el nombre de la clase de <span>light</span> a <span>dark</span>, y pasando esta variable a todos los componentes hijos que pueden recibir este prop.
        </p>
      </div>
    </section>
  )
}

export default Props
