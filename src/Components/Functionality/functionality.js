import React from 'react'

const Functionality = (props) => {
  return (
    <section className={props.className} id='functionality'>
      <div className='description'>
        <h3 className='title'>COMO FUNCIONA?</h3>
        <p>
          Dicho anteriormente, React es una libreria que combina el HTML y el JS en uno, dancdo como resultado el <span>JSX</span>. Una de las razones por la cual React es tan util es por la capacidad de crear <span>componentes reutilizables</span>, componentes que son elementos del <span>UI</span> de la aplicación, haciendo que estos mismos se puedan utilizar varias veces en el mismo sitio o en otros sin necesidad de escribirlo una y otra vez, agilizando mas el desarrollo front end.
        </p>
      </div>

      <div className='description'> 
        <p>
          Otro punto muy importante acerca de React, el cual es otro de sus puntos fuertes son los <span>estados</span>, los cuales permiten el dinamismo en aplicaciones y facilitan la interactividad de las mismas. Gracias a los estados y los componentes, y la funcionalidad de React, solo los componentes que gracias a su estado, requieran actualizarse, van a ser actualizados y re-renderizados, de modo que los componentes que no lo necesitan, no se actualizaran.
        </p>
      </div>

      <div id='reactImageFunc'>
        <img src='https://mvpcluster.com/wp-content/uploads/2018/06/R8.png' alt='react-funcion'/>
      </div>
    </section>
  )
}

export default Functionality
