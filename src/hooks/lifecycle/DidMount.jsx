import React, { Component, useEffect } from 'react'

/**
 * Ejemplo de uso del método ciclo de vida en componente clase
 */
export class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}



/**
 * 
 * el hook de ciclo de 
 * vide en componente funcional
 */
export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

