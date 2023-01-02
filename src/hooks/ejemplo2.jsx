/** Ejemplo de use de:
 * -useState()
 * -useRef()
 * -useEffect()
*/

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //vamos a crear dos contadores  distintos
    //cada uno en un estado diferente

    const[contador1, setContador1] = useState(0);
    const[contador2, setContador2] = useState(0);

    //vamos a crear una referencia para asociar una variables
    //con un elemento del DOM del componente (vistaHTML)
    const myRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect
     * 
     * 1- Ejecutar siempre un snipper de código
     * Cada vez que haya un cambio den el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    /*
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(myRef);
    })*/


    /**
     * Caso 2 - Ejecutar solo en algunos casos
     * solo cuando cambie el contador 1 se ejecuta
     * el useEffect.
     */
    /*
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(myRef);
    },[contador1])
    */
   
        /**
     * Caso 3 - Ejecutar solo cuando cambie contado 1 o contador 2
     */
    
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 y CONTADOR2  ');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(myRef);
    },[contador1,contador2])
    

    return (
        <div>
            <h1>Ejemplo de useState, useRef y useEffect</h1>
            <h2>CONTADOR: { contador1 }</h2>
            <h2>CONTADOR: { contador2 }</h2>
            {/*Elemento referenciado */}
            <h4 ref={myRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={ incrementar1 }> Incrementar contador 1</button>
                <button onClick={ incrementar2 }> Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
