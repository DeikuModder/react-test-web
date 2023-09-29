import React from 'react';
import WhatIs from './Que es section/whatIs';
import Functionality from './Functionality/functionality';
import JSX from './JSX/JSX';
import Componentes from './Componentes/Componentes';
import Props from './Props/Props';
import Estados from './Estados/Estados';
import EstadosEjemplo from './Estados/EstadosEjemplo';

function MainSections(props) {
  return (
    <div>
      <WhatIs className={props.className}/>
      <Functionality className={props.className}/>
      <JSX className={props.className}/>
      <Componentes className={props.className}/>
      <Props className={props.className}/>
      <Estados className={props.className}/>
      <EstadosEjemplo className={props.className}/>
    </div>
  )
}

export default MainSections
