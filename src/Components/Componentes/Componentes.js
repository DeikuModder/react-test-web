import React from 'react'

const Componentes = (props) => {
  return (
    <section className={props.className} id='componentes'>
      <div className='description'>
        <h3>COMPONENTES</h3>

        <p>
          La mejor manera para entender los componentes de React, es entender cada parte del UI de nuestra página/app como un componente, la barra de navegación seria uno, cada botón seria otro, secciones, menús, etc. De esta manera dividimos el UI en pequeñas partes, haciendo mucho mas accesible trabajar una por una los componentes de nuestra página.

          Los componentes tienen dos tipos, la primera de tipo funcion, en la cual podemos agregar lógica de funciones para ciertas partes de la página, y de tipo clase, esta se comporta mas como las clases de JS vanilla, teniendo el detalle de que se tiene que usar, como en JS vanilla, el keyword <span>this</span>, llegando a ser un poco mas tedioso a la larga. Al final los dos tipos de componentes se encargan de retornar el codigo HTML y cualquier lógiuca que queramos agregar a este, para ser renderizado en pantalla.
        </p>
      </div>

      <div id='imgComponents'>
        <img alt='componente-tipo-funcion' src='https://somospnt.com/images/blog/articulos/177-componentes-en-react/componente_funcional.png' className='zoomImg' loading='lazy'/>

        <p>Ejemplo de componente tipo función</p>

        <img alt='componente-tipo-clase' src='https://somospnt.com/images/blog/articulos/177-componentes-en-react/componente_de_clase.png' className='zoomImg' loading='lazy'/>

        <p>Ejemplo de componente tipo clase</p>
      </div>
    </section>
  )
}

export default Componentes