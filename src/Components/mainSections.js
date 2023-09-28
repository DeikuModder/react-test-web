import React from 'react';
import WhatIs from './Que es section/whatIs';
import Functionality from './Functionality/functionality';
import JSX from './JSX/JSX';
import Componentes from './Componentes/Componentes';
import Estados from './Estados/Estados';

function MainSections(props) {
  return (
    <div>
      <WhatIs className={props.className}/>
      <Functionality className={props.className}/>
      <JSX className={props.className}/>
      <Componentes className={props.className}/>
      <Estados className={props.className}/>
    </div>
  )
}

export default MainSections
