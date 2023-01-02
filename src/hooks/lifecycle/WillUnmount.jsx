/**
 * Ejemplo de uso del metodo component willunmount para el componente clase
 * y ejemplo de uso de hooks para el componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("comportamiento antes de que el componente desaparezca");
    }

    render() {
        return (
        <div>
            <h1>WillUnmount</h1>
        </div>
        )
    }
}



export const WillUnmountHook = () => {

    useEffect(() => {
        
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca");
        };
    }, []);

    return (
        <div>
            <h1>willunmount</h1>
        </div>
    );
}


