/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado
 * a través de un hook y además poder modificarlo
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor incial para un contador
    const valorInicial = 0;

    //valor incial para una persona
    const personaInicial = {
        nombre : "Lydia",
        email: 'lydiamb12@gmail.com'
    }

    /**
     * Queremos que el valor inicial y pesonainicial sean parte del estado
     * del componente para así poder gestionar su cambio y que este se vea
     * reflejado en la vista del componente.
     * 
     * const[nombreVariables, funcionPAraCambiar] = useEstate(valorInicial)
     */
    const[contador, setContador] = useState(valorInicial);
    const[persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado 
     * que contiene el contador
     */
    function incrementarContador(){
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona
     * en el componente
     */
    function actualizarPersona(){
        setPersona(
                {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
                }
        )

    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h3>EMAIL: { persona.email }</h3>
            <button onClick={ incrementarContador }> Incrementar contador</button>
            <button onClick={ actualizarPersona }> Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1;
