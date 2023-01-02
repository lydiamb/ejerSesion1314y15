/**
 * Ejemplo hooks:
 * -useState
 * -useContext
 */

import React, { useState, useContext } from 'react';



//Inicializamos un contexto vacio que va a rellenarse con los
//datos del padre
const miContexto = React.createContext(null);

/***
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recirbe desde el padre
 */
const Componente1 = () => {


    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: { state.token }
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es: { state.sesion }
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //vamos a crear el estado de este componete
    const [ sessionData, setSessionData ] =useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
                
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/*Todo lo que esta dentro puede leer los datos de sessionDAta ademas de actualizase*/}
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={  actualizarSesion }>Actualizar sesion</button>
        </miContexto.Provider>

    )
};
