/**
 * Ejemplo de uso de método componentDidUpdate en componente clase,
 * y uso de hook en componente funcinal
 */

import React, { Component, useEffect } from 'react';

export class DidUpdated extends Component {

    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado");
    }

    render() {
        return (
            <div>
                <h1>DidUpdated</h1>
            </div>
        );
    }
}


export const DidUpdatedHook = () => {

    useEffect(() => {
       console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
    });

    return (
        <div>
            
        </div>
    );
}




