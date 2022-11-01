import React from 'react';
import '../styles/Mouse.css';
import { useBackgraoundPosition }from '../hooks/useBackgraoundPosition';



const MouseApp = () => {
  const{ background, position }= useBackgraoundPosition();

  return (
    <div 
      style={{background, height: '100%'}}
      className='content-mouse'>
      <h2>Coordenadas de mouse</h2>
      <pre>
        { JSON.stringify(position, null, 2)}
      </pre>
    </div>
  )
}

export { MouseApp };
