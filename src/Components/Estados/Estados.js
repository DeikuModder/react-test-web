import React from 'react'

const Estados = (props) => {
  return (
    <section className={props.className} id='estados'>
        <div className='description'>
            <h3>Estados</h3>

            <p>
                Los estados en React son un tema un poco extenso, en terminos simples, en cualquier página o app, vas a tener componentes estáticos, que no van a cambiar a lo largo de su ciclo de vida, por ejemplo, un cuadro de texto o un título, permanecerán igual el resto de su vida útil. Pero que pasa cuando tienes componentes que van a estar actualizandose y cambiando información? Como pueden ser temas de color, información recibida de API's, etc.
                Ahi es cuando entran los estados, los estados mantienen el control de la informacion que reciben tus componentes. La mejora manera de mostrarlo es con ejemplos.
                <br/>
                El primer ejemplo es, otra vez, el modo oscuro de esta página, con el hook <code>useState</code>, al cual se le asigna <code>[state, setState]</code>, el state es el estado que va a tener tu componente y el setState es la funcion que se encargara de actualizarlo, esto en nuestro caso, daria que el state seria igual al theme de la pagina y el setState lo cambia. Creando una función que cambie de light a dark, y visceversa, la aplicamos a un botón, y pasamos <code>theme</code> como props a los componentes como su <code>className</code> ya tendriamos un modo oscuro funcional!
            </p>
        </div>
    </section>
  )
}

export default Estados
