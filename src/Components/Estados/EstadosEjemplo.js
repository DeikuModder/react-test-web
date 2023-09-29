import React from 'react'
import { useState } from 'react'

function EstadosEjemplo(props) {
    const [ counter, setCounter ] = useState(0);

    const counterFunctions = (action) => {
        switch (action){
            case 'increment':
                return function Increment(){
                    return setCounter(counter + 1);
                }
            case 'decrement':
                return function Decrement(){
                    return counter <= 0 ? setCounter(0) : setCounter(counter - 1);
                    
                }
            case 'reset':
                return function Reset(){
                    return setCounter(0);
                }
            default:

        }
    }

    return (
        <section className={props.className} id='estadoContador'>
        <div id='counterBox'>
            <div id='counter'>
                {counter}
            </div>

            <div id='counterBtns'>
                <button onClick={counterFunctions('increment')}>Increment</button>
                <button onClick={counterFunctions('decrement')}>Decrement</button>
                <button onClick={counterFunctions('reset')}>Reset</button>
            </div>
        </div>

        <div>
            <p className='description'>
                Este contador es un ejemplo práctico de un estado. Creamos un <code>[counter, setCounter]</code> usando el <code>useState</code>, luego creamos las 3 funciones para sumar y restar uno, y resetear a 0 el contador, utilizando el <code>setCounter(a 0, contador + 1 o contador - 1)</code>, esto lo pasamos a los botones a traves de la funcion <code>onClick</code> y voilá! Un contador funcional usando React y sus estados. Notese que al presionar los botones, solo se re-renderizara el div que contiene el numero, y nada mas de la página.
            </p>
        </div>
            
        </section>
    )
}

export default EstadosEjemplo
