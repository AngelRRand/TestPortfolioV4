import React, { useState, useEffect  } from 'react'
import Sprite from './Sprite'
import styles from './Sprite.module.scss';
import Hair from './Hair';

const SpriteBox = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

     useEffect(() => {
        const updatePosition = () => {
          // Incrementa x en 16, si llega a 48, vuelve a 0
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x === 96 ? 0 : prevPosition.x + 32,
          }));
    
          // Llama a la función de actualización nuevamente después de 1000ms (1 segundo)
          setTimeout(updatePosition, 200);
        };
    
        // Inicia la actualización inicialmente
        updatePosition();
    
        return () => {
          // No es necesario limpiar el timeout ya que estamos utilizando setTimeout en lugar de setInterval
        };
      }, []); // [] asegura que este efecto se ejecute una vez al montar el componente
     
      return (
        <div className={styles.box}>
        <Sprite position={position} />
          <Hair position={position}/>
        </div>
      );
    }
    
export default SpriteBox